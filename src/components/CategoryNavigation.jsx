import { NavLink } from 'react-router-dom';

function CategoryNavigation({ categories }) {
  return (
    <nav>
      <ul className="category-navigation">
        {/* Link to display all categories */}
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            All Categories
          </NavLink>
        </li>
        {/* Loop through categories to create navigation links */}
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/category/${category.id}`} // Link to category-specific path
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {category.name} {/* Display category name */}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNavigation;
