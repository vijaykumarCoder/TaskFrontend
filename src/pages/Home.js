import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './home.css'
import AllUsers from './AllUsers';


function Home() {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    try {
      const allUsers = await axios.get("http://localhost:8000/users")
      const { data } = allUsers
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.log("error")
    }
  }
/*----------edit user--------- */
const updateUser = async (updateUserdetails)=>{
  try {
      await axios.put(`http://localhost:8000/users/${updateUserdetails._id}`,updateUserdetails)
      getUsers()
  } catch (error) {
      console.log(error)
  }
}


  /*-------delete user----------- */
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])


  return (

    <>
      <div className='home'>
        <table>
          <tr className="table-head">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>  <td></td>
            <td></td>
          </tr>

          {users.map((user) => (
            <tr><AllUsers _id={user._id} name={user.name} username={user.userName} email={user.email} deleteUser={deleteUser} updateUser={updateUser} /></tr>
          ))

          }
        </table>
      </div>

    </>
  );
}

export default Home;
























// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// import './home.css'
// import { Button,Modal } from 'react-bootstrap';


// function Home() {
//   const [users, setUsers] = useState([])
//   const getUsers = async () => {
//     try {
//       const allUsers = await axios.get("http://localhost:8000/users")
//       const { data } = allUsers
//       setUsers(data)
//       console.log(data)
//     } catch (error) {
//       console.log("error")
//     }
//   }


//   /*-------delete user----------- */
//   const deleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/users/${id}`)
//       getUsers()
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() => {
//     getUsers()
//   }, [])
//   /*--------model-------- */
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div className='home'>
//       <table>
//         <tr className="table-head">
//           <th>Name</th>
//           <th>Username</th>
//           <th>Email</th>  <td></td>
//           <td></td>
//         </tr>
//         {users.map((user) => (
//           <tr>
//             <td>{user._id}</td>
//             <td>{user.name}</td>
//             <td>{user.userName}</td>
//             <td>{user.email}</td>
//             <td><button >Edit</button></td>
//             <td><button onClick={() => deleteUser(user._id)}>Delete</button></td>
//           </tr>
//         ))

//         }
//       </table>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>

//   );
// }

// export default Home;
