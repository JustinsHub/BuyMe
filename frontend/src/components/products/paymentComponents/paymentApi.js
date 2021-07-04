import axios from 'axios'

const BASE_URL_LOCAL = "http://localhost:5001"

class Payment {
    static async signatureMealPurchase(userId, mealId) {
        const res = await axios.post(`${BASE_URL_LOCAL}/signature/${mealId}/purchase/${userId}`)
        return res
    }
    
    static async pairMealPurchase(userId, mealId ,pairId) {
        const res = await axios.post(`${BASE_URL_LOCAL}/pair-meal/${mealId}/${pairId}/purchase/${userId}`)
        return res
    }

    static async signatureStripePayment(id) {
        try {
            const signatureMealPrice = 899
            const res = await axios.post(`${BASE_URL_LOCAL}/stripe/signature-meal-payment`, {
                amount: signatureMealPrice,
                id
            })
            if(res.data.success){
            console.log("Successful payment")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export default Payment