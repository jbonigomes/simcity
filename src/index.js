import { render } from 'react-dom'
import React, { useState } from 'react'

import data from './data'
import logo from './images/logo.png'

const App = () => {
  const [required, setRequired] = useState([])

  const handleAdd = (itemIn) => () => {
    setRequired([ ...required, itemIn ])
  }

  const handleRemove = (itemIn) => () => {
    let found = false

    setRequired(required.filter((item) => {
      if (!found && item.image === itemIn.image) {
        found = true
        return false
      }

      return true
    }))
  }

  const aggregate = (arr) => Object.values(arr.reduce((acc, { image }) => ({
    ...acc,
    [image]: {
      image,
      amount: acc[image]?.amount ? acc[image].amount + 1 : 1,
    },
  }), {}))

  const getDependencies = () => {
    const shallow = required.flatMap(({ deps }) => deps)
    const deep = shallow.flatMap((dep) => data.find(({ image }) => image === dep).deps)

    return aggregate([...shallow, ...deep].flatMap((image) => ({ image })))
  }

  return (
    <>
      <img className="logo" src={logo} />

      <div className="container">
        <div className="left">
          <h1>All items</h1>
          {data.map((item) => (
            <button onClick={handleAdd(item)} key={item.image}>
              <img className="item" src={item.image} />
            </button>
          ))}
        </div>

        <div className="right">
          <h1>Required items</h1>
          {required.length ? aggregate(required).map((item) => (
            <button onClick={handleRemove(item)} key={item.image}>
              <img className="item" src={item.image} />
              <span>x {item.amount}</span>
            </button>
          )) : (
            <p>No required items</p>
          )}

          <h1>Dependencies</h1>
          {getDependencies().length ? getDependencies().map((item) => (
            <button key={item.image} disabled>
              <img className="item" src={item.image} />
              <span>x {item.amount}</span>
            </button>
          )) : (
            <p>No dependencies</p>
          )}
        </div>
      </div>
    </>
  )
}

render(<App />, document.getElementById('root'))
