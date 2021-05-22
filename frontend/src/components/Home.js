import React, {useState} from 'react'
import Products from './products/foodApi'

const Home = () => {
    const [ourProducts, setOurProducts] = useState(null)

    const ourFunction = async() =>{
        const res = await Products.getRandomProduct()
        console.log(res.data)
        setOurProducts(res.data.recipes[0].image)
    }
    return (
        <div>
            <h1>Welcome to our Homepage!</h1>
            <img src={ourProducts}></img>
            <button onClick={ourFunction}>Deal of the day!</button>
        </div>
    )
}

export default Home