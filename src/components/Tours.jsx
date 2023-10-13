import OneTour from "../components/OneTour"

const Tours = ({ tours, removeTours }) => {

  return (
    <>
        <h2>our tours</h2>
        {tours.map((oneTour) => {
            return (
                <OneTour oneTour={oneTour} key={oneTour.id} removeTours={removeTours}/>
            )    
          })}
    </>
       
  )
}

export default Tours