import axios from 'axios'
import {NotificationManager} from 'react-notifications';

export const addStudent = (student) => ({
    type: 'ADD_STUDENT',
    student
});


export const setStudents = (students = []) => ({
    type: 'SET_STUDENTS',
    students
})

export const setStudent = (student) => ({
    type: 'SET_STUDENT',
    student
})

export const startFetchStudents = () => {
    return(dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/students',
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
         })
         .then((response) => {
            const students = response.data.students
            dispatch(setStudents(students))
         }) 
         .catch((err) => {
            dispatch(setStudents([]))
            console.log(err);
         });

    }
}

export const startAddStudent = (student = {}) => {
    return(dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/students',
            method: 'post',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            },
            data: student
         }).then((response) => {
             const responseStudent = response.data.student
             dispatch(addStudent({
                 id: responseStudent._id,
                 ...student
             }))
         }).catch((error) => {
             console.log(error);
         })
    }
}

export const startFetchStudentById = (id) => {
    return (dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/students/' + id,
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const student = response.data.student
            dispatch(setStudent(student))
        })
        .catch((err) => {
            console.log(err);
        })
    }
}


export const startPatchStudentById = (id, body) => {
    return (dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/students/patch/' + id,
            method: 'patch',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            },
            data: body
        }).then((response) => {
            console.log('passei com sucesso');
            NotificationManager.success('Dados Alterados', 'Sucesso!');
        })
        .catch((err) => {
            console.log('passei com erro');
            console.log(err);
        })
    }
}