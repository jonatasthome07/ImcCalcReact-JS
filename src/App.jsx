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
    
    data.forEach((item =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    }))
  }

  const resetCalc = (e) =>{
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  
  return (
    <div className='container'>
      {!imc ? (<ImcCalc calcImc={calcImc}>/</ImcCalc>) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}></ImcTable>) }
    </div>
  )
}

export default App
