import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import store from '../store';


const PostTask = (getState) => {

  const history = useHistory();
  const { id } = getState.user;
  const { tasks } = getState.task;
console.log(tasks);
console.log(id);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const [titleErr, setTitleErr] = useState('');
  const [descriptionErr, setDescriptionErr] = useState('');

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setTitleErr('');
    setDescriptionErr('');
    setFile(null);
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
    const userId = id;
    if(isValid) {
      const newTask = {
        title,
        description,
        userId
      }
  
      console.log('Form Submited');
      console.log('Title: ', title);
      console.log('Desc: ', description);    
      
      store.dispatch(addTask(newTask));
      resetForm();
      history.push("/taskReel");
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
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
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
        <div>
              <input type="file" name="photo" encType="multipart/form-data" onChange={e => setFile(e.target.files[0])} />         
        </div>
        <input type="submit" value='Upload' className="btn btn-primary" />
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.task,
  user: state.auth.user
});


export default connect( mapStateToProps, { addTask } )(PostTask);