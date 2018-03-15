import React from 'react';
import { connect } from 'react-redux';

export class StudentClassesListFilters extends React.Component {

  hideLoupe = () => {
    document.getElementById("loupe").style.visibility="hidden"
  }

  showLoupe = () => {
      if(!document.getElementById("textFilter").value){
        document.getElementById("loupe").style.visibility="visible"
      }
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  render() {
    return (
      <div className="user-list-search-box">
          <img id="loupe" className="search-icon" src={require("../../assets/icons/lupa.png")} alt="icone de pesquisa"/>
          <input type="text" className="search-input" onBlur={this.showLoupe}
              onFocus={this.hideLoupe}
              onChange={this.onTextChange}
              id="textFilter"/>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentClassesListFilters);