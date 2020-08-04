import React, { Fragment, useState } from 'react'
import '../formulario.css'
const Formulario = ({ createToDoItem }) => {
  //State toDOItem
  const [item, updateItem] = useState({
    toDoItem: '',
  })
  const [error, updateError] = useState(false)
  //
  const updateState = event => {
    updateItem({
      ...item,
      [event.target.name]: event.target.value,
    })
    console.log('escribiendo')
  }
  //

  const submitItem = event => {
    event.preventDefault()
    console.log(item.toDoItem)
    //Validando conntenido
    if (item.toDoItem.trim() === '') {
      updateError(true)
      return
    }
    updateError(false)

    item.id = Date.now()

    createToDoItem(item)

    updateItem({
      toDoItem: '',
    })
  }
  //
  return (
    <Fragment>
      {error ? <p className='alerta-error'>Ingresa una tarea</p> : null}
      <form className='submitText' onSubmit={submitItem}>
        <input
          type='text'
          name='toDoItem'
          placeholder='Agrega una nueva tarea'
          onChange={updateState}
          value={item.toDoItem}
        />
        <button type='submit'>Agregar</button>
      </form>
    </Fragment>
  )
}

export default Formulario
