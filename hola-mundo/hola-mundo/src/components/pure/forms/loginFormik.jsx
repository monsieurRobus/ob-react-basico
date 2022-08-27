import React from 'react'
import { User } from '../../models/user-class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ROLES } from "../../models/role.enum"

const LoginFormik = () => {


    {/**^Definimos valores iniciales */}
    const initialValues = {
        username : '',
        password : ''
    }
    
    {/**¿Que pasara al darle al boton? Aqui abajo aparece */}
    const submit = (values) => {
        console.log('Login user ',values)
    }
    
    {/** Esquema de validación */}
    const loginSchema = Yup.object().shape (
        {
            username : Yup.string().required('Username es requerido'),
            password: Yup.string().required('Password requerida'),
        
        }
    )

    return (

        <div>
            <h4>Registro Formik</h4>
            <Formik 
                initialValues={initialValues}
                validationSchema = {loginSchema}
                onSubmit={
                    async(values) => {
                        await new Promise((r)=> setTimeout(r,1000));
                        alert (JSON.stringify(values,null,2))
                    }

                }
                >

                    {({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (
                            <Form>
                                <label htmlFor="username">Username</label>
                                <Field id="username" type="text" name="username" placeholder="Usuario" />

                                {/** Username Errors */}
                                {
                                    errors.username && touched.username &&
                                        (
                                            <ErrorMessage name="username" component="div"></ErrorMessage>
                                        )

                                }

                                <label htmlFor='password'>Password</label>
                                <Field id="password" type="password" name="password" placeholder="password" />

                                 {/** Password Errors */}
                                 {
                                    errors.password && touched.password &&
                                        (
                                            <ErrorMessage name="password" component="div"></ErrorMessage>
                                        )
                                }
                               
                                <button type="submit">Login</button>
                                {isSubmitting ? <p>Enviando credenciales</p>:null }
                            </Form>
                        )
                    }



            </Formik>
        </div>
    );
}

export default LoginFormik;
