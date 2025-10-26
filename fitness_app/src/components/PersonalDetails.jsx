import React, { useState } from 'react';

const PersonalDetails = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    sex: '',
  });
  const [bmi, setBmi] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBmi = (e) => {
    e.preventDefault();
    setLoading(true);

    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100; 
    if (!weight || !height) return;

    const bmiValue = (weight / (height * height)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setDescription("You're underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setDescription('Your weight is normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setDescription("You're overweight");
    } else {
      setDescription('You are obese, please exercise and watch your diet');
    }

    setLoading(false);
  };

  return (
    <div className='bg-black text-white'>
      <label>Age</label>
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label>Weight (kg)</label>
      <input
        type="number"
        placeholder="Weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label>Sex</label>
      <input
        type="text"
        placeholder="Sex"
        name="sex"
        value={formData.sex}
        onChange={handleChange}
      />

      <label>Height (cm)</label>
      <input
        type="number"
        placeholder="Height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button type="button" onClick={handleBmi}>
        {loading ? 'Calculating...' : 'Calculate BMI'}
      </button>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
