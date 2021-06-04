import React, {useState, useEffect} from 'react';
import { ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'
import './TalkWithUs.css'
import { history } from '../../history'


const TalkWithUs = () => {
    const [submitted, setSubmitted] = useState(false);
    const [seconds, setSeconds] = useState(5);
    useEffect(() => {
        if(submitted){
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
            }else{
                if(submitted){
                    history.goBack();
                }
            }

        }
    },[seconds,submitted]);
    const HandleSubmit = () =>{
        setSubmitted(true);
    }

    const validations = yup.object().shape({
        email: yup.string().email().required('Fill with your email'),
        text: yup.string().min(50, 'Type some more! The minimun is 50 characters').max(100, `That's okay`).required('Fill with your sugestion')
    })

  return (
  <>
            { !submitted && <h1>Any sugestions? Write for us!</h1>}
            { !submitted && (<Formik
                initialValues={{}}
                onSubmit={HandleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <br/>
                    <p>Type your email</p>
                    <div className="Login-Group">
                        <Field
                            name="email"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error"
                        />
                    </div>
                    <p>Now just type your new ideias and sugestions for us!</p>
                    <div className="Login-Group">
                        <Field
                            name="text"
                            className="Login-Field2"
                        />
                        <ErrorMessage
                            name="text"
                            component="span"
                            className="Login-Error"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Send</button>
                </Form>
            </Formik>)}
            {submitted && (<p>Thnaks for your concern about our store!
            You are being redirected... {seconds}</p>)}

  </>);

}

//require é para coisas que estão na pasta local
export default TalkWithUs;