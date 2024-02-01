import './app-footer.css'
import FooterLinks from './footer-links/footer-links'
import FooterSocialMedia from './footer-social-media/footer-social-media'

const AppFooter = () => {
  return (
    <footer className='app-footer'>
      <FooterSocialMedia/>
      <FooterLinks/>
    </footer>
  )
}

export default AppFooter