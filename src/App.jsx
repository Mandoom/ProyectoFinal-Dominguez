
import './App.css'
import  NavBar from './components/navBar'
import ItemListContainer  from './components/ItemListContainer'
import InventoryListContainer from './components/InventoryListContainer'
import ItemDetail from './components/itemDetail'
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
    const paddings= '20px'// no se si esto es good practice... 
    const pokeFont= "'Pokemon Solid', sans-serif" // no se si esto es good practice... 

  return (
    <>
    <BrowserRouter>
      <NavBar 
        bg='red' 
        pageTitle='PokeStore' 
        pad={paddings} 
        brandfont={pokeFont}
      />
    <Routes>
      <Route path='/'   element={<ItemListContainer sectionTitle="Selected Products For Your Adventures"/>}/>
      <Route path='/inventory'   element={<InventoryListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/product/:id" element={<ItemDetail />} />
    </Routes>
    </BrowserRouter>
   
    

    </>
  )
}

export default App
