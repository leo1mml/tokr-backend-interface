import axios from 'axios'

export const addTeacher = (teacher) => ({
    type: 'ADD_TEACHER',
    teacher
});


export const setTeachers = (teachers = []) => ({
    type: 'SET_TEACHERS',
    teachers
})

export const startFetchTeachers = () => {
    return(dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/teachers',
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
         })
         .then((response) => {
            const teachers = response.data.teacher
            dispatch(setTeachers(teachers))
         }) 
         .catch((err) => {
            dispatch(setTeachers([]))
            console.log(err);
         });

    }
}

const setTeacher = (teacher = undefined) => ({
    type: 'SET_TEACHER',
    teacher
})

export const startFetchTeacherById = (id) => {
    return (dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/teachers/' + id,
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const teacher = response.data.teacher
            dispatch(setTeacher(teacher))
        })
        .catch((err) => {
            dispatch(setTeacher(undefined))
            console.log(err);
        })
    }
}