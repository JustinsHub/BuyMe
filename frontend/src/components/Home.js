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
        <main className="Home col-md">
            <section className="Home-bg col-md">
                <div className="container">
                    <p className="Home-spacing">.</p>
                        <div className="Home-title">
                            <p className="Home-ourTitle">Hungry?</p>
                            <p className="Home-p">Having a hard time thinking of what to eat?</p>
                        </div>
                <div>
                    <p className="Home-p">
                        Save yourself the headache and have us pick out what to eat for you!
                    </p>
                </div>

                {/* should redirect to login? or below the page and pick a random food/pairing */}
                {/* When user clicks it reverts them to a must login error page? */}
                {/* get started button expands when hovered */}
                <button className="btn btn-danger" onClick={ourFunction}>Get Started!</button>
                </div>
            </section>
                {/* Have the page scroll to buy or add to cart about pricing? */}

            <section className="mt-5">
                <HowItWorks/>
            </section>

            <section className="mt-5">
                <Reviews/>
            </section>
                
            <img src={ourProducts}></img>
        </main>
    )
}

export default Home