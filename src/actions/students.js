const axios = require('axios')

export const addStudent = (student) => ({
    type: 'ADD_STUDENT',
    student
});


export const setStudents = (students = []) => ({
    type: 'SET_STUDENTS',
    students
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