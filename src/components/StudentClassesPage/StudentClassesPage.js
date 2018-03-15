import React from 'react'
import { connect } from 'react-redux';
import PhotoName from './PhotoName';
import TextComponent from './TextComponent'
import StudentClassList from './StudentClassList'
import {Rating} from 'primereact/components/rating/Rating';

class StudentClassesPage extends React.Component {

    render () {
        return (
            <div className="page-container">
                <div className="left-container">
                    <div>
                        <PhotoName/>
                    </div>
                    <div className="rating-container">
                        <Rating value={4} cancel={false}/>
                        <p className="grade">4.0</p>
                    </div>
                    <div>
                        <TextComponent/>
                    </div>
                    <div className="rating-container">
                        <Rating value={5}  cancel={false}/>
                        <p className="grade">5.0</p>
                    </div>
                    <div>
                        <TextComponent/>
                    </div>
                </div>
                <div className="right-container">
                    <div>
                        <StudentClassList classes={[]}/>
                    </div>
                </div>
            
            </div>
        )

    }
}


const mapStateToProps = (state, props) => ({
    teacherFilter: state.filters.teacherStatus,
})

const mapDispatchToProps = (dispatch) => ({
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentClassesPage);