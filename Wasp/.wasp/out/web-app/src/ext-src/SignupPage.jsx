import { Link } from 'react-router-dom'

import SignupForm from '../auth/forms/Signup'

const SignupPage = () => {
  return (
    <>
      <SignupForm/>
      <br/>
      <span>
        I already have an account (<Link to="/login">go to login</Link>).
      </span>
    </>
  )
}

export default SignupPage