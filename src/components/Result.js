import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REQUESTED, SUCCEEDED, FAILED } from '../constants';
import LoadIndicator from './LoadIndicator';
import {
  resultsSelector,
  fetchStateSelector,
  errorMessageSelector
} from '../selectors';

const mapStateToProps = state => ({
  results: resultsSelector(state),
  fetchState: fetchStateSelector(state),
  errorMessage: errorMessageSelector(state)
});

const ResultDisplay = props => {
  if (props.results.length) {
    return props.results.map(
      ({ links: [{ href }], data: [{ title }] = [] }, index) => {
        return <img key={index} src={href} alt={title} />;
      }
    );
  } else {
    return <h4>No results found.</h4>;
  }
};

class Result extends Component {
  render() {
    return (
      <LoadIndicator
        fetchState={this.props.fetchState}
        component={<ResultDisplay results={this.props.results} />}
        error={this.props.errorMessage}
      />
    );
  }
}

export default connect(mapStateToProps)(Result);
