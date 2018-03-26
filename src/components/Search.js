import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, showResults } from '../actions';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Search extends Component {
  handleChange(event) {
    this.props.setSearchTerm(event.currentTarget.value);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.showResults(this.props.searchTerm);
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <FormControl
            type="text"
            value={this.props.searchTerm}
            onChange={event => this.handleChange(event)}
          />
        </FormGroup>{' '}
        <Button type="submit" onClick={event => this.handleClick(event)}>
          Search
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = {
  setSearchTerm,
  showResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
