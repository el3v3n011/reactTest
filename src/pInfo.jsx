import { useState } from "react";
import "./pInfo.css";

function PersonalInformation() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("1234 Elm St");

  function updateName(event) {
    setName(event.target.value);
  }
  function updateEmail(event) {
    setEmail(event.target.value);
  }
  function updatePhone(event) {
    setPhone(event.target.value);
  }
  function updateAddress(event) {
    setAddress(event.target.value);
  }
  return (
    <>
    <div className="container">

      <div className="personalInfo">
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{address}</h3>
      </div>
      <div className="sidebar">
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" onChange={updateName} />
        <label htmlFor="number">Phone Number</label>

        <input type="text" id="number" onChange={updatePhone} />
        <label htmlFor="email">Email</label>

        <input type="text" id="email" onChange={updateEmail} />
        <label htmlFor="adress">Address</label>

        <input type="text" id="adress" onChange={updateAddress} />
      </div>
    </div>
    </>
  );
}
export default PersonalInformation;
