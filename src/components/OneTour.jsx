import { useState } from "react"

export const OneTour = ({ oneTour, removeTours }) => {

    const [readMore, setReadMore] = useState(false)
    const { id, image, name, info, price } = oneTour

    return (
        <article className="single-tour">
            <img src={image} className="img"/>
                <p className="tour-price">${price}</p>
                <div className="tour-info">
                    <h5>{name}</h5>
                    <p className="tour-info">{readMore ? info : `${info.substring(0, 150)}...`}
                        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Show less" : "Read more"}
                        </button>
                    </p>
                    <button className="delete-btn btn-block btn" onClick={() => removeTours(id)}>Remove</button>
                </div>
        </article>
  )
}
export default OneTour