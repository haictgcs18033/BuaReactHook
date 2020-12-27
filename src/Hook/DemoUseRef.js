import React, { useState, useRef } from 'react'

export default function DemoUseRef(props) {
    let inputUserName = useRef(null);
    let inputPassword = useRef(null);
    // let userName=useRef('')
    let [user, setUser] = useState({
        // userName: '',
        // // passWord: ''
    });
    const handleLogin=()=>{
        //Luu giu gia tri va khong khai bao lai
    //     console.log(userName);
    //     console.log(user.userName);
    //     // Lay gia tri
    //     userName.current='abc';
       
    //     setUser({
    //       userName:userName.current
    //   })
   
    console.log(inputPassword.current.value);
    console.log(inputUserName.current.value);
    }
    return (
        <div className="container text-left">
            <h3>Login</h3>
            <div className="form-group">
                <label>User Name</label>
                <input ref={inputUserName} className="form-control" name="userName"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" ref={inputPassword} className="form-control" name="passWord"/>
            </div>
            <button className="btn btn-success" onClick={()=>handleLogin()}>Login</button>  
        </div>
    )
}
