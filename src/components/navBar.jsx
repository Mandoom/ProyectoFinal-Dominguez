import CartWidget   from './cartWidget'
import { NavLink } from 'react-router-dom'

function NavBar ({pageTitle, bg, pad, color, brandfont }) { 
 return(
    <div className='navbar'style={{backgroundColor : bg, padding: pad, color : color}}>
        <div className='brand'>
        <div className="logo">
        

        </div>
        <h1 className="title" style={{fontFamily: brandfont}}>{pageTitle}</h1>
        </div>
        <nav>
            
           <ul className='menu'>
                <NavLink className={({ isActive }) => `${isActive ? 'active' : ''} menu-link`} to='/'>Store</NavLink>
                <NavLink className="menu-link"to='/inventory'>Your Inventory</NavLink>
                <NavLink className="menu-link"to='/inventory'>Pokedex</NavLink>
                
           </ul>
        </nav>

        <div className='cartWidgetContainer'>
            <CartWidget />
        </div>

    </div>
 )   
}

export default NavBar