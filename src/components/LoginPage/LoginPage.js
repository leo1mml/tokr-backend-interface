import React from 'react'
import {connect} from 'react-redux'
import {postLogin} from '../../actions/admin'

class LoginPage extends React.Component {
    state = {
        password: '',
        email: ''
    }

    onPasswordChange = (e) => {
        const password = e.target.value
        this.setState(() => ({password}))
    }
    onUserNameChange = (e) => {
        const email = e.target.value
        this.setState(() => ({email}))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.postLogin(this.state)
    }
    render() {
        return (
            <div className="login-background">
                <div className="login-fields-container">
                    <form action="/" style={{height: "100%"}} onSubmit={this.onSubmit}>
                        <input type="text" className="username-input" placeholder="E-mail" onChange={this.onUserNameChange}/>
                        <input type="password" name="password" id="password" className="password-input" placeholder="Senha" onChange={this.onPasswordChange}/>
                        <input type="submit" value="Entrar" className="submit-input"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    postLogin: (username, password) => dispatch(postLogin(username, password))
});
  
export default connect(undefined, mapDispatchToProps)(LoginPage);