import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/clients'>Clients</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
