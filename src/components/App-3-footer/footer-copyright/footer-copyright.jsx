import './footer-copyright.css';
import SelectCurrency from './select-currency/select-currency';
import SelectLanguage from './select-language/select-language';

const FooterCopyright = () => {
  return (
    <section className='app-footer-copyright'>
      <div className='app-footer-copyright-block-copyright'>
        <p>©Copyright 2022 All Rights Are Reserved.</p>
        <span></span>
        <a href="#">Privacy Policy</a>
        <span></span>
        <a href="#">Terms of Use</a>
      </div>
      <div className='app-footer-copyright-block-select'>
        <SelectLanguage/>
        <SelectCurrency/>
      </div>

    </section>
  )
}

export default FooterCopyright