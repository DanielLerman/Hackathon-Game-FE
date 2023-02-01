import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LogIn from "../Components2/LogIn";
import SignUp from "../Components2/SignUp";

const ModalWindow = ({ modalShow, setModalShow }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm] = useState(false);
    const toggleForms = () => {
        setForm(curr => !curr);
    };

    return (
        <>
            <span
                className="align-self-center rounded-pill start-btn my-5 "
                onClick={handleShow}
            >
                Start
            </span>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header className=".modal-header d-flex justify-content-center">
                    <Modal.Title>
                        <span>{form ? "Join Now" : "Start playing"}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body d-flex flex-column">
                    {form ? <SignUp /> : <LogIn />}
                </Modal.Body>
                <Modal.Footer className="modal-footer ">
                    {!form ? (
                        <span>
                            Don't have an account yet?
                            <span
                                onClick={toggleForms}
                                className="signUp-btn rounded-pill p-2 mx-2"
                            >
                                SignUp
                            </span>
                        </span>
                    ) : (
                        <span>
                            I Have an account
                            <span
                                onClick={toggleForms}
                                className="signUp-btn rounded-pill p-2 mx-2"
                            >
                                LogIn
                            </span>
                        </span>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalWindow;
