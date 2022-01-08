import { useState } from 'react';

import Alert from 'react-bootstrap/Alert'



const LoginUser = () => {



    

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const [loginFormErrors, setLoginFormErrors] = useState({
        emailErr: null,
        passwordErr: null,
    });


    const [passwordShown, setPasswordShown] = useState(false);
    const [disabledBtn, setdisabledBtn] = useState(true);


    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

 



    const handleEvent = (e) => {

        if (loginFormErrors.passwordErr ==="" && loginFormErrors.emailErr ==="" )
        setdisabledBtn(!disabledBtn)
        

        


        if (e.target.name === "email") {
            setLoginForm({
                ...loginForm,
                email: e.target.value,
            });

            console.log(emailValidation(e.target.value))

            setLoginFormErrors({

                ...loginFormErrors,
                emailErr:
                    e.target.value.length === 0 ? "email must be entered" :
                        emailValidation(e.target.value) === true ? "" : "email must be name@address.com"


            });

                





        }
        else if (e.target.name === "password") {
            setLoginForm({
                ...loginForm,
                password: e.target.value
            });


            setLoginFormErrors({

                ...loginFormErrors,
                passwordErr:
                    passwordValidation(e.target.value) === true ? "" : "password must be over 8 charcters" 

            });
        }


    



       
        

        
    }



    const emailValidation = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regex.test(email) === true)
            return true
        else if (regex.test(email) === false)
            return false

    }

    const passwordValidation = (password) => {
        if (password.length === 0 || password.length < 8) {
            return false
        }
        else
            return true
    }

    const handleSubmit = (e) => {

            console.log(loginForm)

            e.preventDefault();

     


    }

    // const checkInputs = (e) => {
    //     if (loginFormErrors.emailErr === null && loginFormErrors.passwordErr === null) {
    //         handleSubmit(e);

    //     }
        
            

    // }

    return (
        <>

            <h2>Login Form</h2>
            <form onSubmit={(e) => handleSubmit(e)} className='m-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={(e) => handleEvent(e)}
                        value={loginForm.email}

                    />
                    <div>
                        <small className="text-danger">{loginFormErrors.emailErr}</small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        onChange={(e) => handleEvent(e)}
                        value={loginForm.password}

                    />

                    <div>
                        <small className="text-danger">{loginFormErrors.passwordErr}</small>
                    </div>


                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onClick={() => togglePassword()}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>

                <button type="submit" className="btn btn-primary" disabled={disabledBtn}     >Submit</button>
            </form>
        </>
    );

}

export default LoginUser;