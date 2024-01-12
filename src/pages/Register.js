import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userRegisterApi } from '../service/allApi';
import { useNavigate } from 'react-router-dom';


function Register() {

    const navigate=useNavigate()
    const[unameValid,setUnameValid]=useState(true)
    const[emailValid,setEmailValid]=useState(true)
    const[pswValid,setPswValid]=useState(true)
    const[cpswValid,setCpswValid]=useState(true)


    const[registerInput,setRegisterInput]=useState({
        uname:'',
        email:'',
        psw:'',
        cpsw:''
    })
    const setInput=(e)=>{
        const{name,value}=e.target
        if(name=='uname'){
            if(value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
                setUnameValid(true)
                setRegisterInput({...registerInput,[name]:value})
               
            }
            else{
                setUnameValid(false)
            }
        }

        if(name=='email'){
            if(value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
                setUnameValid(true)
                setRegisterInput({...registerInput,[name]:value})
            }
            else{
                setEmailValid(false)
            }
        }

        if(name=='psw'){
            if(value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
                setPswValid(true)

                setRegisterInput({...registerInput,[name]:value})
            }
            else{
                setPswValid(false)
            }
        }

        if(name=='cpsw'){
            if(value.match(registerInput.psw)){
                setCpswValid(true)
                setRegisterInput({...registerInput,[name]:value})

            }
            else{
                setCpswValid(false)
            }
        }
        
    }
    // register button click
    const handleRegister=async()=>{
        const{uname,email,psw,cpsw}=registerInput
        if(uname==''|| email=='' || psw=="" || cpsw==""){
            alert('All datas are required')

        }
        else{
            const result=await userRegisterApi(registerInput) 
            if(result.status>=200 && result.status<300){
                alert(result.data)
                    navigate('/')
            }
            else{
                alert(result.response.data)
            } 
        }


    }




    console.log(registerInput);

  return (
    <div className=''  style={{display:'flex',justifyContent:'center',alignItems:'center',width:"100%" }}>
         <div className=' mt-5 p-5 '  style={{display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'0 0 15px rgba(0,0,0,.3)' }}>
        <div className='w-100' >

        <Form.Group className="mb-4 " >
                <Form.Control onClick={(e)=>setInput(e)} type="text" placeholder="Username" name='uname'  />
           
            { !unameValid &&
                            <div>
                                <p className='text-danger'>Invalid Format  !</p>
                            </div>
                            }
        </Form.Group>

       <Form.Group className="mb-4" >
                <Form.Control onClick={(e)=>setInput(e)} type="text" placeholder="Email Address" name='email'  />
                { !emailValid &&
                            <div>
                                <p className='text-danger'>Invalid Email Format  !</p>
                            </div>
                            }
                    
            </Form.Group>

            <Form.Group className="mb-4" >
                <Form.Control onClick={(e)=>setInput(e)} type="password" placeholder="Password" name='psw'  />
                {!pswValid &&
                     <div>
                     <p className='text-danger'>Invalid Password Format  !</p>
                     </div>
                    }
            </Form.Group>

            <Form.Group className="mb-4" >
                <Form.Control onClick={(e)=>setInput(e)}  type="password" placeholder="Confirm Password" name='cpsw'  />
                {! cpswValid &&
                     <div>
                     <p className='text-danger'>Incorrect Password  !</p>
                     </div>
                    }
            </Form.Group>

            <div style={{display:'flex',justifyContent:'start',flexWrap:'wrap'}}>
                <span className=''>By SignIn up,I agree with the website's   </span> <a href=''>Terms And Conditions</a>
            </div>

            <div>
            <Form.Group className="mt-4 mb-2"  >
                <Button onClick={handleRegister} type='button' className='w-100 ' style={{ fontFamily: 'Russo One, sans-serif',backgroundColor:'rgb(90,24,194)'}}>Register</Button>
            </Form.Group>
            </div>

          


       </div>
    </div>
    </div>
  )
}

export default Register