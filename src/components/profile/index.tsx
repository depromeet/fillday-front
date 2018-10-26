import * as React from "react";
import ProfileInputBox from "./components/profileInputBox";
const styles = require("./profile.scss");
import Switch from "react-switch";
import KAKAO from "./imgs/kakao.png";
import FACEBOOK from "./imgs/logo-facebook.png";
import GOOGLE from "./imgs/google.png";
import ToggleSwitch from "../common/toggleSwitch/toggleSwitch";

import Select from "react-select";

interface IProfileStatus {
  name: string;
  email: string;
  password: string;
  isWebAlarmActivationOn: boolean;
  alarmDurationTime: ALARM_DURATION_TIME;
}

enum ALARM_DURATION_TIME {
  TWO,
  FOUR,
  SIX
}

const options = [
  { value: ALARM_DURATION_TIME.TWO, label: "2시간 이후에 알려주세요." },
  { value: ALARM_DURATION_TIME.FOUR, label: "4시간 이후에 알려주세요." },
  { value: ALARM_DURATION_TIME.SIX, label: "6시간 이후에 알려주세요." }
];

export default class ProfilePage extends React.Component<any, IProfileStatus> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "박은비 짱",
      email: "siver_rain@gmail.com",
      password: "test_password",
      isWebAlarmActivationOn: true,
      alarmDurationTime: ALARM_DURATION_TIME.TWO
    };
  }

  public render() {
    const {
      name,
      email,
      password,
      isWebAlarmActivationOn,
      alarmDurationTime
    } = this.state;
    return (
      <div className={styles.profileContainer}>
        <div className={styles.profileWrapper}>
          <div className={styles.profileTitle}>계정 설정</div>
          <div className={styles.profileLine} />

          <div className={styles.profileSubTitle}>개인정보</div>
          <ProfileInputBox
            onChangeFunc={this.handleNameChange}
            inputName="이름"
            inputType="string"
            defaultValue={name}
          />
          <ProfileInputBox
            onChangeFunc={this.handleEmailChange}
            inputName="이메일"
            inputType="string"
            defaultValue={email}
          />
          <ProfileInputBox
            onChangeFunc={this.handlePasswordChange}
            inputName="비밀번호"
            inputType="password"
            defaultValue={password}
          />
          <div className={styles.profileLine} />

          <div className={styles.profileSubTitle}>소셜 계정 연결</div>
          <div className={styles.conentWrapper}>
            <div className={styles.content}>카카오와 연결</div>
            <div className={styles.socialConnectButton}>
              <img src={KAKAO} className={styles.imgWrapper} />
              KAKAO
            </div>
          </div>

          <div className={styles.conentWrapper}>
            <div className={styles.content}>페이스북과 연결</div>
            <div className={styles.socialConnectButton}>
              <img src={FACEBOOK} className={styles.imgWrapper} />
              FACEBOOK
            </div>
          </div>

          <div className={styles.conentWrapper}>
            <div className={styles.content}>구글과 연결</div>
            <div className={styles.socialConnectButton}>
              <img src={GOOGLE} className={styles.imgWrapper} />
              GOOGLE
            </div>
          </div>
          <div className={styles.profileLine} />

          <div className={styles.profileTitle}>알림 설정</div>
          <div className={styles.profileLine} />

          <div className={styles.profileSubTitle}>알림</div>

          <div className={styles.conentWrapper}>
            <div className={styles.content}>웹 알림 활성화</div>
            <div className={styles.webAlarmActivationWrapper}>
              웹에서 알림을 받겠습니까?
              <ToggleSwitch
                onChangeFunc={this.toggleIsWebAlarmActivationOn}
                checked={isWebAlarmActivationOn}
              />
            </div>
          </div>
          <div className={styles.conentWrapper}>
            <div className={styles.content}>알림 주기 시간</div>
            <div className={styles.alramDurationSelectorWrapper}>
              <Select
                className={styles.selectWrapper}
                value={options[alarmDurationTime]}
                onChange={this.handleChangeAlarmDurationTime}
                options={options}
              />
            </div>
          </div>
          <div className={styles.conentWrapper}>
            <div className={styles.content}>알림 받는 날</div>
            <div className={styles.alarmDaySelectorWrapper}>
              <div className={styles.alarmDaySelector}>월</div>
              <div className={styles.alarmDaySelector}>화</div>
            </div>
          </div>

          <div className={styles.profileLine} />
        </div>
      </div>
    );
  }

  private handleNameChange = (name: string) => {
    // TODO: Dispatcher & API connect
    this.setState({
      name
    });
  };

  private handleEmailChange = (email: string) => {
    // TODO: Dispatcher & API connect
    this.setState({
      email
    });
  };

  private handlePasswordChange = (password: string) => {
    // TODO: Dispatcher & API connect
    this.setState({
      password
    });
  };

  private toggleIsWebAlarmActivationOn = () => {
    // TODO: Dispatcher & API connect
    this.setState({
      isWebAlarmActivationOn: !this.state.isWebAlarmActivationOn
    });
  };

  private handleChangeAlarmDurationTime = (alarmDurationTime: any) => {
    this.setState({
      alarmDurationTime: alarmDurationTime.value
    });
  };
}
