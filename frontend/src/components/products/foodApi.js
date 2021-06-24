import axios from 'axios'
import {API_KEY} from '../../config'
import {ourRandomTags, ourRandomWines, randNum} from '../commons/shuffleArray'

const BASE_URL = "https://api.spoonacular.com" 

//base url api from backend
const BASE_URL_LOCAL= 'http://localhost:5001'

class Products {
    //our API for signature-meal
    static async getSignatureMeal() {
        const res = await axios.get(`${BASE_URL_LOCAL}/meals/signature-meal`)
        return res
    }

    static async getPairMeal(){
        const res = await axios.get(`${BASE_URL_LOCAL}/meals/pair-meal`)
        return res
    }
    //generates a random cuisine tag based on array in imported function
    static async getRandomMeal() {
        const res = await axios.get(`${BASE_URL}/recipes/random?&tags=${ourRandomTags}&apiKey=${API_KEY}`)
        return res
    }

    //random wine make sure to put type to match the random meal if there type on random meal api find it
    //generates a random number for API parameter
    static async getRandomWine() {
        const res = await axios.get(`https://api.spoonacular.com/food/wine/recommendation?wine=${ourRandomWines}&number=${randNum}&apiKey=${API_KEY}`)
        return res
    }

}

export default Products
