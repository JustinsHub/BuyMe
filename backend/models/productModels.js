const db = require('../db')
const ExpressError = require('../expressError')

class Product {
    static async signatureMealPurchase(userId, mealId) {
        await db.query(
            `INSERT INTO purchases (userId, mealId)
            VALUES ($1, $2)`, [userId, mealId]
        )
    }

    static async pairMealPurchase(userId, pairId){
        await db.query(
            `INSERT INTO purchases (userId, pairId)
            VALUES ($1, $2)`, [userId, pairId]
        )
    }
}

module.exports = Product