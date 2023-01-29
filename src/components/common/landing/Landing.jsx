import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Row, Col } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.main}>
      <CustomContainer>
        <Row>
          <Col className='d-flex align-items-center'>
            <div>
              <TypeAnimation
                sequence={[
                  'Devloper Connector',
                  4000,
                  'Devloper Community',
                  4000
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                className={styles.title}
                deletionSpeed={10}
              />
              <p className={styles.description}>
                Create a developer profile/portfolio, share posts and get help
                from other developers
              </p>
              <div className='mt-4'>
                <Link href='/signup'>
                  <CustomButton className={`${styles.signup} me-4`}>
                    SignUp
                  </CustomButton>
                </Link>
                <Link href='/login'>
                  <CustomButton className={styles.login}>LogIn</CustomButton>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </CustomContainer>
      <Image
        src='/image/devbg.png'
        alt='bg'
        width={400}
        height={400}
        className={`position-absolute opacity-25 d-none d-md-block ${styles.image}`}
      />
    </div>
  );
};

export default Landing;
