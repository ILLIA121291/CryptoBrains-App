import "./footer-links.css"

const FooterLinks = () => {
  return (
  <section className="app-footer-links">
    <ul className="app-footer-links-main-ul">
      {/* Crypto Brains */}
      <li className="app-footer-links-main-ul-li">
        <p className="app-footer-links-main-ul-li-p">Crypto Brains</p>
        <ul className="app-footer-links-main-ul-links-ul">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Road Map</a></li>
          <li><a href="#">Risk Disclosure</a></li>
        </ul>
      </li>
      {/* Knowledge */}
      <li className="app-footer-links-main-ul-li">
        <p className="app-footer-links-main-ul-li-p">Knowledge</p>
        <ul className="app-footer-links-main-ul-links-ul">
          <li><a href="#">F.A.Q.</a></li>
          <li><a href="#">Articals</a></li>
          <li><a href="#">Video Tutorial</a></li>
          <li><a href="#">Beginner’s Guide</a></li>
        </ul>
      </li>
      {/* Services */}
      <li className="app-footer-links-main-ul-li">
        <p className="app-footer-links-main-ul-li-p">Services</p>
        <ul className="app-footer-links-main-ul-links-ul">
          <li><a href="#">API Service</a></li>
          <li><a href="#">Token Listing</a></li>
          <li><a href="#">API Document</a></li>
          <li><a href="#">Ticket Services</a></li>
        </ul>
      </li>
      {/* Exchange */}
      <li className="app-footer-links-main-ul-li">
        <p className="app-footer-links-main-ul-li-p">Exchange</p>
        <ul className="app-footer-links-main-ul-links-ul">
          <li><a href="#">P2P</a></li>
          <li><a href="#">Referral</a></li>
          <li><a href="#">Markets</a></li>
          <li><a href="#">Affiliate Program</a></li>
        </ul>
      </li>
      {/* Support Sevice */}
      <li className="app-footer-links-main-ul-li">
        <p className="app-footer-links-main-ul-li-p">Support Sevice</p>
        <ul className="app-footer-links-main-ul-links-ul">
          <li><a href="#">Career</a></li>
          <li><a href="#">Comunity</a></li>
          <li><a href="#">Customer Chat</a></li>
          <li><a href="#">Technical Support</a></li>
        </ul>
      </li>
      {/* Press */}
      <li className="app-footer-links-main-ul-li">
        <p className="app-footer-links-main-ul-li-p">Press</p>
        <ul className="app-footer-links-main-ul-links-ul">
          <li><a href="#">Blog</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </li>
    </ul>

  </section>)
}

export default FooterLinks