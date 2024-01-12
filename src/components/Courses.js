import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from '../pages/Login';
import { getCourseApi } from '../service/allApi';
import { Row,Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../service/baseUrl';





function Cards() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [courseDetails,setCourseDetails]=useState([])

    const getAllCourseDetails=async()=>{
        const {data}=await  getCourseApi() 
        // console.log(data);
        setCourseDetails(data)
       
    }

    useEffect(()=>{
        getAllCourseDetails()
    },[])


    // let rr=courseDetails.result.length
    // console.log(rr);
    

//single card
const singleData = (id) => {
  navigate(`singleview/${id}`)

 
}
console.log(courseDetails);

  return (
    <div className='mt-5'>
        <Row>
     <Col md={3} lg={3} sm={6} className='' style={{ height: '100%', width: '100%', display: "flex", justifyContent: 'center', flexDirection: 'Row', flexWrap: 'wrap' }} >
        {courseDetails.length >0?
        courseDetails.map(i=>( <Card style={{ width: '18rem' }}  className='ms-4 mt-5 mb-4'>
        <Badge bg="secondary" className='w-25'>{i.cBadge}</Badge>
      <Card.Img variant="top" src={`${BASE_URL}/packageimage/${i.cProfile}`} />
      <Card.Body>
        <Card.Title>{i.cName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => singleData(i._id)}>
         View More
      </Button>
      </Card.Body>
    </Card>)):
    <div>
        <p>No datass...</p>
    </div>
   
   
    
    }
    </Col>
    </Row>
       


   

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Hi..Welcome Back!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Login></Login>
        </Modal.Body>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cards