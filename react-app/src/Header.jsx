import "./Header.css";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Shaxa Bravo</a>
        </li>
        <li>
          <a href="/car.html">Car</a>
        </li>
        <li>
          <a href="/animal/">Animal</a>
        </li>
        <li>
          <a href="#" onclick="showImage('sky')">
            Sky
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
