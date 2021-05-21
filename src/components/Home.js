import React, {useState} from 'react'
import Products from './products/foodApi'

const Home = () => {
    const [ourProducts, setOurProducts] = useState(null)

    const ourFunction = async() =>{
        const res = await Products.getRandomProduct()
        console.log(res.data.meals[0].strMealThumb)
        setOurProducts(res.data.meals[0].strMealThumb)
    }
    return (
        <div>
            <h1>Welcome to our Homepage!</h1>
            <img src={ourProducts}></img>
            <button onClick={ourFunction}>Click</button>
        </div>
    )
}

export default Home