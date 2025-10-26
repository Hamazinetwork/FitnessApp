import React from 'react'
import Progress from './components/Progress'
import PersonalDetails from './components/PersonalDetails'
import Summary from './components/Summary'
import WorkoutDetails from './components/WorkoutDetails'
import Navbar from './components/layout/Navbar'
import ExerciseSearch from './components/ExerciseSearch'

const App = () => {
  return (
    <div>
      <ExerciseSearch/>
      <PersonalDetails/>
      <WorkoutDetails/>
      <Summary/>
      <Progress/>
    </div>
  )
}

export default App
