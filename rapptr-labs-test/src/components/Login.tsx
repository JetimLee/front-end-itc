import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector'
import './login.css'
import {
  setFormValidation,
  sendLoginRequest,
} from '../features/slices/todoSlice'

import React, { useState, useRef, MutableRefObject, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const navigate = useNavigate()
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const validated = useAppSelector((state) => state.formValidated)
  const loading = useAppSelector((state) => state.loading)
  const dispatch = useAppDispatch()
  const emailInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const passwordInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const emailErrorRef = useRef() as MutableRefObject<HTMLSpanElement>
  const passwordErrorRef = useRef() as MutableRefObject<HTMLSpanElement>

  //TODO - ROUTE THE USER TO THE TODOS PAGE AFTER LOGIN
  const validateEmailInput = () => {
    console.log(emailInputRef.current.value.length)
    if (emailInputRef.current.value.length > 50) {
      emailInputRef.current.classList.add('login__input--invalid')
      emailErrorRef.current.classList.remove('login__error--hide')
      setValidEmail(false)
      return
    }
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(emailInputRef.current.value)) {
      emailErrorRef.current.classList.remove('login__error--hide')
      emailInputRef.current.classList.add('login__input--invalid')
      setValidEmail(false)
    } else {
      emailInputRef.current.classList.remove('login__input--invalid')
      emailErrorRef.current.classList.add('login__error--hide')
      setValidEmail(true)
    }
  }
  const validatePasswordLength = () => {
    if (passwordInputRef.current.value.trim().length > 16) {
      passwordErrorRef.current.classList.remove('login__error--hide')
      passwordInputRef.current.classList.add('login__input--invalid')
      setValidPassword(false)
      return
    } else if (passwordInputRef.current.value.trim().length < 4) {
      passwordErrorRef.current.classList.remove('login__error--hide')
      passwordInputRef.current.classList.add('login__input--invalid')
      setValidPassword(false)
    } else {
      passwordErrorRef.current.classList.add('login__error--hide')
      passwordInputRef.current.classList.remove('login__input--invalid')
      setValidPassword(true)
    }
  }

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    }
    console.log(formData, 'form data in handle submission')
    await dispatch(sendLoginRequest(formData))
    //purely for testing, wouldn't set it here, but would set in the async request
    console.log('seeing if local storage has user')
    console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }

  useEffect(() => {
    if (validEmail && validPassword) {
      dispatch(setFormValidation(true))
    } else {
      dispatch(setFormValidation(false))
    }
    console.log(validEmail, 'valid email')
    console.log(validPassword, 'valid password')
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
              <span
                ref={emailErrorRef}
                className="login__error--hide login__error-message"
              >
                <p>Not a valid email</p>
              </span>
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
              <span
                ref={passwordErrorRef}
                className="login__error--hide login__error-message"
              >
                <p>Invalid password</p>
              </span>
            </div>
          </div>
          <button
            type="submit"
            aria-disabled={loading || !validated}
            className={`btn btn--white-text ${
              !validated || loading ? `btn--invalid` : ''
            }`}
            disabled={loading || !validated}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
