import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../config/axios'
import { WrapperForm } from './styled'

const Login = () => {
  const [email, setEmail] = useState('test@test.com')
  const [password, setPassword] = useState('12345678')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await api.post('/user/login', {
      email,
      password,
    })
    localStorage.setItem('token', result?.data?.token)

    navigate(0)
  }

  return (
    <WrapperForm>
      <div className="flex flex-col gap-4 bg-orange500 p-12 rounded-lg text-white">
        <h1 className="text-center text-[40px]">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="text-[20px] mb-1">
            Email:
          </label>
          <input
            className="text-[18px] mb-4 border border-gray-400 py-2 px-4 w-full rounded outline-none text-black600 bg-white"
            type="text"
            id="email"
            name="email"
            value={email}
            disabled
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password" className="text-[20px] mb-1">
            Password:
          </label>
          <input
            className="text-[18px] mb-4 border border-gray-400 py-2 px-4 w-full rounded outline-none text-black600 bg-white"
            type="password"
            id="password"
            name="password"
            disabled
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            className="block w-full max-w-[120px] mt-4 px-[12px] py-[8px] bg-yellow300 rounded m-auto"
          >
            Login
          </button>
        </form>
      </div>
    </WrapperForm>
  )
}

export default Login
