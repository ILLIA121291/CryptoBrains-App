import './app-footer.css'
import FooterCopyright from './footer-copyright/footer-copyright'
import FooterLinks from './footer-links/footer-links'
import FooterSocialMedia from './footer-social-media/footer-social-media'

const AppFooter = () => {
  return (
    <footer className='app-footer'>
      <FooterSocialMedia/>
      <FooterLinks/>
      <FooterCopyright/>
    </footer>
  )
}

export default AppFooter