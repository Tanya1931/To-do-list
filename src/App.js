import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {
  const API_URL = 'http://localhost:3500/items'
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  // useEffect(()=>{
  //   console.log('render'); this is  the simplest version of the useeffect it will run on every render
  // },[]) without other parameter it will run on EVERY render to prevent it pass an empty array to run on every load
  //itll look for dependancy, if it changes then it ll run

  useEffect(()=>{
    const fetchItems = async() => {
      try{
        const response = await fetch(API_URL)
        const listItems = await response.json()
        setItems(listItems)
      }catch(err){
        console.log(err.stack);
      }
    }
    (async ()=> await fetchItems())()
},[])

  const SetItems =(newItems)=>{
    setItems(newItems);
  }

  const addItem = (item) =>{
    const id = items.length? items[items.length-1].id+1 : 1
    const myNewItem = {id, checked: false, item}
    const listItem = [...items, myNewItem]
    SetItems(listItem)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    SetItems(listItems)

  }

  const handleDelete = (id) => {
    const listItem = items.filter((item)=>item.id!==id);
    SetItems(listItem)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!newItem){    //if the newItem is undefeinded or false
      return
    }
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div className="App">
      <Header title="To Do List" />
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit} />
      <SearchItem
        search = {search}
        setSearch = {setSearch}  />
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      <Footer length={items.length}/>      
    </div>
  );
}

export default App;             

                                                                                           
