type NavList = '소개' | '서비스' | '연락처';
const navItems: NavList[] = ['소개', '서비스', '연락처'];

function Nav() {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={`#section${index}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
