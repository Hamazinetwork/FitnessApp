import React, { useState } from 'react';

const WorkoutDetails = () => {
  const [formData, setFormData] = useState({
    date: '',
    reps: '',
    sets: '',
    casets: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Invalid entry');
      }

      const data = await response.json();
      setMessage('Workout saved successfully!');
      console.log('Saved workout:', data);

      
      setFormData({
        date: '',
        reps: '',
        sets: '',
        casets: '',
      });
    } catch (error) {
      setMessage(error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label>Reps</label>
      <input
        type="text"
        name="reps"
        placeholder="Enter reps"
        value={formData.reps}
        onChange={handleChange}
      />

      <label>Sets</label>
      <input
        type="text"
        name="sets"
        placeholder="Enter sets"
        value={formData.sets}
        onChange={handleChange}
      />

      <label>Casets</label>
      <textarea
        name="casets"
        placeholder="Enter casets"
        value={formData.casets}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Enter'}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default WorkoutDetails;
