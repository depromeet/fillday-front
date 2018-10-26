import * as React from 'react'; 
import "./login.css";
import firebase from '../../auth/firebase';
import { Redirect } from 'react-router';

interface ILoginProps {
    login: boolean;
    onLogin: () => void;
}

interface ILoginPageState {
    email: string ;
    password: string;
}
export default class LoginPage extends React.Component<ILoginProps, ILoginPageState> {
    constructor(props: ILoginProps) {
        super(props);
        this.onEmailEnter = this.onEmailEnter.bind(this);
        this.onPasswordEnter = this.onPasswordEnter.bind(this);
        this.firebaseLogin = this.firebaseLogin.bind(this);
        this.state = {
            email: "",
            password: "",
        }
    }
    public onEmailEnter(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            email: event.currentTarget.value
        });
    }
    public onPasswordEnter(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            password: event.currentTarget.value
        });
    }
    public firebaseLogin() {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
        ).then(() => {
            this.props.onLogin();
        })
        .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                firebase.auth().signInWithEmailAndPassword(
                    this.state.email, this.state.password
                ).then(() => {
                    this.props.onLogin();
                }).catch((loginError) => {
                    alert(loginError.message);
                })
            }
        })
    }
    public render() {
        if (this.props.login) {
            return (
                <Redirect to='/' />
            );
        }
        return (
            <div className="login-page">
                <div className="login-img" />
                <div className="login-box">
                    <div className="login-title">
                        필데이 로그인
                    </div>
                    <div className="login-info">
                        <div className="login-form">
                            <div className="login-name-field">
                                이메일
                            </div>
                            <input 
                            onChange={this.onEmailEnter}
                            className="login-input"
                            name="email"
                            id="input-email"
                            type="text"
                            placeholder="이메일을 입력하세요"
                            value={this.state.email}
                            />
                        </div>
                        <div className="login-form">
                            <div className="login-name-field">
                                비밀번호
                            </div>
                            <input 
                            onChange={this.onPasswordEnter}
                            name="pw"
                            id="input-pw"
                            className="login-input"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            value={this.state.password}
                            />
                        </div>
                    </div>
                    <div className="login-button" 
                    onClick={this.firebaseLogin}
                    />
                    <div className="login-other">
                        다른 로그인 방법은 준비중입니다.
                    </div>
                </div>
            </div>
        );
    }
}