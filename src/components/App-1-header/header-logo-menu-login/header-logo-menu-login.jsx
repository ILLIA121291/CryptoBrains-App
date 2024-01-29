import './header-logo-menu-login.css';
import HeaderLogin from './header-login/header-login';
import HeaderLogo from './header-logo/header-logo';
import HeaderMenu from './header-menu/header-menu';
import MobileButton from './mobile-button/mobile-button';
import { Component } from 'react';
import HeaderLogoMobile from './header-logo-mobile/header-logo-mobile';

class HeaderLogoMenuLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileClose: true,
    };
  }

  onOpenCloseMobileMenu = () => {
    const open = !this.state.mobileClose;
    this.setState(({ mobileClose }) => ({
      mobileClose: open,
    }));
  };

  render() {
    let headerBlock = 'header_block_logo_menu_login ';
    let overlay = 'mobile_overlay ';
    let mobBtnSpanOne = 'mobile_menu_span_close';
    let mobBtnSpanTwo = 'mobile_menu_span_close';
    let mobBtnSpanThree = 'mobile_menu_span_close';

    if (this.state.mobileClose) {
      headerBlock += ' no_display';
    }

    if (!this.state.mobileClose) {
      overlay += ' mobile_overlay_open';
      mobBtnSpanOne += ' mobile_menu_top_span_open';
      mobBtnSpanTwo += ' mobile_menu_central_span_open';
      mobBtnSpanThree += ' mobile_menu_button_span_open';
    }

    return (
      <header className="header_border">
        <HeaderLogoMobile />
        <MobileButton
          overlay={overlay}
          mobBtnSpanOne={mobBtnSpanOne}
          mobBtnSpanTwo={mobBtnSpanTwo}
          mobBtnSpanThree={mobBtnSpanThree}
          onOpenCloseMobileMenu={this.onOpenCloseMobileMenu}
        />
        <div className={headerBlock} onClick={this.onOpenCloseMobileMenu}>
          <HeaderLogo />
          <HeaderMenu />
          <HeaderLogin />
        </div>
      </header>
    );
  }
}

export default HeaderLogoMenuLogin;
