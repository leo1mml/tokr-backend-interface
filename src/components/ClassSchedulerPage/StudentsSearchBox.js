import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter} from '../../actions/filters'


class StudentsSearchBox extends React.Component {

    hideLoupe = () => {
        document.getElementById("loupe-student").style.visibility="hidden"
      }
    
      showLoupe = () => {
          if(!document.getElementById("textFilter-student").value){
            document.getElementById("loupe-student").style.visibility="visible"
          }
      }

      onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
      };
    render () {
        return (
            <div className="search-box-container">
                <img id="loupe-student" className="search-icon" src={require("../../assets/icons/lupa.png")} alt="icone de pesquisa"/>
                <input type="text"  id="textFilter-student" onClick={this.hideLoupe} className="input-search" onBlur={this.showLoupe}
              onFocus={this.hideLoupe} 
              onChange={this.onTextChange}
              />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    studentFilters: state.filters
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text, undefined)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentsSearchBox);