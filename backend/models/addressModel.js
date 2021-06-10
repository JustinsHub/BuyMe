const db = require('../db')
const ExpressError = require('../expressError')

class Address {
    constructor(id, street_name, address_number, city, state, zip_code, country, user_id){
        this.id = id;
        this.street_name = street_name;
        this.address_number = address_number;
        this.city = city;
        this.state = state;
        this.zip_code = zip_code;
        this.country = country;
        this.user_id = user_id
    }

    //add error handling to all
    static async getAllAddress(){
        const res = await db.query(`SELECT id, street_name, address_number, city, state, zip_code, country, user_id
                                    FROM user_address`)
        const address = res.rows.map(a => new Address(a.id, a.street_name, a.address_number, a.city, a.state, a.zip_code, a.country, a.user_id))
        return address
    }

    static async getAddressId(id){
        const res = await db.query(`SELECT id, street_name, address_number, city, state, zip_code, country WHERE id=$1`, [id])
        const a = res.rows[0]
        return new Address(a.id, a.street_name, a.address_number, a.city, a.state, a.zip_code, a.country, a.user_id)
    }

    static async registerAddress(street_name, address_number, city, state, zip_code, country){
        const res = await db.query(`INSERT INTO user_address (street_name, address_number, city, state, zip_code, country, user_id)
                                    VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING street_name, address_number, city, state, zip_code, country
                                    `,[street_name, address_number, city, state, zip_code, country, user_id])
        const ourAddress = res.rows[0]
        return new Address(ourAddress)
    }

    async updateAddress(){
        await db.query(`UPDATE user_address SET street_name=$1, address_number=$2, city=$3, state=$4, zip_code=$5, country=$6`,
                        [this.street_name, this.address_number, this.city, this.state, this.zip_code, this.country])
    }
}

