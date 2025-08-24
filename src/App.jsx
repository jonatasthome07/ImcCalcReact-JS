import { useState } from 'react'
import data from "./data/Data"
import ImcTable from './components/ImcTable'
import ImcCalc from './components/imcCalc'
import Button from './components/Button'
import './App.css'


function App() {

  //Function to calculate IMC
  const calcImc = (e, height, weight) => {
    e.preventDefault()
    console.log(height, weight)
    if (!height || ! weight){
      return
    }

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    setImc(imcResult)
    console.log(imcResult)
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
