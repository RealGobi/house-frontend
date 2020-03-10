import React, { useState } from 'react';


export default function Task() {
  const [title, setTitle] = useState('');
  const [step, setStep] = useState('');
  const [desc, setDesc] = useState('');

  const resetForm = () => {
    setTitle('');
    setStep('');
    setDesc('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submited');
    console.log('Title: ', title);
    console.log('Step: ', step);
    console.log('Desc: ', desc);
    resetForm();
  }


  return (
    <div>
      <h1>Task comp</h1>
    </div>
  )
}
