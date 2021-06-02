import axios from 'axios'
import {API_KEY} from '../../config'
import ourRandomTags from '../commons/shuffleTags'

const BASE_URL = "https://api.spoonacular.com" 

class Products {
    static async getRandomMeal() {
        const res = await axios.get(`${BASE_URL}/recipes/random?tags=${ourRandomTags}&apiKey=${API_KEY}`)
        return res
    }

    //random wine make sure to put type to match the random meal if there type on random meal api find it
    static async getPairWine() {
        const res = await axios.get(`https://api.spoonacular.com/food/wine/pairing?food=mediterranean&apiKey=${API_KEY}`)
        return res
    }
}

export default Products