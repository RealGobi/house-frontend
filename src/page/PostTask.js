import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';


const PostTask = (props) => {

  const { addTask } = props;



  const [title, setTitle] = useState('');
  const [step, setStep] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars

  const resetForm = () => {
    setTitle('');
    setStep('');
    setDescription('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      step,
      description
    }

    console.log('Form Submited');
    console.log('Title: ', title);
    console.log('Step: ', step);
    console.log('Desc: ', description);    
    
    addTask(newTask);
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
          <textarea
                 className="form-control"
                 value={description}
                 onChange={e => setDescription(e.target.value)} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task
});


export default connect( mapStateToProps, { addTask } )(PostTask);