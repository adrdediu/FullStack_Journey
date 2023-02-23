
import config from '../../config.js'

export const signInUrl = `${config.apiUrl}/auth/external/google/login`
export const logoUrl = '/images/google-logo-icon.png'

const containerStyle = {
  height: 40,
  width: 225,
  border: '1px solid darkgray',
  borderRadius: 5,
  padding: 5,
  margin: '5px 0px',
  backgroundColor: 'white'
}

const linkStyle = {
  textDecoration: 'none',
  color: 'black'
}

const logoStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  display: 'inline-block',
  marginRight: 10
}

export function SignInButton() {
  return (
    <div style={containerStyle}>
      <a href={signInUrl} style={linkStyle}>
        <img alt="Google Icon" src={logoUrl} style={logoStyle} />
        <span>Log in with Google</span>
      </a>
    </div>
  )
}
