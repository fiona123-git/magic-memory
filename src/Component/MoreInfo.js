import React, {useState} from 'react'
import {Button, Alert} from 'react-bootstrap'



function AlertDismissible() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How to play the game</Alert.Heading>
        <p>
        to start the game you need to click on a card  then click on another card and if it matches then click on another set of cards
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'al
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Help</Button>}
    </>
  );
}

export default AlertDismissible;
