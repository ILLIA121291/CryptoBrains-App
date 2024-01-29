import './header-login.css'

const HeaderLogin = () => {
  return (
    <div className="header_login">
      <button type='button' className='log_btn log_in'>Log In</button>
      <button type='button' className='log_btn sing_up'>Sign Up</button>
    </div>
  )
}

export default HeaderLogin