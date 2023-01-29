import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({ children, className }) => {
  return (
    <Button variant='outline-warning' className={className}>
      {children}
    </Button>
  );
};

export default CustomButton;
