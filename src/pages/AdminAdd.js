import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addCourseApi } from '../service/allApi';


function AdminAdd() {

    const[addCourse,setAddCourse]=useState({
        cName:'',
        cBadge:'',
        cAbout:'',
        cContents:'',
        cPrice:''
    })

    const[image,setImage]=useState("")

    const addInput=(e)=>{
        const{name,value}=e.target
        setAddCourse({...addCourse,[name]:value})
    }

    const chooseImage = (e) => {
        setImage(e.target.files[0])
    }


    // button click
    const handleData=async(e)=>{
        e.preventDefault();
        const  {cName,cBadge,cAbout,cContents,cPrice}=addCourse
        if(cName=='' || cBadge==''  ||cAbout==''  || cContents==''  || cPrice==''){
            alert('All inputs are required')
        }
        else{
            //setting header
            const headerConfig = {
                "Content-Type": "multipart/form-data",
            };

            const data=new FormData();
            data.append("cName",cName)
            data.append("cBadge", cBadge)
            data.append("cAbout",cAbout)
            data.append("cContents",cContents)
            data.append("cPrice",cPrice)
            data.append("user_profile", image);

            const result=await addCourseApi(data,headerConfig)
            if(result.status>=200 && result.status<300){
                alert('Data  added')

                setAddCourse({...addCourse,
                    cName:'',
                    cBadge:'',
                    cAbout:'',
                    cContents:'',
                    cPrice:''});

                    setImage("");

            }
            else{
               
               console.log("Unable to post");

            } 


        }
    }


console.log(addCourse);
console.log(image);

  return (
    <Row className='text-white w-50 mt-5'  style={{ backgroundImage: 'linear-gradient(rgb(12, 13, 14), rgba(10, 11, 12, 0.455))', marginLeft: 'auto', marginRight: 'auto' ,height:'50%'}}>
    <h4 className='text-center mt-4 mb-4' style={{ fontFamily: 'Russo One, sans-serif'}} >Add Course Details</h4>

    <Col lg={6} md={6} sm={6}>
        <Form  >
            <Form.Group className="mb-3" >
                <Form.Label style={{ fontFamily: 'monospace' }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name Of Resort" name='cName' onChange={(e) => addInput(e)}  />
            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label style={{ fontFamily: 'monospace' }}>Badge</Form.Label>
                <Form.Control type="text" placeholder="Badge" name='cBadge' onChange={(e) => addInput(e)}  />


            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label style={{ fontFamily: 'monospace' }}>About Course</Form.Label><br/>
                <textarea type="text" placeholder="About Course" name='cAbout' onChange={(e) => addInput(e)} style={{borderRadius:'10px' ,width:'100%' ,height:'20vh'}}  />
            </Form.Group>




        </Form>
    </Col>
    <Col lg={6} md={6} sm={6}>
        <Form>

        <Form.Group className="mb-3" >
                <Form.Label style={{ fontFamily: 'monospace' }}>Contents</Form.Label><br/>
                <textarea type='text' placeholder="contents in course" name='cContents' onChange={(e) => addInput(e)} className='mt-0' style={{borderRadius:'10px' ,width:'100%' ,height:'20vh'}}  />

            </Form.Group>



            <Form.Group className="mb-3" >
                <Form.Label style={{ fontFamily: 'monospace' }}>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price" name='cPrice' onChange={(e) => addInput(e)}  />
            </Form.Group>

            {/* <Form.Group className="mt-2" >
                <Form.Label>Room Type</Form.Label><br></br>
                <select name="roomType" id="" className='text-dark' style={{ height: '40px', borderRadius: '10px' }} onChange={(e)=>addInput(e)}>
                    <option value="Single Room">Single Share</option>
                    <option value="Two Share">Two Share</option>
                    <option value="Four Share">Four Share</option>


                </select>
            </Form.Group> */}


            <Form.Group className="mb-2 mt-4" >
                <Form.Label style={{ fontFamily: 'monospace' }}>Image of course</Form.Label>
                <input type='file' className='' name='cProfile'  onChange={(e) => chooseImage(e)}  style={{ fontFamily: 'monospace' }} ></input>
            </Form.Group>




            <Form.Group className="mt-4 mb-2"  >
                <Button onClick={handleData} type='button' className='w-50 ' style={{ fontFamily: 'Russo One, sans-serif'}}>Add</Button>
            </Form.Group>

        </Form>

    </Col>

</Row>


  )
}

export default AdminAdd