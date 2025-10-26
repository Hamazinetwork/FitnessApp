import React, { useState } from 'react'

export default function PersonalDetails(){
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)

  function calculate(){
    // assume height in cm, weight in kg
    const h = parseFloat(height)
    const w = parseFloat(weight)
    if(!h || !w) return alert('Enter height (cm) and weight (kg).')
    const meters = h / 100
    const value = (w / (meters * meters)).toFixed(1)
    setBmi(value)
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-brand mb-4">Personal Details</h3>
      <label className="text-sm text-gray-600">Age</label>
      <input value={age} onChange={e=>setAge(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <label className="text-sm text-gray-600">Sex</label>
      <input value={sex} onChange={e=>setSex(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <label className="text-sm text-gray-600">Height (cm)</label>
      <input value={height} onChange={e=>setHeight(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <label className="text-sm text-gray-600">Weight (kg)</label>
      <input value={weight} onChange={e=>setWeight(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <button onClick={calculate} className="bg-brand text-white px-3 py-2 rounded">Calculate BMI</button>

      {bmi && (
        <div className="mt-4 p-3 bg-gray-50 rounded">
          <p className="text-sm">Your BMI: <span className="font-semibold">{bmi}</span></p>
        </div>
      )}
    </div>
  )
}
