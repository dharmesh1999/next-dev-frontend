import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import CustomButton from '../../components/common/CustomButton/CustomButton';
import styles from './SignUp.module.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  return (
    <>
      <div className={`${styles.container} container-fluid p-0`}>
        <Container>
          <Row className='d-flex align-items-center w-100'>
            <Col></Col>
            <Col xs={12} lg={9} md={7} sm={12} className={styles.col}>
              <Row>
                <Col lg={6} className={styles.imageCol}>
                  <Image
                    src='/image/login.png'
                    alt='login'
                    width={450}
                    height={430}
                    className={styles.image}
                  />
                </Col>
                <Col lg={6} className={styles.login_form}>
                  <div
                    className={`d-flex justify-content-between ${styles.login}`}
                  >
                    <div className='mb-3'>
                      <h2>SignUp</h2>
                      <h6>
                        <AiOutlineUser />
                        Create your account
                      </h6>
                    </div>
                  </div>
                  <Form onSubmit={(e) => onSubmit(e)} className={styles.form}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter your name'
                        name='Name'
                        //   value={email}
                        //   onChange={(e) => onChange(e)}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter email'
                        name='email'
                        //   value={email}
                        //   onChange={(e) => onChange(e)}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        name='password'
                        //   value={password}
                        //   onChange={(e) => onChange(e)}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        name='Confirm password'
                        //   value={password}
                        //   onChange={(e) => onChange(e)}
                      />
                    </Form.Group>
                    <div>
                      <CustomButton
                        type='submit'
                        className={styles.loginButton}
                      >
                        SignUp
                      </CustomButton>
                      <h6 className='mt-3 align-center p-0'>
                        Already have an account?
                        <Link
                          href='/login'
                          className={`${styles.sign_link} ms-2`}
                        >
                          SignIn
                        </Link>
                      </h6>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
