import React, { useState } from 'react'

export default function WorkoutDetails(){
  const [date, setDate] = useState('')
  const [reps, setReps] = useState('')
  const [sets, setSets] = useState('')
  const [notes, setNotes] = useState('')

  function handleEnter(){
    const details = JSON.parse(localStorage.getItem('ft_details') || '[]')
    details.push({ date, reps, sets, notes })
    localStorage.setItem('ft_details', JSON.stringify(details))
    setDate(''); setReps(''); setSets(''); setNotes('')
    alert('Details saved (demo).')
  }

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-brand mb-4">Workout Details</h3>
      <label className="text-sm text-gray-600">Date</label>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <label className="text-sm text-gray-600">Reps</label>
      <input value={reps} onChange={e=>setReps(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <label className="text-sm text-gray-600">Sets</label>
      <input value={sets} onChange={e=>setSets(e.target.value)} className="w-full mt-1 p-2 border rounded mb-3" />
      <label className="text-sm text-gray-600">Notes</label>
      <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows="3" className="w-full mt-1 p-2 border rounded mb-3"></textarea>
      <button onClick={handleEnter} className="bg-brand text-white px-4 py-2 rounded">Enter</button>
    </div>
  )
}
