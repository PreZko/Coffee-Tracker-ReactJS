import { useState } from 'react'

export default function Authentication() {
  const [isRegistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleAuthenticate() {}

  return (
    <>
      <h2 className='sing-up-text'>{isRegistration ? 'Sign Up' : 'Login'}</h2>
      <p>{isRegistration ? 'Create an account' : 'Sign in to your account!'}</p>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        placeholder='Email'
      ></input>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        placeholder='********'
        type='password'
      ></input>
      <button onClick={handleAuthenticate}>
        <p>Submit</p>
      </button>
      <hr />
      <div className='register-content'>
        <p>
          {isRegistration
            ? 'Already have an account?'
            : "Don't have an account?"}
        </p>
        <button
          onClick={() => {
            setIsRegistration(!isRegistration)
          }}
        >
          <p>{isRegistration ? 'Sign in' : 'Sign up'}</p>
        </button>
      </div>
    </>
  )
}
