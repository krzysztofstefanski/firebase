import React from 'react'
const isLoggedIn = false

const LogInForms = (props) => (
    <div>
        <button 
        onClick={props.onLogInClickHandler}
        >
        Login!
        </button>
        </div>
)
export default LogInForms