const db = require('../db')
const ExpressError = require('../expressError')

class Address {
    constructor(user_id, street_address, address_number, city, state, zip_code, country){
        this.user_id = user_id;
        this.street_address = street_address;
        this.address_number = address_number;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.country = country;
    }

    //add error handling to all
    static async getAllAddress(){
        const res = await db.query(`SELECT user_id, street_address, address_number, city, state, zip_code, country
                                    FROM user_address`)
        const address = res.rows.map(a => new Address(a.user_id, a.street_address, a.address_number, a.city, a.state, a.zip_code, a.country))
        return address
    }

    static async getAddressId(user_id){
        const res = await db.query(`SELECT user_id, street_address, address_number, city, state, zip_code, country WHERE id=$1`, [user_id])
        const a = res.rows[0]
        return new Address(a.user_id, a.street_address, a.address_number, a.city, a.state, a.zip_code, a.country)
    }

    static async registerAddress(street_name, address_number, city, state, zip_code, country){
        const res = await db.query(`INSERT INTO user_address (street_address, address_number, city, state, zip_code, country, user_id)
                                    VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING street_name, address_number, city, state, zip_code, country
                                    `,[street_address, address_number, city, state, zip_code, country, user_id])
        const ourAddress = res.rows[0]
        return new Address(ourAddress)
    }

    async updateAddress(){
        await db.query(`UPDATE user_address SET street_address=$1, address_number=$2, city=$3, state=$4, zip_code=$5, country=$6`,
                        [this.street_address, this.address_number, this.city, this.state, this.zip_code, this.country])
    }
}

module.exports = Address