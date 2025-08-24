import { useState } from 'react'
import data from "./data/Data"
import ImcTable from './components/ImcTable'
import ImcCalc from './components/imcCalc'
import Button from './components/Button'
import './App.css'


function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()
    console.log("Calculated!")
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  
  return (
    <div className='container'>
      {!imc ? (<ImcCalc calcImc={calcImc}>/</ImcCalc>) : (<ImcTable></ImcTable>) }
    </div>
  )
}

export default App
