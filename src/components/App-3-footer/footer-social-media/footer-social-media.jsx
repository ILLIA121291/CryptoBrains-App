import './footer-social-media.css'


const FooterSocialMedia = () => {
  return (
  <section className='app-footer-social-media'>
    <div>
    <img src="/logo.svg" alt="" />
    </div>
    <div className='app-footer-social-media-community'>
      <div className='app-footer-social-media-community-text'>Community-</div>
      <div className='app-footer-social-media-community-links'>
        <a href="#">
          <img src="/footer_social_media_1.svg" alt="Link to social media 1" />
        </a>
        <a href="#">
          <img src="/footer_social_media_2.svg" alt="Link to social media 1" />
        </a>
        <a href="#">
          <img src="/footer_social_media_3.svg" alt="Link to social media 1" />
        </a>
        <a href="#">
          <img src="/footer_social_media_4.svg" alt="Link to social media 1" />
        </a>
        <a href="#">
          <img src="/footer_social_media_5.svg" alt="Link to social media 1" />
        </a>
      </div>
    </div>
  </section>)
}

export default FooterSocialMedia