
import HeaderMenu from './header-menu/header-menu';
import './app-header.css';




const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header-content-border">
        <div className="app-header-content-border-logo">
          <a href="#">
            <img src="/logo.svg" alt="Main logo" />
          </a>
        </div>
      <HeaderMenu/>
      </div>
    </header>
  );
};

export default AppHeader;
