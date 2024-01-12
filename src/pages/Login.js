import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { adminLoginApi, userLoginApi } from '../service/allApi';
import { useNavigate } from 'react-router-dom';




function Login() {

   const navigate= useNavigate()

    const [loginInput,setLoginInput]=useState({
        uname:'',
        email:'',
        psw:''
    })

    const setInput=(e)=>{
        const {name,value}=e.target
        setLoginInput({...loginInput,[name]:value})
    }

    // login button click
    const handleLogin=async()=>{
        const {uname,email,psw}=loginInput
        if(uname==''|| email=='' || psw==''){
            alert('All inputs are required')
        }
        else{
            if(uname=="admin"){
                const result=await adminLoginApi({adminName:uname,adminEmail:email,adminPsw:psw})

                if(result.status>=200 && result.status<300){
                    localStorage.setItem('aId',result.data.aId)
                    alert('Admin login success')
                    navigate('/')
                    
                }
                else{
                    alert('not found')
                }
            }
            else{
                const result=await userLoginApi(loginInput)
                if(result.status>=200 && result.status<300){ 
                    localStorage.setitem('uId',result.data.uid)
                    alert('User login success')
                    navigate('/')
                }
                else{
                    alert('not found')
                }
 
            }
        }


    }

    console.log(loginInput);
  return (
    <div className='' style={{display:'flex',justifyContent:'center',alignItems:'center',width:"100%"}}>
        <div className='w-75' >

        <Form.Group className="mb-4 " >
                <Form.Control onChange={(e)=>setInput(e)} type="text" placeholder="Username" name='uname'  />
            </Form.Group>

       <Form.Group className="mb-4" >
                <Form.Control onChange={(e)=>setInput(e)} type="text" placeholder="Email Address" name='email'  />
            </Form.Group>

            <Form.Group className="mb-4" >
                <Form.Control onChange={(e)=>setInput(e)} type="text" placeholder="Password" name='psw'  />
            </Form.Group>
            <div style={{display:'flex',justifyContent:'start',position: 'relative',flexWrap:'wrap'}}>
                <Form.Check aria-label="option 1" />
                <span className='ms-3'>Keep me signed in</span>
                <a href="" style={{textDecoration:'none',position: 'absolute',bottom:'0px',right:'0px'}} className='text-secondary'>Forgot?</a>
            </div>

            <div>
            <Form.Group className="mt-4 mb-2"  >
                <Button onClick={handleLogin} type='button' className='w-100 ' style={{ fontFamily: 'Russo One, sans-serif',backgroundColor:'rgb(90,24,194)'}}>Add</Button>
            </Form.Group>
            </div>

            <div  style={{display:'flex',justifyContent:'center'}} >
                <span>Don't have an account?</span><span style={{color:'rgb(90,24,194)'}}>Register</span>
            </div>


       </div>
    </div>
  )
}

export default Login