import styl from './Signin.module.css'
import React, { useState } from 'react'

export default function SignIn() {
  const [userData, setuserData] = useState({
    UserEmail: "",
    password: ""
  })
  let Sin = (e) => {
    e.preventDefault()
   console.log(userData);
  } 
  let assignvalues = (e) => {
    let input1 = {
      [e.target.name]: e.target.value
    }
    setuserData({
      ...userData, ...input1
    })
  }

  let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center', height: '100vh' }
  return (
    <div className={styl.parent1}>
        <button className={`${styl.inbtn} btn btn-primary`} >SignUp</button>
      <form style={stylishobj1} className={`mb-3 ${styl.singinform} container`}>
        <p className={`mb-5 ${styl.p1}`}>SignIn Form</p>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="UserEmail" onChange={assignvalues} value={userData.UserEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" onChange={assignvalues} value={userData.password} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 ">
          <p htmlFor="exampleInputPassword1" className={styl.fp}>Forgot Password</p>
        </div>
        <button onClick={Sin} className="btn btn-primary">Submit</button>
      </form>
    </div >
  )
}