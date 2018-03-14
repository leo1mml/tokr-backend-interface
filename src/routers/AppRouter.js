import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddStudentpage from '../components/AddStudentPage'
import StudentsList from '../components/StudentsListPage/StudentsList'
import TeachersList from '../components/TeacherListPage/TeacherList'
import ClassSchedulerPage from '../components/ClassSchedulerPage/ClassSchedulerPage'
import EditTeacherPage from '../components/EditTeacherPage/EditTeacherPage'
import EditStudentPage from '../components/EditStudentPage/EditStudentPage'
import { push as Menu } from 'react-burger-menu'
import Header from '../components/Header'
import MenuItems from '../components/MenuItems'
import '../styles-css/components/BurgerMenu.css'
import {NotificationContainer} from 'react-notifications';

export default () => (
    <BrowserRouter>
      <div id="outer-container">
        <Header/>
          <Menu width={230} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <MenuItems/>
          </Menu>
          <div id="page-wrap">
            <Switch>
              <Route path="/" component={ClassSchedulerPage} exact={true}/>
              <Route path="/studentsList" component={StudentsList} exact={true}/>
              <Route path="/teachersList" component={TeachersList} exact={true}/>
              <Route path="/addStudent" component={AddStudentpage}/>
              <Route path="/editTeacher/:id" component={EditTeacherPage}/>
              <Route path="/editStudent/:id" component={EditStudentPage}/>
            </Switch>
          </div>
          <NotificationContainer/>
      </div>
    </BrowserRouter>
)