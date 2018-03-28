import React from 'react';
import styled, { keyframes } from 'styled-components';
import loading from '../assets/loading.png';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
  background-image: url(${loading});
  background-repeat: no-repeat;
  max-width: 250px;
`;

const Spinner = () => <Image src={loading} alt="loading indicator" />;

export default Spinner;
