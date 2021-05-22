import axios from 'axios'
import {API_KEY} from '../../config'

<<<<<<< HEAD
const BASE_URL = "https://api.spoonacular.com/recipes/random" 
=======
const BASE_URL = "https://api.spoonacular.com/recipes/random"
>>>>>>> 585ed111c875f8c2b08279f20b22794e80b286c3

class Products {
    static async getRandomProduct() {
        const res = await axios.get(`${BASE_URL}?apiKey=${API_KEY}`)
        return res
    }
}

export default Products