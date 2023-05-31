import ItemList from './ItemList'
import React from 'react'
// import SearchBar from './Search'

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {/* <SearchBar /> */}
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete} 
          />

      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content