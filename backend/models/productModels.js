const db = require('../db')
const ExpressError = require('../expressError')

const timePurchased = new Date(Date.now())
//precheck for userId
//add error handling
class Product {
    //Both queries add to DB when meal is purchased depending on which choice. (Can be both?)
    
    //signature Meal query
    static async signatureMealPurchase(userId, mealId) {
        await db.query(
            //must match the exact DB names when inserting
            `INSERT INTO purchases (user_id, signature_meal, purchased_on)
            VALUES ($1, $2, $3)`, [userId, mealId, timePurchased]
        )
    }

    //pair Meal query
    static async pairMealPurchase(userId, pairId){
        await db.query(
            `INSERT INTO purchases (user_id, pair_meal, purchased_on)
            VALUES ($1, $2, $3)`, [userId, pairId, timePurchased]
        )
    }
}

module.exports = Product