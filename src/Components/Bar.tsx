import { Link } from "react-router-dom";
const Bar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Bar;