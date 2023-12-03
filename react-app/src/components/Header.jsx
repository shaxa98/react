import "./Header.css";
const Header = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">{props.user} Bravo</a>
        </li>
        <li>
          <a href="/car">Car</a>
        </li>
        <li>
          <a href="/animal">Animal</a>
        </li>
        <li>
          <a href="/sky">Sky</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
