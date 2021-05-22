import axios from 'axios'

const API_KEY = "540029da543b484184c482340c5424bd"
const BASE_URL = "https://api.spoonacular.com/recipes/random" //change to spoontacular 

class Products {
    static async getRandomProduct() {
        const res = await axios.get(`${BASE_URL}?apiKey=${API_KEY}`)
        return res
    }
}

export default Products