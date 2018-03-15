import axios from 'axios'
import {NotificationManager} from 'react-notifications';

export const addClass = (classToAdd) => ({
    type: 'ADD_CLASS',
    classToAdd
});

export const setClasses = (classes) => ({
    type: "SET_CLASSES",
    classes
})

export const startAddClass = (classToAdd) => {
    return (dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/classes',
            method: 'post',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            },
            data: classToAdd
        })
        .then((response) => {
            const tempClass = response.data.tempClass
            NotificationManager.success('Aula Agendada!', 'Pronto!')
            dispatch(addClass(tempClass))
        })
        .catch((err) => {
            console.log('passei com erro:', err);
        })
    }
}

export const startFetchClasses = () => {
    return (dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/classes',
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            dispatch(setClasses(response.data.tempClasses))
        })
        .catch((err) => {
            console.log('passei com erro:', err);
        })
    }
}

export const startFetchClassesByStudentId = (id) => {
    return (dispatch) => {
        axios({
            url: `https://tokr-server-api.herokuapp.com/classes/classesForStudent/${id}`,
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response.data);
            dispatch(setClasses(response.data.classes))
        })
        .catch((err) => {
            console.log('passei com erro aqui ó:', err);
        })
    }
}
export const startFetchClassesByTeacherId = (id) => {
    return (dispatch) => {
        axios({
            url: `https://tokr-server-api.herokuapp.com/classes/classesForTeacher/${id}`,
            method: 'get',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log(response.data);
            dispatch(setClasses(response.data.classes))
        })
        .catch((err) => {
            console.log('passei com erro aqui ó:', err);
        })
    }
}

