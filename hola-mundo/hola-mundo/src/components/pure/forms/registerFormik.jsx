import React from 'react'
import { User } from '../../models/user-class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ROLES } from "../../models/role.enum"

const RegisterFormik = () => {

    {/**Creamos una variable usuario de tipo clase User */}
    let user = new User()

    {/**^Definimos valores iniciales */}
    const initialValues = {
        username : '',
        password : '',
        email : '',
        confirm : '',
        role : ROLES.USER
    }
    
    {/**¿Que pasara al darle al boton? Aqui abajo aparece */}
    const submit = (values) => {
        console.log('register user ',values)
    }
    
    {/** Esquema de validación */}
    const registerSchema = Yup.object().shape (
        {
            username : Yup.string()
                .min(3,'El  nombre de usuario carece de suficientes caracteres').max(20,'nombre de usuario demasiado largo').required('Username es requerido'),
            email: Yup.string()
                .email('Formato de email inválido').required('email requerido'),
            role: Yup.string().oneOf([ROLES.USER,ROLES.ADMIN], 'selecciona un tipo de usuario'),
            password: Yup.string()
                .min(6,'Contraseña demasiado corta')
                .required('Password requerida'),
            confirm: Yup.string()
                .when("password",{
                    is: value => (value && value.length>0 ? true:false),
                    then: Yup.string()
                        .oneOf([Yup.ref("password")], 'Las contraseñas deben coincidir')
                }).required('Debes confirmar la contraseña')
            
        }
    )

    return (

        <div>
            <h4>Registro Formik</h4>
            <Formik 
                initialValues={initialValues}
                validationSchema = {registerSchema}
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

                                <label htmlFor='email'>Email</label>
                                <Field id="email" type="email" name="email" placeholder="ejemplo@email.com" />

                                {/** Email Errors */}
                                {
                                    errors.email && touched.email && 
                                    (
                                        <ErrorMessage name="email" component="div"></ErrorMessage>
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

                                <label htmlFor='confirm'>Confirm</label>
                                <Field id="confirm" type="confirm" name="confirm" placeholder="confirm password" />

                                 {/** Confirm Password Errors */}
                                 {
                                    errors.confirm && touched.confirm &&
                                        (
                                            <ErrorMessage name="confirm" component="div"></ErrorMessage>
                                        )

                                }


                                <button type="submit">Register Account</button>
                                {isSubmitting ? <p>Enviando credenciales</p>:null }
                            </Form>
                        )
                    }



            </Formik>
        </div>
    );
}

export default RegisterFormik;
