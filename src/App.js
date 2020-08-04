import React, { Fragment, useState } from 'react'
import logo from './ico-logo.png'
import recycle from './recycle.svg'
import './App.css'
import Formulario from './components/Formulario'
import List from './components/List'

function App() {
  // Arreglo de activities
  const [items, saveToDo] = useState([])
  // Guarda las tareas y agrega una nueva
  const createToDoItem = item => {
    saveToDo([...items, item])
  }
  const deleteItem = id => {
    const newItems = items.filter(item => item.id !== id)
    saveToDo(newItems)
  }
  const deleteAllItems = () => {
    const toResetItems = []
    saveToDo(toResetItems)
  }
  const text = items.length === 0 ? "No hay ToDo's, tomate un café!" : null

  return (
    <Fragment>
      <header>
        <div id='logoText'>
          <img src={logo} />
          <h1>Frontend Test</h1>
        </div>
      </header>
      <Formulario createToDoItem={createToDoItem} />
      <div>
        <div className='byIronBit'>
          <p>
            ToDo list by Iron Bit{' '}
            <img src={recycle} onClick={() => deleteAllItems()}></img>
          </p>
        </div>
        <div>
          <p> {text}</p>
          {items.map(item => (
            <List key={item.id} item={item} deleteItem={deleteItem} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default App
