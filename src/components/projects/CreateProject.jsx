import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProject } from "../../store/actions/projectActions";

const CreateProject = props => {

  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  })

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    props.createProject(inputs)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea> 
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

CreateProject.propTypes = {

}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
