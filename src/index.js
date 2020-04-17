import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  const {course} = props
  return(
    <h1>{course.name}</h1>
  )
}

const Part = (props) =>{
  return(
    <p>{props.part} {props.ex}</p>
  )
}

const Content = (props) =>{  
  const {parts} = props
  
  return(
    <div>
      <Part part = {parts.parts[0].name} ex = {parts.parts[0].exercises} />
      <Part part = {parts.parts[1].name} ex = {parts.parts[1].exercises} />
      <Part part = {parts.parts[2].name} ex = {parts.parts[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  const {parts} = props
  return(
   <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course = {course} />
      <Content parts = {course} />
      <Total parts = {course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))