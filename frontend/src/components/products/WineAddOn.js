import React, {useState} from 'react'
import Lottie from 'react-lottie'

const WineAddOn = ({wineRequest}) => {
    const [wineDescription, setWineDescription] = useState(null)
    const [isClicked, setIsClicked] = useState(false)
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

    const clickAddOn = () => {
        setIsClicked((state) => !state)
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
                {!isClicked ?
                <div>
                    <p>Before you add to cart, would you like to add wine to pair with your meal?</p>
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