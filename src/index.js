import { render } from 'react-dom'
import React, { useState } from 'react'

import data from './data'
import logo from '../images/logo.png'

const App = () => {
  const [required, setRequired] = useState({})

  const handleAdd = (key) => () => {
    setRequired({
      ...required,
      [key]: {
        ...data[key],
        amount: required[key]?.amount ? required[key].amount + 1 : 1,
      },
    })
  }

  const handleRemove = (key) => () => {
    setRequired({
      ...required,
      [key]: {
        ...required[key],
        amount: required[key]?.amount >= 1 ? required[key].amount - 1 : 0,
      },
    })
  }

  return (
    <>
      <img className="logo" src={logo} />

      <div className="container">
        <div className="left">
          <h1>Raw materials</h1>
          {Object.keys(data).filter((key) => data[key].type === 'raw').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Building store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'building').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Hardware store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'hardware').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Farmers market</h1>
          {Object.keys(data).filter((key) => data[key].type === 'farmers').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Furniture store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'furniture').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Gardening store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'gardening').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Donut store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'donut').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Fashion store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'fashion').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Fast food store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'food').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}

          <h1>Home store</h1>
          {Object.keys(data).filter((key) => data[key].type === 'home').map((key) => (
            <button onClick={handleAdd(key)} key={key}>
              <img className="item" src={data[key].image} />
            </button>
          ))}
        </div>
        <div className="right">
          <h1>Required</h1>
          {Object.keys(required).filter((key) => required[key].amount).map((key) => (
            <div key={key} className="line">
              <button onClick={handleRemove(key)}>
                <img className="item" src={required[key].image} />
              </button>
              <span>x {required[key].amount}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

render(<App />, document.getElementById('root'))
