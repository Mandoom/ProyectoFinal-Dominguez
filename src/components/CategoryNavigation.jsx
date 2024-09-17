import { NavLink } from "react-router-dom";

function CategoryNavigation( {categories} ) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>All Categories</NavLink>

                </li>
                {categories.map((category) => (
                    <li key={category.id}>
                        <NavLink 
                        to={`/category/${category.id}`}
                        className={({ isActive }) => (isActive ? 'active' : '')}>
                        {category.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default CategoryNavigation