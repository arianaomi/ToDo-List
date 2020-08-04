import React from 'react'
import remove from '../remove.svg'
import '../list.css'

const List = ({ item, deleteItem }) => {
  console.log(item)
  return (
    <div className='toDolist-item'>
      <p>{item.toDoItem}</p>
      <img src={remove} alt='' onClick={() => deleteItem(item.id)} />
    </div>
  )
}

export default List
