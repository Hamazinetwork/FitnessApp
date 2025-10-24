import React from 'react'

const PersonalDetails = () => {
    const handleChange=()=>{
        const {name, value}= e.target;
        setFormData((prev)=>({
          ...prev,
          [name]: value,  
        }))
    }
const BmiValue = (weight/(height*height)).toFixed(1)

    const handleBmi= (e)=>{
        e.preventDefault(),
        setLoading(True),
        {BmiValue}
        if (BmiValue < 18.5){
            setDescription("You're Underweigh");
        }elif if(BmiValue >=18.5 && BmiValue< 25){
            setDescription("your weight is good");
        }elif if(BmiValue >=25 && BmiValue< 30){
            setDescription("You're Overweigh");
        }elif if(BmiValue >= 30){
            setDescription("you are Obese, please Exercise and diet");

        
    }
  return (
    <div>
        <label>Age</label>
      <input
      type="number"
      placeholder='Age'
      name='FormData'
      value='FormData.Age'
      onChange={handleChange}
      />
         <label>Weight</label>
      <input
      type="number"
      placeholder='Weight'
      name='FormData'
      value='FormData.Weight'
      onChange={handleChange}
      />
         <label>Sex</label>
      <input
      type="text"
      placeholder='Age'
      name='FormData'
      value='FormData.Sex'
      onChange={handleChange}
      />
         <label>Height</label>
      <input
      type="number"
      placeholder='Height'
      name='FormData'
      value='FormData.Heigth'
      onChange={handleChange}
      />
      <button type='button' onClick={handleBmi}>Calculate BMI</button>
    </div>
  )
}

export default PersonalDetails
