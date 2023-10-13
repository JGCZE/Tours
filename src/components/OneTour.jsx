
export const OneTour = ({ oneTour, removeTours }) => {
    const { id, image, name, info, price } = oneTour

    return (
        <>
            <div key={id}>
                <img src={image} style={{ width: "200px"}} />
                <p>{name}</p>
                <p>{info}</p>
                <p>${price}</p>
                <button onClick={() => removeTours(id)}>X</button>
            </div>
        </>
  )
}
export default OneTour