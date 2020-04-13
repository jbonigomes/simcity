import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'

import data from './data'
import logo from '../images/logo.png'

const App = () => {
  const [required, setRequired] = useState([])
  const [displayDeps, setDisplayDeps] = useState([])
  const [displayRequired, setDisplayRequired] = useState([])

  const handleAdd = (itemIn) => () => {
    setRequired([ ...required, itemIn ])
  }

  const handleRemove = (itemIn) => () => {
    let found = false

    setRequired(required.filter((item) => {
      if (!found && item.image === itemIn.image) {
        console.log('debugging')
        found = true
        return false
      }

      return true
    }))
  }

  useEffect(() => {
    setDisplayRequired(Object.values(required.reduce((acc, { image }) => ({
      ...acc,
      [image]: {
        image: image,
        amount: acc[image]?.amount ? acc[image].amount + 1 : 1,
      },
    }), {})))

    setDisplayDeps(Object.values(required.flatMap(({ deps }) => deps).reduce((acc, image) => ({
      ...acc,
      [image]: {
        image,
        amount: acc[image]?.amount ? acc[image].amount + 1 : 1,
      },
    }), {})))
  }, [required, setDisplayRequired, setDisplayDeps])

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
          {displayRequired.length ? displayRequired.map((item) => (
            <button onClick={handleRemove(item)} key={item.image}>
              <img className="item" src={item.image} />
              <span>x {item.amount}</span>
            </button>
          )) : (
            <p>No required items</p>
          )}

          <h1>Dependencies</h1>
          {displayDeps.length ? displayDeps.map((item) => (
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
