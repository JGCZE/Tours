import Loading from "./components/Loading"
import Tours from "./components/Tours"
import './App.css'

import { useEffect, useState } from 'react';

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => { 
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  },[])

  if(loading){
    return <>
      <Loading />
    </>
  }

  return (
    <>
    {console.log(tours)}
      {tours.length > 0 ? (
        <Tours tours={tours} removeTours={removeTours}/>
      ) : (
        <button>X</button>
      )}
    </>
  )
}

export default App
