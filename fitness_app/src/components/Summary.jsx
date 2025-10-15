import React, { useState } from 'react'

const Summary = () => {

    const [FormData, setFormData] = useState({
        Totalworkout:"",
        caloriesburned:"",
        Averageweight:"",
    })
    const handleChange =(e)=>{
        const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    }
    const handleSubmit = (e) =>{
        e.prevent.Default()

    }
  return (
    <form onSubmit={handleSubmit}>
    <label>Total Workout</label>
      <input
      type="text"
      placeholder='totalworkout'
      name='Totalworkout'
      value='FormData.Totalworkout'
      onChange={handleChange}
      />
      <label>Calories burned</label>
      <input
      type="text"
      placeholder='Calories burned'
      name='caloriesburned'
      value='FormData.caloriesburned'
      onChange={handleChange}
      />
       <label>Average weight</label>
      <input
      type="text"
      placeholder='Average weight'
      name='Averageweight'
      value='FormData.Averageweight'
      onChange={handleChange}
      />
      <button type='submit'>Add workout</button>
    </form>
  )
}

export default Summary
