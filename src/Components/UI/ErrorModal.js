import React from "react";
import reactDom from "react-dom";
import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";

const Backdrop = (props) => {

    return <div className="backdrop" onClick={props.errorHandler}></div>
}

export default function ErrorModal(props) {
    return (
        <>
            {reactDom.createPortal(<Backdrop errorHandler={props.errorHandler} />, document.getElementById("backdrop"))}

            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.errorHandler}>Okay</Button>
                </footer>
            </Card>
        </>
    );
}
