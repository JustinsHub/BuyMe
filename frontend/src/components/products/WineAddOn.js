import React, {useState} from 'react'
import Lottie from 'react-lottie'

const WineAddOn = ({wineRequest, clickNo}) => {
    const [wineDescription, setWineDescription] = useState(null)
    const [isClickedYes, setIsClickedYes] = useState(false)
    const [isClickedNo, setIsClickedNo] = useState(false)
    const [requestWine, setRequestWine] = useState(false)

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
        const {description} = res
        setTimeout(()=> 
        setWineDescription(description)
        , 4000)
        setRequestWine(true)
    }

    //when clicked yes add to cart and local storage to add on to checkout
    const clickedYes = () => {
        setIsClickedYes((state) => !state)
    }

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
                <section className="card">
                    <div className="card-body">
                        {wineDescription ?
                        <p className="card-text">{wineDescription}</p>
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
                <div>
                    <button onClick={wineAddOn}>Add on wine</button>
                </div>
                }
            </section>
            }
        </main>
    )
}

export default WineAddOn