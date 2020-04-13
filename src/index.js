import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'

import data from './data'
import logo from '../images/logo.png'

const App = () => {
  const [required, setRequired] = useState([])
  const [dependencies, setDependencies] = useState([])

  const handleAdd = (itemIn) => () => {
    if (required.find(item => item.key === itemIn.key)) {
      setRequired(required.map((item) => ({
        ...item,
        amount: itemIn.key === item.key ? item.amount + 1 : item.amount,
      })))
    } else {
      setRequired([...required, { ...itemIn, amount: 1 }])
    }
  }

  const handleRemove = (itemIn) => () => {
    if (required.find(item => item.key === itemIn.key)?.amount > 1) {
      setRequired(required.map((item) => ({
        ...item,
        amount: itemIn.key === item.key ? item.amount - 1 : item.amount,
      })))
    } else {
      setRequired(required.filter((item) => itemIn.key !== item.key))
    }
  }

  useEffect(() => {
    setDependencies(
      required
        .flatMap(({ deps }) => deps)
        .filter((val, idx, self) => self.indexOf(val) === idx)
    )
  }, [required])

  return (
    <>
      <img className="logo" src={logo} />

      <div className="container">
        <div className="left">
          <h1>All items</h1>
          {data.map((item) => (
            <button onClick={handleAdd(item)} key={item.key}>
              <img className="item" src={item.image} />
            </button>
          ))}
        </div>

        <div className="right">
          <h1>Required items</h1>
          {required.length ? required.map((item) => (
            <button onClick={handleRemove(item)} key={item.key}>
              <img className="item" src={item.image} />
              <span>x {item.amount}</span>
            </button>
          )) : (
            <p>No required items</p>
          )}

          <h1>Dependencies</h1>
          {dependencies.length ? dependencies.map((dep) => (
            <img className="item dep" src={dep} key={dep} />
          )) : (
            <p>No dependencies</p>
          )}
        </div>
      </div>
    </>
  )
}

render(<App />, document.getElementById('root'))
