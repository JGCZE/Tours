import OneTour from "../components/OneTour"

const Tours = ({ tours, removeTours }) => {

  return (
    <section>
        <div className="title">
            <h2>Our tours</h2>
            <div className="title-underline"></div>
        </div>

        <div className="tours">
            {tours.map((oneTour) => {
                return (
                    <OneTour oneTour={oneTour} key={oneTour.id} removeTours={removeTours}/>
                )    
            })}
        </div>
    </section>
       
  )
}

export default Tours