import React from 'react'
import {Spinner, Button} from 'react-bootstrap';

function Loader() {
  return (
    <div>
        <Button className='btn btn-primary btn-email'>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          style={{
            color: "#fff"
          }}
        />
         &nbsp; &nbsp;Sending Your Message.......
      </Button>
    </div>
  )
}

export default Loader