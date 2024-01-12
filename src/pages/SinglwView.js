import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { feedbackApi, getFeedbackApi, getSingleView } from '../service/allApi'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../service/baseUrl';







function SinglwView() {

    const [singleViewInput, setSingleViewInput] = useState('')

    // state to store feedback
    const [feedback, setFeedback] = useState({
        cFeedback: '',
        cUser: ''
    })

    // get feedback
    const [feedbackDatas, setFeedbackDatas] = useState([])

    const { id } = useParams()

    const singleViewCard = async () => {
        const result = await getSingleView(id)
        console.log(result);
        setSingleViewInput(result.data)

    }

    useEffect(() => {
        singleViewCard()
    }, [])


    const feedbackInput = async (e) => {
        const { name, value } = e.target
        setFeedback({ ...feedback, [name]: value })

    }


    const feedbackSubmit = async () => {
        const { cFeedback, cUser } = feedback
        if (cFeedback == '' || cUser == '') {
            alert('All Inputs Are Required')
        }
        else {
            const result = await feedbackApi({ courseName: singleViewInput.cName, courseId: singleViewInput._id, cFeedback, cUser })
            if (result.status >= 200 && result.status < 300) {
                alert('Feedback is successfully added')
            }
        }
    }


    const getFeedbackDatas = async () => {
        const result = await getFeedbackApi(id)
        console.log(result);
        setFeedbackDatas(result.data)

    }

    useEffect(() => {
        getFeedbackDatas()
    }, [])


    console.log(feedbackDatas);

    // console.log(singleViewInput);
    // console.log(feedback);
    return (
        <div>
            <Row className='m-4' style={{ borderStyle: 'double' }}>
                <Col className='m-0'>
                    <img src={`${BASE_URL}/packageimage/${singleViewInput.cProfile}`} alt="" style={{ height: '100%', width: '100%', margin: '0px' }} />

                </Col>

                <Col>
                    <div className='mt-5'>
                        <h1 style={{ fontFamily: 'Russo One, sans-serif' }} className='text-dark'>{singleViewInput.cName}</h1><br />
                        <h4 style={{ fontFamily: 'Russo One, sans-serif' }} className='text-dark'>{singleViewInput.cPrice}</h4><br /><br />
                        <h4 style={{ fontFamily: 'Russo One, sans-serif' }} className='text-dark'>{singleViewInput.cPrice}</h4>
                        <h4 style={{ fontFamily: 'Russo One, sans-serif' }} className='text-dark'>{singleViewInput.cPrice}</h4>

                    </div>
                    


                </Col>

            </Row>
            
            <Row>
                <h3 className='mt-5 text-center'>Customers Feedback</h3><br />
                <div  className='mt-5 ' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

                {feedbackDatas.length>0 ? feedbackDatas.map(i=>( 
                    <Card className='mt-3 w-75'>
                    {/* <Card.Header as="h5">{i.cUser}</Card.Header> */}
                    <Card.Body>
                        <Card.Title>{i.cUser}</Card.Title>
                        <Card.Text>
                                   {i.cFeedback}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                )):<div>
                    <h3>No Feedback</h3>
                    </div>}

                   




                </div>
            </Row>
            <Row >

                <Form.Group className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                    <Form.Label style={{ fontFamily: 'monospace' }} className='fs-3 mt-5'>Write Your Feedback</Form.Label><br />
                    <Form.Control onChange={(e) => feedbackInput(e)} type="text" placeholder="Username" name='cUser' className='w-50 mb-5' style={{ borderRadius: '10px' }} />

                    <textarea onChange={(e) => feedbackInput(e)} type="text" placeholder="Feedback..." name='cFeedback' style={{ borderRadius: '10px', height: '20vh' }} className='w-50' />
                </Form.Group>
                <div className='w-100 '>
                    <Form.Group className="mt-4 mb-2 w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Button onClick={feedbackSubmit} type='button' className='w-25 ' style={{ fontFamily: 'Russo One, sans-serif', backgroundColor: 'rgb(90,24,194)' }}>Submit</Button>
                    </Form.Group>
                </div>

            </Row>
        </div>
    )
}

export default SinglwView