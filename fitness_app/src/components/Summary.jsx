import React, { useState } from 'react'

export default function WorkoutSummary(){
  const [total, setTotal] = useState('')
  const [calories, setCalories] = useState('')
  const [avgWeight, setAvgWeight] = useState('')

  function addWorkout(){
    // simple demo: push to localStorage list
    const workouts = JSON.parse(localStorage.getItem('ft_workouts') || '[]')
    workouts.push({ total, calories, avgWeight, date: new Date().toISOString() })
    localStorage.setItem('ft_workouts', JSON.stringify(workouts))
    setTotal(''); setCalories(''); setAvgWeight('')
    alert('Workout added (demo).')
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-brand mb-4">Today's Summary</h3>
      <label className="text-sm text-gray-600">Total workout</label>
      <input className="w-full mt-1 p-2 border rounded mb-3" value={total} onChange={e=>setTotal(e.target.value)} />
      <label className="text-sm text-gray-600">Calories burned</label>
      <input className="w-full mt-1 p-2 border rounded mb-3" value={calories} onChange={e=>setCalories(e.target.value)} />
      <label className="text-sm text-gray-600">Average weight</label>
      <input className="w-full mt-1 p-2 border rounded mb-3" value={avgWeight} onChange={e=>setAvgWeight(e.target.value)} />
      <button onClick={addWorkout} className="bg-brand text-white px-4 py-2 rounded">Add workout</button>
    </div>
  )
}
