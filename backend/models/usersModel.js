const db = require('../db')
const ExpressError = require('../expressError')

class User {
    constructor(id, username, password, firstName, lastName, email, address){
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = firstName;
        this.last_name = lastName; 
        this.email = email;
        this.address = address;
    }
    static async getAll(){
        const results = await db.query(`SELECT id, username, password, first_name, last_name, email, address
                                        FROM users`)
        const users = results.rows.map(u => new User(u.id, u.username, u.password, u.firstName, u.lastName, u.email, u.address))
        return users
    }
    static async getUserId(id){
        const results = await db.query(`SELECT id, username, password, first_name, last_name, email, address
                                        FROM users WHERE id=$1`, [id])
        const u =  results.rows[0]
        if(!u){
            throw new ExpressError("User not found", 404)
        }
        return new User(u.id, u.username, u.password, u.firstName, u.lastName, u.email, u.address)
    }
    static async register(user, pass, mail){
        const results = await db.query(`INSERT INTO users (username, password, email) VALUES ($1,$2,$3)
                                        RETURNING id, username`, [user, pass, mail])
        const newUser = results.rows[0]
        return new User(newUser)
    }
}
module.exports = User