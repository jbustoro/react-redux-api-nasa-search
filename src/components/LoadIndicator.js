import React from 'react';
import { REQUESTED, SUCCEEDED, FAILED } from '../constants';
import Spinner from './Spinner';

const LoadIndicator = props => {
  if (props.fetchState === REQUESTED) {
    return <Spinner />;
  } else if (props.fetchState === SUCCEEDED) {
    return props.component;
  } else if (props.fetchState === FAILED) {
    return props.error;
  } else {
    return null;
  }
};

export default LoadIndicator;
