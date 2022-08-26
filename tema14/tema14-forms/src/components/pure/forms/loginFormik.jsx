import React from 'react';
import { Formik , Field , Form } from 'formik';
import * as Yup from 'yup'

const LoginFormik = () => {
    
    const initialCredentials = {
        email: '',
        password: ''
    }
    
    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('email is required'),
            password: Yup.string().required('Password is required')
        }
    )

    return (

        <div>
            <h4>Login Formik</h4>
            
            
            <Formik
                initialValues={initialCredentials}
                validationSchema = {loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r,500));
                    alert(JSON.stringify(values,null,2))
                    localStorage.setItem('credentials',values)
                }}

            
            >

                {props => 
                {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleBlur,
                        handleChange

                    } = props;

                    return( 
                    <Form>
                        <label htmlFor='email'>eMail</label>
                        <Field id="email" type="email" name="email" placeholder="tuemail@email.com" />
    
                        {
                            errors.email && touched.email && 
                            (
                                <div className='error'>
                                    <p>{errors.email}</p>
                                </div>
                            )
                        }

                        <label htmlFor='password'>Pass</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

{
                            errors.password && touched.password && 
                            (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }

                        <button type="submit">Login</button>

                        {   isSubmitting ? (<p>Logueando...</p>):null}
                    </Form>
                    )
                    
                }}
               



            </Formik>
        </div>
       
    );
}

export default LoginFormik;
