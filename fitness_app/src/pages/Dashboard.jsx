import React from 'react'
import WorkoutSummary from '../components/WorkoutSummary'
import WorkoutDetails from '../components/WorkoutDetails'
import ExerciseSearch from '../components/ExerciseSearch'
import PersonalDetails from '../components/PersonalDetails'
import Progress from '../components/Progress'

export default function Dashboard(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* left big panel (branding) */}
      <div className="col-span-1 lg:col-span-1">
        <div className="h-full rounded p-6 bg-brand text-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-bold">FITNESS TRACKER</h2>
            <p className="mt-4 text-sm opacity-80">Log workouts • Track progress • Find exercises</p>
          </div>
        </div>
      </div>

      {/* middle columns */}
      <div className="col-span-1 lg:col-span-1">
        <WorkoutSummary />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <WorkoutDetails />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <ExerciseSearch />
      </div>

      {/* bottom row: personal & progress */}
      <div className="col-span-1 lg:col-span-1">
        <PersonalDetails />
      </div>

      <div className="col-span-1 lg:col-span-3">
        <Progress />
      </div>
    </div>
  )
}
