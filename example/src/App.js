import React, { useState, useEffect } from "react";
import AllInput from 'react-input-harshil'
import 'react-input-harshil/dist/index.css'

const App = () => {
  const [form, setForm] = useState([
    { name: 'name', value: '', placeholder: 'Write Your Name' },
    { name: 'email', value: '', placeholder: 'Write Your Email' },
    { name: 'phone', value: '', placeholder: 'Write Your Phone No.' }
  ])
  const onBlurChange = (e, index) => {
    let value = e.target.value
    console.log('form data:>> ', form[index], 'event=>', e);

  }
  const handleChange = (e, index) => {
    let value = e.target.value
    console.log('form data:>> ', form[index], 'event=>', e);
  }
  return (
    <AllInput
      form_fields={form}
      onBlurChange={onBlurChange}
      handleChange={handleChange}
    />
  )
}

export default App
