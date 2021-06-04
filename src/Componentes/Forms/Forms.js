import React, {useState} from 'react';
import style from './Forms.module.css';
import Saudacao from '../Saudacao/Saudacao';
import Imagem3 from '../Imagens/bebidas3.jpeg';
import Imagem2 from '../Imagens/bebidas2.jpeg';
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

const Forms =  () => {

  const history = useHistory();
  const [name, setName] = useState('');
  const [filled, setFilled] = useState(false);
  const handleBlur = (e) => {
    if(e.target.value !== ''){
      setName(e.target.value + "!");
      setFilled(true);

    }else{
      setName(" Client!")
    }
  }

  const handleSubmit = () => {
    history.push("/home");
  }

  const validations = yup.object().shape({
    name:  yup.string().min(5, 'Too short!').max(50, 'Too long!'),
    email: yup.string().email().required('Fill with your email'),
    password: yup.string().required('Fill with your password')
  })

  return (
    <div className={style.flexBoxGrid}>
      <img className={style.container1} src={Imagem3} alt=""/>
      <div className={style.container2}>
      <div className={style.forms}>
      {!filled && <Saudacao saudacao=" Client!"/>}
      {filled && <Saudacao saudacao={name}/>}
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                <div className="Login-Group">
                        <Field
                            name="name"
                            placeholder="Your name"
                            onChange={(e) => handleBlur(e)}
                        />
                        <ErrorMessage
                            className={style.LoginError}
                            component="span"
                            name="name"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="email"
                            placeholder="Your email"
                        />
                        <ErrorMessage
                            className={style.LoginError}
                            component="span"
                            name="email"
                        />
                    </div>
                    <div className="Login-Group">
                        <Field
                            name="password"
                            type="password"
                            placeholder="Your password"
                        />
                        <ErrorMessage
                            className={style.LoginError}
                            component="span"
                            name="password"
                        />
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                </Form>
            </Formik>
    </div>
    </div>
      <img className={style.container3} src={Imagem2} alt=""/>
    </div>
  )
}

export default Forms;