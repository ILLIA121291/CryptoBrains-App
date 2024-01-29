import './header-menu.css';;
import { Component } from 'react';


class HeaderMenu extends Component {


  render() {



    return (
      <nav className="header_menu_nav">
        <ul className="header_menu">
          <li className="header_menu_link">
            <a href="#">Market</a>
          </li>
          <li className="header_menu_link">
            <a href="#">Trade</a>
          </li>
          <li className="header_menu_link">
            <a href="#">Earn</a>
          </li>
          <li className="header_menu_link">
            <a href="#">About</a>
          </li>
          <li className="header_menu_link">
            <a href="#">Career</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default HeaderMenu;
