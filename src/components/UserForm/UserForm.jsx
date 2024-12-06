import React from "react";
import "./UserForm.css";

function UserForm() {
  // state management for user data
  const [formData, setFormData] = React.useState({
    fullName: "",
    userName: "",
    email: "",
    address: "",
    phoneNum: "",
  });

  // event listeners
  function handleChange(e) {
    // destructure event target object
    // console.log(e.target);
    const { name, value } = e.target;
    // console.log(name, value);

    // inputs/updates user data in formData when form is changed
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    // prevents the form from resetting when 'submit' button is clicked
    e.preventDefault();
    // output user data in console
    console.log(formData);
  }

  return (
    <div className="form">
        <h3>Don't have an account? Sign up below.</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full name: </label>
        <input
          type="text"
          className="textInput"
          name="fullName"
          id="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="userName">Username: </label>
        <input
          type="text"
          className="textInput"
          name="userName"
          id="userName"
          placeholder="Enter desired username"
          pattern="\w{3,14}"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="textInput"
          name="email"
          id="email"
          placeholder="abc@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="address">Address: </label>
        <input
          type="text"
          className="textInput"
          name="address"
          id="address"
          placeholder="12345 Main St. Rochester, MI 48308"
          value={formData.address}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="phoneNum">Phone number: </label>
        <input
          type="tel"
          className="numInput"
          name="phoneNum"
          id="phoneNum"
          placeholder="(123)-456-7890"
          pattern="[0-9]{10}"
          value={formData.phoneNum}
          onChange={handleChange}
        />
        <br />
        <br />

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
