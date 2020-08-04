import React from 'react'
import remove from '../remove.svg'

const List = ({ item, deleteItem }) => {
  console.log(item)
  return (
    <div className='toDolist-item'>
      <p>{item.toDoItem}</p>
      <button>
        <img src={remove} alt='' onClick={() => deleteItem(item.id)} />
      </button>
    </div>
  )
}

export default List
