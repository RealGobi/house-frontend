import React, { useState } from 'react';
import axios from 'axios';

export default function Task() {
  const [title, setTitle] = useState('');
  const [step, setStep] = useState('');
  const [description, setDesc] = useState('');

  const resetForm = () => {
    setTitle('');
    setStep('');
    setDesc('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      step,
      description
    }

    axios.post('http://localhost:4000/task/add',newTask)
    .then(res => console.log('task--', res.data)
    );

    console.log('Form Submited');
    console.log('Title: ', title);
    console.log('Step: ', step);
    console.log('Desc: ', description);
    resetForm();
  }


  return (
    <div style={{marginTop: 20}} className="container">
      <h3>Add new task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input type="text"
                 className="form-control"
                 value={title}
                 onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Step: </label>
          <input type="text"
                 className="form-control"
                 value={step}
                 onChange={e => setStep(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
                 className="form-control"
                 value={description}
                 onChange={e => setDesc(e.target.value)} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}
