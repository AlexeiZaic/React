import './App.css'
import React, {useState} from 'react'

//Propsi otettu vastaansuoraan nimellä
const Laskuri = ({huomio}) => {

//Komponentin tilan määritys
const [luku, setLuku] = useState(0)

const nollaaLaskuri = () => {
    setLuku(0)
}
  return (
    <>
    <h3>{luku}</h3>

    <button onClick={() => setLuku(luku + 1) }>+</button>
    <button onClick={() => setLuku(luku - 1) }>-</button>     
    <button onClick={nollaaLaskuri}>0</button> 

    <button onClick={huomio}>huomio</button>

    </>
  )
}

export default Laskuri