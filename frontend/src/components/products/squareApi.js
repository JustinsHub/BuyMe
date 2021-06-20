import SQUARE_ACCESS_TOKEN from '../config'
import { Client, Environment } from 'square'

const client = new Client({
    environment: Environment.Sandbox,
    accessToken: SQUARE_ACCESS_TOKEN,
})


class Square {
    
    static async createPayments() {
        try {
            const response = await client.paymentsApi.createPayment({
                sourceId: 'cnon:card-nonce-ok',
                idempotencyKey: '36efbe64-c8dc-492a-a202-a2e24accb898',
                amountMoney: {
                amount: 9,
                currency: 'USD'
                }
            });
        
            console.log(response.result);
            } catch(error) {
            console.log(error);
        }
}
}

export default Square