import * as React from 'react'; 
import "./login.css";
import * as firebase from 'firebase';
import { Redirect } from 'react-router';

interface ILoginProps {
    login: boolean;
    onLogin: () => void;
    firebase: typeof firebase;
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
        // 계정 생성 시도
        this.props.firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password
        ).then((user) => {
            this.props.onLogin();
            // api 서버에 등록
            const options = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    "name": this.state.email.split('@')[0],
                    "email": this.state.email,
                    "accessToken": `atk-${this.state.email}`,
                    "provider": "NAVER"
                })
            };

            fetch("http://fillday.manjong.org/v1/accounts", options) .then((response) => {
                alert(response.json());
            }).catch((ferr) => {
                alert(ferr);
            });
        }).catch((error) => {
            // 이미 존재하는 계정일 경우 로그인 시도
            if (error.code === "auth/email-already-in-use") {
                this.props.firebase.auth().signInWithEmailAndPassword(
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