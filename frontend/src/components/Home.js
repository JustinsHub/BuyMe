import React, {useState} from 'react'
import Products from './products/foodApi'
import './styles/Home.css'

const Home = () => {
    const [ourProducts, setOurProducts] = useState(null)

    const ourFunction = async() =>{
        //make sure when clicked it wont allow request when not logged in
        const res = await Products.getRandomProduct()
        console.log(res.data)
        setOurProducts(res.data.recipes[0].image)
    }
    return (
        <main className="Home">
            <section>
                <div className="Home-title container">
                    <h1 className="Home-ourTitle">Hungry?</h1>
                    <p className="h1">Can't think of what to eat?</p>
                </div>
                <div>
                    <p className="Home-p">
                        Save yourself the headache and have us pick out what to eat for you!
                    </p>
                </div>
                <div>
                    <p className="Home-p">Explore our food of the day!</p>
                </div>
                <button className="btn btn-danger" onClick={ourFunction}>Food of the day!</button>
            </section>
                {/* When user clicks it reverts them to a must login error page? */}

            <img src={ourProducts}></img>
        </main>
    )
}

export default Home