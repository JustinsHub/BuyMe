import React, {useState} from 'react'
import Lottie from 'react-lottie'
import useLocalStorage from '../custom-hooks/useLocalStorage'
import Products from './foodApi'

const WineAddOn = ({wineRequest, clickNo, mealTitle, wineImage, addToCart}) => {
    const wineAddOnStorage = "pair-meal"
    const [wineDescription, setWineDescription] = useState(null)
    const [isClickedYes, setIsClickedYes] = useState(false)
    const [requestWine, setRequestWine] = useState(false)
    const [wineTitle, setWineTitle] = useState(null)
    const [winePrice, setWinePrice] = useState(null)
    const [localWineAddOn, setLocalWineAddOn] = useLocalStorage(wineAddOnStorage)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../styles/logos/wineLoading.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    //prop passed down from SignatureMeal. It extracts the already shuffled array title and description to render in the component
    const wineAddOn = async() => {
        const res = await wineRequest()
        const wineResults = await Products.getPairMeal()
        const winePrice = wineResults.data[0].price
        const {description, title} = res
        setTimeout(()=> {
        setWineDescription(description)
        setWineTitle(title)
        setWinePrice(winePrice)
        }, 4000)
        setRequestWine(true)
    }

    const wineAddOnCheckout = async() =>{
        //localStorage to wine with price image and title how to get image?
        await setLocalWineAddOn(JSON.stringify({wineTitle, wineImage, winePrice}))
        addToCart()
    }

    //when clicked yes add to cart and local storage to add on to checkout
    const clickedYes = () => {
        setIsClickedYes((state) => !state)
    }

    //prop passed down from SignatureMeal to render properly
    const clickedNo = () => {
        clickNo((state) => !state)
    }
    
    //add a setTimeout for delay for loading... 
    //conditional add on button if requested then no button and show the wine that is added on
    //figure out how to add on the price of wine with the meal to make it a paired meal
    return (
        <main>
            {/* add loading wine screen when request... getting a perfectly matched wine for your meal */}
            {requestWine ?
                <section className="">
                    <div className="card-body">
                        {wineDescription ?
                        <div>
                        <p><b>{mealTitle}</b> goes well specifically with <b>{wineTitle}</b></p>
                        <p className="card-text">This wine is a {wineDescription}</p>
                        {/* figure this out why here */}


                        <div>
                            <button className="btn btn-default m-1" style={{color: "white"}} onClick={wineAddOnCheckout}>Add to cart</button>
                        </div>
                        </div>
                        :
                        <div>
                        <Lottie options={defaultOptions} height={200} width={200}/>
                        <p className="Signature-Meal-p-f">Please wait one moment while we pair your meal with delicious wine!</p>
                        </div>
                        }
                    </div>
                </section>
            :
            <section>
                {!isClickedYes ?
                <div>
                    <p>Before you add to cart, would you like wine to pair well with your meal?</p>
                    <button className="btn btn-default m-1" style={{color: "white"}} onClick={clickedYes}>Yes</button>
                    <button className="btn btn-secondary m-1" style={{color: "white"}} onClick={clickedNo}>No</button>
                </div>
                :
                //setWine conditional if wine is request have add on button
                <div>
                    <button className="btn btn-default m-1" style={{color: "white"}} onClick={wineAddOn}>Add on wine</button>
                </div>
                }
            </section>
            }
        </main>
    )
}

export default WineAddOn