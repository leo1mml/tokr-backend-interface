import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter} from '../../actions/filters'


class TeachersSearchBox extends React.Component {

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
    render () {
        return (
            <div className="search-box-container">
                <img id="loupe" className="search-icon" src={require("../../assets/icons/lupa.png")} alt="icone de pesquisa"/>
                <input type="text"  id="textFilter" className="input-search" onBlur={this.showLoupe}
              onFocus={this.hideLoupe} 
              onChange={this.onTextChange}
              />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    teacherFilters: state.filters
  });
  
  const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(undefined, text)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(TeachersSearchBox);