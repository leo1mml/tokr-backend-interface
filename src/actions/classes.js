import axios from 'axios'
import {NotificationManager} from 'react-notifications';

export const addClass = (classToAdd) => ({
    type: 'ADD_CLASS',
    classToAdd
});

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