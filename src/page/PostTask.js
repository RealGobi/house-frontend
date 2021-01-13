import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';
import classNames from 'classnames';


const PostTask = (props) => {

  const { addTask } = props;



  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [titleErr, setTitleErr] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setTitleErr('');
    setDescriptionErr('');
  }

  const validate = () => {
    let titleErr;
    let descriptionErr;

    if(!title) {
      titleErr = 'Add a title';
    }

    if(!description) {
      descriptionErr = 'Add a description'
    }

    if(titleErr || descriptionErr) {
      setTitleErr(titleErr);
      setDescriptionErr(descriptionErr);
      return false;
    }

    return true;

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if(isValid) {
      const newTask = {
        title,
        description
      }
  
      console.log('Form Submited');
      console.log('Title: ', title);
      console.log('Desc: ', description);    
      
      addTask(newTask);
      resetForm();
    }
  }


  const formStyleInput = classNames(
    'form-control',
    {
      'inputErr': titleErr 
    }
  );

  const formStyleTextArea = classNames(
    'form-control',
    {
      'inputErr': descriptionErr 
    }
  );
    
  return (
    <div style={{marginTop: 20}} className="container">
      <h3>Add new task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title: </label>
          {titleErr && <p className="error">{titleErr}</p>}
          <input type="text"
                 className={formStyleInput}
                 value={title}
                 onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description: </label>
          {descriptionErr && <p className="error">{descriptionErr}</p>}
          <textarea
                 className={formStyleTextArea}
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