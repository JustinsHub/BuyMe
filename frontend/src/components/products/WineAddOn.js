import React, {useState} from 'react'
import Products from './foodApi'
import shuffleArray from '../commons/shuffleArray'

const WineAddOn = () => {
    const [wineTitle, setWineTitle] = useState(null)
    const [wineImage, setWineImage] = useState(null)
    const [wineDescription, setWineDescription] = useState(null)

    const wineAddOn = async() => {
        const res = await Products.getRandomWine()
        const randomWine = shuffleArray(res.data.recommendedWines)
        const {title, description, imageUrl} = randomWine
        setWineTitle(title)
        setWineImage(imageUrl)
        setWineDescription(description)
    }

    //get rid of pairmeal
    //conditional add on button if requested then no button and show the wine that is added on
    //figure out how to add on the price of wine with the meal to make it a paired meal
    return (
        <main>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{wineTitle}</h5>
                    <img src={wineImage} alt="wine-add-on"></img>
                    <p className="card-text">{wineDescription}</p>
                    <button onClick={wineAddOn}>Add on wine</button>
                </div>
            </div>
        </main>
    )
}

export default WineAddOn