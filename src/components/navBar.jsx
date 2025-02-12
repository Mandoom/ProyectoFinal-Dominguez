import CartWidget   from './Cart/CartWidget'
import { NavLink, Link } from 'react-router-dom'

function NavBar ({pageTitle, bg, pad, color, brandfont }) { 
 return(
    <div style={{backgroundColor : bg, padding: pad, color : color}}>
       <div className='container navbar '> 
        <div className='brand'>
            <div className="logo">
            </div>
            <h1 className="title" style={{fontFamily: brandfont}}>{pageTitle}</h1>
            </div>
            <nav>
            
            <ul className='menu'>
                    <NavLink className={({ isActive }) => `${isActive ? 'active' : ''} menu-link`} to='/'>Store</NavLink>
                    <NavLink className="menu-link"to='/inventory'>Your Inventory</NavLink>

                    
            </ul>
            </nav>

            <div className='cartWidgetContainer'>
                <Link to={'/cart'}>
                    <CartWidget />
                </Link>
            </div>



       </div>

    </div>
 )   
}

export default NavBar 