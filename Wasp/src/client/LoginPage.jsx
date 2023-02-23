import { Link } from 'react-router-dom'
import { SignInButton as GoogleSignInButton, signInUrl as googleSignInUrl, logoUrl as googleLogoUrl } from '@wasp/auth/helpers/Google'

import LoginForm from '@wasp/auth/forms/Login'

const LoginPage = () => {
  return (
    <>
      <LoginForm/>
      <br/>
      <GoogleSignInButton/>
      <a href={googleSignInUrl}>Sign in with Google</a>
      <br/>
      <span>
        I don't have an account yet (<Link to="/signup">go to signup</Link>).
      </span>
    </>
  )
}

export default LoginPage