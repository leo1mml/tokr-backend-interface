import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class StudentsListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div>
        <p>Buscar:  <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        /></p>
        
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentsListFilters);
