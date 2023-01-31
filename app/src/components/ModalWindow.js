
import React, { useContext, useState } from "react";
import { GameContext } from '../Contextprovider';
import Modal from 'react-bootstrap/Modal';
import LogIn from '../Components2/LogIn';
import SignUp from '../Components2/SignUp';
import axios from "axios";

const ModalWindow = ({modalShow, setModalShow}) => {
  const { userInfo, setUserInfo} = useContext(GameContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm]=useState(false)
    const toggleForms=()=>{
        setForm((curr)=>!curr)
    }

    const addUser =async(e)=>{
      e.preventDefault() 
        try{
          console.log("signUP")
          console.log(userInfo)
               const res=await axios.post('http://localhost:8080/users/signup')
               console.log(res.data)
        }catch(err){console.log(err)}
    }

  return (
    <> 
     <span className="align-self-center rounded-pill start-btn my-5 " onClick={handleShow}>Start</span>
      <Modal

      show={show} onHide={handleClose} animation={true}
      >
        <Modal.Header  className='.modal-header d-flex justify-content-center'>
          <Modal.Title><span>{form?"Join Now":"Start playing"}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body  className='modal-body d-flex flex-column'>
        {form? <SignUp/>:<LogIn/>}
        <span onClick={addUser} className='logIn-btn rounded-pill  align-self-center mt-2'>{form?"SignUp":"LogIn"}</span>
    
        </Modal.Body>
        <Modal.Footer className='modal-footer ' >
          {!form?<span>Don't have an account yet?<span onClick={toggleForms} className='signUp-btn rounded-pill p-2 mx-2'>SignUp</span></span>:<span>I Have an account<span onClick={toggleForms} className='signUp-btn rounded-pill p-2 mx-2'>LogIn</span></span>}
        </Modal.Footer>
      </Modal>
     
    </>
  )
}

export default ModalWindow
