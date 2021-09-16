
import axios from "axios";
import React, { useState } from "react";
import './adduser.css'


const AddUser = () => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const addUserSubmit = async (newUser) => {
    try {
      await axios.post("http://localhost:8000/users/addUser/", newUser)
    } catch (error) {
      console.log(error)
    }
  }
  const addUserForm = e => {
    console.log("herer it sis")
    e.preventDefault()
    addUserSubmit({
      name,
      userName,
      email
    })
  }

  return (
    <>
      <div className="addUser">
        <form action="" onSubmit={addUserForm}>
          <label for="fname"> Name</label>
          <input type="text" id="fname" name="name" required placeholder="Your name.." onChange={(e) => setName(e.target.value)} />

          <label for="lname">User Name</label>
          <input type="text" id="lname" name="username" required placeholder="Your User name.." onChange={(e) => setUserName(e.target.value)} />

          <label for="lname">Email</label>
          <input type="text" id="lname" name="email" required placeholder="your Email.."
            onChange={(e) => setEmail(e.target.value)}
          />


          <input type="submit" value="Submit" />
        </form>
      </div>

    </>
  )
}


export default AddUser










// import axios,{useState} from 'axios';
// import React from 'react';


// function AddUser({addUserSubmit}) {
//   const [name, setName] = useState('')
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   // const addUserSubmit = async (newUser) => {
//   //   try {
//   //     await axios.post("http://localhost:8000/users/addUser/",newUser)
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }
//   const addUserForm=  e =>{
//     e.preventDefault()
//     addUserSubmit({
//       name,
//       username,
//       email
//     })
//   }
//   return (
//     <div className='addUser'>
//       <h1>Add Item</h1>
//       <form action="" onSubmit={addUserForm}>
//         <label>   name</label>
//         <input type="text" onChange={ (e)=>setName(e.target.value)}/>
//         <label>username</label>
//         <input type="text"  onChange={ (e)=>setUsername(e.target.value)}/>
//         <label>email</label>
//         <input type="text"  onChange={ (e)=>setEmail(e.target.value)}/>
//         <button>submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddUser;
