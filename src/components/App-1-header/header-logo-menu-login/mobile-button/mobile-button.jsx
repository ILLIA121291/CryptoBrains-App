import './mobile-button.css';


const MobileButton = ({onOpenCloseMobileMenu, overlay, mobBtnSpanOne,mobBtnSpanTwo, mobBtnSpanThree }) => {


return (
    <>
      <div className={overlay} onClick={() => onOpenCloseMobileMenu()}></div>
      <button className="mobile_menu mobile_menu_open" type='button' onClick={() => onOpenCloseMobileMenu()}>
        <span className={mobBtnSpanOne}></span>
        <span className={mobBtnSpanTwo}></span>
        <span className={mobBtnSpanThree}></span>
      </button>
    </>
  );
}


export default MobileButton;
