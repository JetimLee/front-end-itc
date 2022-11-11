import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector'
import './login.css'
import { setFormValidation } from '../features/slices/todoSlice'
import React, { useState, useRef, MutableRefObject, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
export const Login = () => {
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const validated = useAppSelector((state) => state.formValidated)
  const dispatch = useAppDispatch()
  const emailInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const passwordInputRef = useRef() as MutableRefObject<HTMLInputElement>

  const validateEmailInput = () => {
    console.log('hello')
    console.log(emailInputRef.current.value.length)
    if (emailInputRef.current.value.length >= 50) {
      emailInputRef.current.classList.add('login__input--invalid')
      return
    }
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(emailInputRef.current.value)) {
      emailInputRef.current.classList.add('login__input--invalid')
      setValidEmail(false)
    } else {
      emailInputRef.current.classList.remove('login__input--invalid')
      setValidEmail(true)
      console.log(validEmail, 'valid email')
    }
  }
  const validatePasswordLength = () => {
    console.log('password')
    if (passwordInputRef.current.value.trim().length < 4) {
      passwordInputRef.current.classList.add('login__input--invalid')
      setValidPassword(false)
    } else {
      passwordInputRef.current.classList.remove('login__input--invalid')
      setValidPassword(true)
      console.log(validPassword, 'valid password')
    }
  }

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('form submitted')
    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    }
    console.log(formData, 'form data')

    const settings: RequestInit = {
      method: 'POST',
      body: JSON.stringify(formData),
      mode: 'cors',
    }
    const loginUrl = `http://dev.rapptrlabs.com/Tests/scripts/user-login.php`

    try {
      const response = await fetch(loginUrl, settings)
      console.log(response)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log('an error occurred', error)
    }
  }

  useEffect(() => {
    if (validEmail && validPassword) {
      dispatch(setFormValidation(true))
    } else {
      dispatch(setFormValidation(false))
    }
  }, [validEmail, validPassword])

  return (
    <div className="login__container">
      <form onSubmit={(e) => handleFormSubmission(e)} className="login__form">
        <h2 className="login__header">Rapptr Labs</h2>
        <div className="login__controls">
          <div className="form__inputs">
            <label htmlFor="login_input">Email</label>
            <div className="input__container">
              <FontAwesomeIcon className="input__icon" icon={faUser} />
              <input
                onChange={validateEmailInput}
                ref={emailInputRef}
                type="email"
                className={`login__input`}
                id="login_input"
                placeholder="user@rapptrlabs.com"
              />
            </div>
          </div>

          <div className="form__inputs">
            <label htmlFor="password_input">Password</label>
            <div className="input__container">
              <FontAwesomeIcon className="input__icon" icon={faLock} />
              <input
                onChange={validatePasswordLength}
                ref={passwordInputRef}
                type="password"
                id="password_input"
                placeholder="Must be at least 4 characters long"
              />
            </div>
          </div>
          <button
            type="submit"
            aria-disabled={!validated}
            className={`btn btn--white-text ${!validated && `btn--invalid`}`}
            disabled={!validated}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
