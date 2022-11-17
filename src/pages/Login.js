
import { useEffect } from 'react';
import {useState} from 'react'

export default function Login(props) {

    const [account, setAccount] = useState({
        inputID: "",
        inputPW: "",
      });
    
    const [temp, setTemp] = useState({
        userName: "",
        userPassword: "",
        e_mail: "",
        nickname: "",
        age : 0,
        mbti_J: 0,
        mbti_E: 0,
        mbti_T: 0,
        mbti_F: 0,
        mbti_I: 0,
        mbti_N: 0,
        mbti_P: 0,
        mbti_S: 0,
        wantPlace1 : 0,
        wantPlace2 : 0,
        wantPlace3 : 0,
        wantPlace4 : 0,
        wantPlace5 : 0
    });

      //input에 입력될 때마다 account state값 변경되게 하는 함수
      const onChangeAccount = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
      };


    const findUserId = () =>{
        localStorage.setItem('id',account.inputID);

        fetch(`http://localhost:8080/user/`+window.localStorage.getItem("id"))
        .then(response =>{
            return response.json();
        })
        .then(response=>{
            setTemp(response);

            if(account.inputPW === temp.userPassword){
                props.setIsLogin(true)
              }
            else{
                localStorage.removeItem('id');
            }
        })
        .catch(()=>{
            localStorage.removeItem('id');

            setTemp({
                userName: "",
                userPassword: "",
                e_mail: "",
                nickname: "",
                age : 0,
                mbti_I: 0,
                mbti_E: 0,
                mbti_T: 0,
                mbti_F: 0,
                mbti_S: 0,
                mbti_N: 0,
                mbti_J: 0,
                mbti_P: 0,
                wantPlace1 : 0,
                wantPlace2 : 0,
                wantPlace3 : 0,
                wantPlace4 : 0,
                wantPlace5 : 0
            });
            console.log("아이디 없음");
        })
        ;
    };
     

// promise 하면 여러개 fetch ?

    return (<div id="loginPage">
        <div className="loginForm">
            <div className="loginHeader">
                <p>로그인</p>
                <div className="btnClose material-symbols-outlined" onClick={() => {
                    props.setIsLogin(true)
                }}>close
                </div>
            </div>
            <div className="loginBody">
                <div className="inner">
                    <div className="inputEl">
                        <div className="material-symbols-outlined icon">mail</div>
                        <input type="text" id="inputID" name="inputID" placeholder="아이디를 입력하세요" onFocus={(e) => {
                            document.querySelector('.inputEl:first-child>.icon').classList.add('active')
                            document.querySelector('.inputEl:first-child').classList.add('active')
                        }} onBlur={(e) => {
                            document.querySelector('.inputEl:first-child>.icon').classList.remove('active')
                            document.querySelector('.inputEl:first-child').classList.remove('active')
                        }}
                            onChange={onChangeAccount}
                        />
                    </div>
                    <div className="inputEl">
                        <div className="material-symbols-outlined icon">lock</div>
                        <input type="password" id="inputPW" name="inputPW" placeholder="비밀번호를 입력하세요" onFocus={(e) => {
                            document.querySelector('.inputEl:last-child>.icon').classList.add('active')
                            document.querySelector('.inputEl:last-child').classList.add('active')
                        }} onBlur={(e) => {
                            document.querySelector('.inputEl:last-child>.icon').classList.remove('active')
                            document.querySelector('.inputEl:last-child').classList.remove('active')
                        }}
                            onChange={onChangeAccount}
                        />
                    </div>
                </div>
            </div>
            <div className="loginFooter">
                <button className="btnLogin btn" onClick={findUserId}>로그인</button>
                <button className="btnJoin btn" onClick={()=>{props.setIsJoin(false);  props.setIsLogin(true)}}>회원가입</button>
            </div>
        </div>
    </div>)
}