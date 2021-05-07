const db = require('../db')
const ExpressError = require('../expressError')
const bcrypt = require('bcrypt')
const {BCRYPT_WORK_FACTOR} = require('../config')

class User {
    constructor(id, username, password, first_name, last_name, email, address){
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name; 
        this.email = email;
        this.address = address;
    }
    static async getAll(){
        const results = await db.query(`SELECT id, username, password, first_name, last_name, email, address
                                        FROM users`)
        const users = results.rows.map(u => new User(u.id, u.username, u.password, u.first_name, u.last_name, u.email, u.address))
        return users
    }
    static async getUserId(id){
        const results = await db.query(`SELECT id, username, first_name, last_name, email, address
                                        FROM users WHERE id=$1`, [id])
        const u =  results.rows[0]
        if(!u){
            throw new ExpressError("User not found", 404)
        }
        return new User(u.id, u.username, u.password, u.first_name, u.last_name, u.email, u.address)
    }

    static async register(user, pass, mail){
        const hashedPassword = await bcrypt.hash(pass, BCRYPT_WORK_FACTOR)
        const results = await db.query(`INSERT INTO users (username, password, email) VALUES ($1,$2,$3)
                                        RETURNING id, username`, [user, hashedPassword, mail])
        const newUser = results.rows[0] 
        if(newUser){
            delete newUser.password
        }
        return new User(newUser)
    }

    static async login(username, password){
        const results = await db.query(`SELECT id, username, password FROM users WHERE username = $1`, [username])
        const user = results.rows[0]
        if (user) {
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
            delete user.password;
            return user;
            }
        }
        throw new ExpressError('Username/Password are required.', 400)
    }

    static async checkPassword(userId, password){
        const results = await db.query(`SELECT id, password FROM users WHERE id=$1`, [userId])
        const userId = results.rows[0]
        const validPassword = await bcrypt.compare(password, userId.password)
        if(validPassword === true){
            return validPassword
        }

    }
    async updateUser(){
        const res = await db.query(`UPDATE users SET first_name=$1, last_name=$2, email=$3, address=$4 WHERE id=$5 
                                    `,[this.first_name, this.last_name, this.email, this.address, this.id])
        if(!res) {
            throw new ExpressError('Must fill out all input', 400)
        }
    }

    async deleteUser(){
        if(this.id === undefined){
            throw new ExpressError('Invalid User', 404)
        }
        await db.query(`DELETE FROM users WHERE id=$1`, [this.id])
    }
}
module.exports = User
