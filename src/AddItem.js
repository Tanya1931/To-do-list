import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'  //To change the focus back to the text field instead of the ad button

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef( )
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addTask'>Add Item</label>
        <input
          autoFocus
          id='addTask'
          ref= {inputRef}
          type='text'
          placeholder='Add Task'
          required
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Task'
            onClick={()=>inputRef.current.focus()}
        >
            <FaPlus />
        </button>

    </form>
  )
}

export default AddItem