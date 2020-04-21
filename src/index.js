import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
} 

const StatisticsLine = (props) => {
  return(
    <table>
      <tbody>
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>

      </tbody>
    </table>
  )
}

const Statistics = (props) => {
  return(
    <>
    <StatisticsLine text='good' value={props.value1} />  
    <StatisticsLine text='neutral' value={props.value2} />
    <StatisticsLine text='bad' value={props.value3} />
    <StatisticsLine text='total' value={props.value1+props.value2+props.value3} />
    <StatisticsLine text='average' value={(props.value1-props.value3)/(props.value1+props.value2+props.value3)} />
    <StatisticsLine text='positive' value={(props.value1/(props.value1+props.value2+props.value3))*100} />
    </>
  )
}

const Conditional = (props) => {
  if(props.value1 === 0 && props.value2 === 0 && props.value3 === 0) return <p>no feedback given</p>
  return(
    <>
    <Statistics value1 = {props.value1} value2={props.value2} value3={props.value3} />
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    return(
      setGood(good + 1)
 
   )
  }

  const increaseNeutral = () =>{
    return(
      setNeutral(neutral + 1)
    )
  } 
    
  
  const increaseBad = () => {
   return(
     setBad(bad + 1)
   )
  }

  return (
    <>
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />
    </div>
    <div>
      <h1>statistics</h1>
      <Conditional value1={good} value2={neutral} value3={bad} />
    </div>
    </>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)