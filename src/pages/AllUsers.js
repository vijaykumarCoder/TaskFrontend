
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import './home.css'

const AllUsers = ({ _id, name, username, email, deleteUser, updateUser }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newname, setName] = useState(name)
    const [newuserName, setUserName] = useState(username)
    const [newemail, setEmail] = useState(email)


    const editUser = (name, username, email) => {
        handleClose()
        const updateUserdetails = {
            _id,
            name,
            username,
            email
        }

        updateUser(updateUserdetails)
    }
    return (

        <>

            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td><button  className="button edit-button" onClick={handleShow}>Edit</button></td>
            <td><button className="button delete-button" onClick={() => deleteUser(_id)}>Delete</button></td>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <form action="" onSubmit={addUserForm}> */}
                    <form action="">
                        <label for="fname"> Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your name.." value={newname} onChange={(e) => setName(e.target.value)} />

                        <label for="lname">User Name</label>
                        <input type="text" id="lname" name="username" placeholder="Your User name.." value={newuserName} onChange={(e) => setUserName(e.target.value)} />

                        <label for="lname">Email</label>
                        <input type="text" id="lname" name="email" placeholder="your Email.."
                            value={newemail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="close-button" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"
                        onClick={() => editUser(newname, newuserName, newemail)}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AllUsers
