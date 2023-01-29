import React from 'react';
import { Container } from 'react-bootstrap';

const CustomContainer = ({ children }) => {
  return <Container className='px-lg-5 px-md-5 px-4'>{children}</Container>;
};

export default CustomContainer;
