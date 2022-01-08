import { useState } from 'react'

const RegisterUser = () => {



    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
    });

    const [registerFormErrors, setRegisterFormErrors] = useState({
        nameErr: null,
        emailErr: null,
        userNameErr: null,
        passwordErr: null,
        confirmPasswordErr: null,


    });


    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };




    const handleEvent = (e) => {

        if (e.target.name === "regEmail") {
            setRegisterForm({
                ...registerForm,
                email: e.target.value,
            });

            console.log(emailValidation(e.target.value))

            setRegisterFormErrors({

                ...registerFormErrors,
                emailErr:
                    e.target.value.length === 0 ? "email must be entered" :
                        emailValidation(e.target.value) === true ? null : "email must be name@address.com"
                      

            });






        }
        else if (e.target.name === "regPassword") {
            setRegisterForm({
                ...registerForm,
                password: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                passwordErr:
                    passwordValidation(e.target.value) === true ? null : "password must be over 8 charcters"

            });
        }
        else if (e.target.name === "regName") {
            setRegisterForm({
                ...registerForm,
                name: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                nameErr:
                    e.target.value.length === 0 ? "This Field is required"
                        : e.target.value.length < 3 ? "Length must not be less than 5"
                            : null,

            });
        }
        else if (e.target.name === "regUserName") {
            setRegisterForm({
                ...registerForm,
                userName: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                userNameErr:
                    e.target.value.length === 0 ? "This Field is required"
                        : e.target.value.length < 3 ? "Length must not be less than 5"
                            : null,

            });
        }
        else if (e.target.name === "confPassword") {
            setRegisterForm({
                ...registerForm,
                confirmPassword: e.target.value
            });


            setRegisterFormErrors({

                ...registerFormErrors,
                confirmPasswordErr:
                    e.target.value === registerForm.password ? null : "confirm password dosn't match"

            });
        }
    }



    const emailValidation = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regex.test(email) === true) {

            return true
        }
        else if (regex.test(email) === false) {
            return false
        }
    }

    const passwordValidation = (password) => {


        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (regex.test(password) === true) {
            console.log(regex.test(password))
            return true
        }
        else if (regex.test(password) === false) {
            console.log(regex.test(password))

            return false
        }
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(registerForm);



    }
    return (
        <>
            <h2>Register Form</h2>
            <form onSubmit={(e) => handleSubmit(e)} className='m-5'>
                <div className="mb-3">
                    <label htmlFor="regName" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="regName"
                        name="regName"
                        onChange={(e) => handleEvent(e)}
                        value={registerForm.name}

                    />
                    <div>
                        <small className="text-danger">{registerFormErrors.nameErr}</small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="regEmail" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="regEmail"
                        aria-describedby="emailHelp"
                        name="regEmail"
                        onChange={(e) => handleEvent(e)}
                        value={registerForm.email}

                    />
                    <div>
                        <small className="text-danger">{registerFormErrors.emailErr}</small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="regUserName" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="regUserName"
                        name="regUserName"
                        onChange={(e) => handleEvent(e)}
                        value={registerForm.userName}

                    />
                    <div>
                        <small className="text-danger">{registerFormErrors.userNameErr}</small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="regPassword" className="form-label">Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control"
                        id="regPassword"
                        name="regPassword"
                        onChange={(e) => handleEvent(e)}
                        value={registerForm.password}

                    />

                    <div>
                        <small className="text-danger">{registerFormErrors.passwordErr}</small>
                    </div>


                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        className="form-control"
                        id="confPassword"
                        name="confPassword"
                        onChange={(e) => handleEvent(e)}
                        value={registerForm.confirmPassword}

                    />

                    <div>
                        <small className="text-danger">{registerFormErrors.confirmPasswordErr}</small>
                    </div>


                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="regCheckbox"
                        onClick={() => togglePassword()}
                    />
                    <label className="form-check-label" htmlFor="regCheckbox">Show Password</label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )

}

export default RegisterUser;