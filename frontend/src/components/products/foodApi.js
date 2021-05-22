import axios from 'axios'
import {API_KEY} from '../../config'

const BASE_URL = "https://api.spoonacular.com/recipes/random" 

class Products {
    static async getRandomProduct() {
        const res = await axios.get(`${BASE_URL}?apiKey=${API_KEY}`)
        return res
    }
}

export default Products