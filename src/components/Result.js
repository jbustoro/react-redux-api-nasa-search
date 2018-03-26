import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
  render() {
    return this.props.results.map(result => {
      return <img src={result.links[0].href} />;
    });
  }
}

const mapStateToProps = state => ({
  results: state.results
});

export default connect(mapStateToProps)(Result);
