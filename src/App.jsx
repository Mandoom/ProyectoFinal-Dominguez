
import './App.css'
import  NavBar from './components/navBar'
import ItemListContainer  from './components/ItemListContainer'



function App() {
    const paddings= '20px'// no se si esto es good practice... 
    const pokeFont= "'Pokemon Solid', sans-serif" // no se si esto es good practice... 

  return (
    <>
    <NavBar 
    bg='red' 
    pageTitle='PokeStore' 
    pad={paddings} 
    brandfont={pokeFont}
    />
    <ItemListContainer 
    sectionTitle='Selected Items for your Pokemon adventures'
    sectionSubtitle='No items available at the moment'
    pad={paddings}
    />

    </>
  )
}

export default App
