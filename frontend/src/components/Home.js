import React, {useState} from 'react'
import Products from './products/foodApi'
import HowItWorks from './products/HowItWorks'
import Reviews from './products/Reviews'
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
                    <p className="Home-p">Get started and explore our choices!</p>
                </div>

                {/* should redirect to login? or below the page and pick a random food/pairing */}
                {/* When user clicks it reverts them to a must login error page? */}
                {/* get started button expands when hovered */}
                <button className="btn btn-danger" onClick={ourFunction}>Get Started!</button>
            </section>
                {/* Have the page scroll to buy or add to cart about pricing? */}
                
            <section>
                <HowItWorks/>
            </section>

            <section>
                <Reviews/>
            </section>
                
            <img src={ourProducts}></img>
        </main>
    )
}

export default Home