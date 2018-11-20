import React from "react";

const userFormStyle = {
  marginTop: "20px auto",
  display: "block"
}

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input style = {userFormStyle} type = "text" name="username"/>
      <button>Submit</button>
    </form>
  )
}

export default UserForm;