import axios from 'axios'
import {NotificationManager} from 'react-notifications';

export const setPass = (canPass) => ({
    type: 'SET_PASS',
    canPass
})

export const postLogin = (login) => {
    console.log('Dados:',login);
    return (dispatch) => {
        axios({
            url: 'https://tokr-server-api.herokuapp.com/admin/login',
            method: 'post',
            headers: {
                'app-pass': '90a8hsdnfilehuqahnfhiuh4rierrhqfhqhqhqeph9dklnnvknjjafaiojia98hf3iujklaaoiophhpafuuq',
                'Content-Type': 'application/json'
            },
            data: login
        })
        .then((response) => {
            console.log('tem resposta');
            const admin = response.data.admin
            NotificationManager.success('Login Com Sucesso', 'Pronto!')
            localStorage.masterPass = admin._id
            dispatch(setPass(true))
            window.location.reload()
        })
        .catch((err) => {
            console.log('passei com erro:', err);
        })
    }
}