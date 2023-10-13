import { useState } from "react"

export const OneTour = ({ oneTour, removeTours }) => {
    const [readMore, setReadMore] = useState(false)
    
    const { id, image, name, info, price } = oneTour
    

    return (
        <>
            <div key={id}>
                <img src={image} style={{ width: "200px"}} />
                <p>{name}</p>
                <p>{readMore ? info : `${info.substring(0, 150)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show less" : "Read more"}
                    </button>
                </p>
                <p>${price}</p>
                <button onClick={() => removeTours(id)}>X</button>
            </div>
        </>
  )
}
export default OneTour