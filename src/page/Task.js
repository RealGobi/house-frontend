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
    <div style={{marginTop: 20}}>
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
                 value={desc}
                 onChange={e => setDesc(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
