const db = require('../db')
const ExpressError = require('../expressError')

const timePurchased = new Date(Date.now())

//add errors
//precheck for userId

class Product {
    //Both queries add to DB when meal is purchased depending on which choice. (Can be both?)
    //signature Meal query
    static async signatureMealPurchase(userId, mealId) {
        await db.query(
            //must match the exact DB names when inserting
            `INSERT INTO purchases (user_id, signature_meal)
            VALUES ($1, $2)`, [userId, mealId]
        )
    }

    //pair Meal query
    static async pairMealPurchase(userId, pairId){
        await db.query(
            `INSERT INTO purchases (user_id, pair_meal, purchased_on)
            VALUES ($1, $2)`, [userId, pairId, timePurchased]
        )
    }
}

module.exports = Product