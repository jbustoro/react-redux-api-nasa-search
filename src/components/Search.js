import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { setSearchTerm, imagesFetchRequest } from '../actions';

class Search extends Component {
  handleChange(e) {
    this.props.setSearchTerm(e.currentTarget.value);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.imagesFetchRequest(this.props.searchTerm);
  }

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <FormControl
            type="text"
            value={this.props.searchTerm}
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>{' '}
        <Button type="submit" onClick={e => this.handleClick(e)}>
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
  imagesFetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
