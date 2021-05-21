import axios from 'axios'

const BASE_URL = "https://themealdb.com/api/json/v1/1/random.php" //change to spoontacular 

class Products {
    static async getRandomProduct() {
        const res = await axios.get(`${BASE_URL}`)
        return res
    }
}

export default Products