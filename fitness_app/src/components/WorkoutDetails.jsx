import React, { useState } from 'react'

const WorkoutDetails = () => {
    const[FormData, setFormData]=useState({
        Date:"",
        Reps:"",
        Sets:"",
        Casets:"",

    })
    const handleChange=(e)=>{
        const{name,value }= e.value.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }

        )
        )
    }
   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(True);
    try{
        const response = await fetch({
            method:'POST',
            header:{
                'content-type':'application/json',
                'accept':'application/json',
            },
            body: JSON.stringify(FormData),
        });
        const data = response.json().catch(()=>({}));
        if (!response.ok){
            throw new Error ("invalid Entery")
        }
    }
   }
  return (
    <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input
        placeholder="DD/MM/YYYY"
        name="Date"
        type="date"
        value="FormData.Date"
        onChange={handleChange}
        />
         <label>Reps</label>
        <input
        placeholder="Enter reps"
        name="Reps"
        type="text"
        value="FormData.Reps"
        onChange={handleChange}
        />
        <label>Sets</label>
        <input
        placeholder="Enter sets"
        name="Sets"
        type="text"
        value="FormData.Sets"
        onChange={handleChange}
        />
        <label>Casets</label>
        <input
        placeholder="Enter casets"
        name="Casets"
        type="text"
        value="FormData.Casets"
        onChange={handleChange}
        />
        <button type="submit">Enter</button>
    </form>
  )
}

export default WorkoutDetails
