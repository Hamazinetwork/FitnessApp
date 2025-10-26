import React, { useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar
} from 'recharts'

export default function Progress(){
  // demo data - pull from localStorage if available
  const data = useMemo(()=> {
    const workouts = JSON.parse(localStorage.getItem('ft_workouts') || '[]')
    // build a small series for last 6 days
    if(workouts.length===0){
      return [
        {name: 'Day1', value: 200},
        {name: 'Day2', value: 600},
        {name: 'Day3', value: 300},
        {name: 'Day4', value: 700},
        {name: 'Day5', value: 200},
        {name: 'Day6', value: 400},
      ]
    } else {
      // map to last 6 entries
      const last6 = workouts.slice(-6)
      return last6.map((w,i)=> ({ name: `W${i+1}`, value: Number(w.calories) || 0 }))
    }
  }, [])

  const radial = [{ name: 'Goal', value: 75 }]

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-brand mb-4">Progress</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div style={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#53B175" strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ height: 200 }} className="flex items-center justify-center">
          <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" data={radial} startAngle={90} endAngle={-270}>
            <RadialBar minAngle={15} clockWise dataKey="value" cornerRadius={10} />
          </RadialBarChart>
        </div>
      </div>
    </div>
  )
}
