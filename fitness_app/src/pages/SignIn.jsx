import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    // demo auth: store simple user
    const demoUser = { name: 'User', email }
    localStorage.setItem('ft_user', JSON.stringify(demoUser))
    navigate('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-2xl font-semibold text-brand mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} required
            className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required
            className="w-full mt-1 p-2 border rounded" />
        </div>
        <button className="w-full py-2 rounded bg-brand text-white">Sign In</button>
      </form>
      <p className="mt-4 text-sm text-gray-600">Don't have an account? <Link to="/signup" className="text-brand">Sign up</Link></p>
    </div>
  )
}
