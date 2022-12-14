import {useState, useEffect} from 'react'
import logo from '../images/logo.png'
import alertStart from '../images/joinStart.png'
import alertFin from '../images/joinFin.png'

export default function Join(props) {
    const [joinMenuPtr, setJoinMenuPtr] = useState(0)
    const [questionPtr, setquestionPtr] = useState(0)
    const [canNext, setCanNext] = useState(true)

    const [userInfo,setUserInfo] = useState({
        inputName:'',
        inputMail : '',
        inputNickName : '',
        inputAge : '',
        inputPw : '',
        inputPwConfirm:'',
        wantPlace1:'',
        wantPlace2:'',
        wantPlace3:'',
        wantPlace4:'',
        wantPlace5:''

    });

    const onChangeAccount = (e) => {

        setUserInfo({
            ...userInfo,
            [e.target.id] : e.target.value,
        });
    };

    const fetchUserInfo = () =>{
        setJoinMenuPtr(joinMenuPtr+1);

        // const json = JSON.stringify({
        //     userName : userInfo.inputName,
        //     userPassword : parseInt(userInfo.inputPw),
        //     e_mail : userInfo.inputMail,

        //     usernickname : userInfo.inputNickName,
        //     age : parseInt(userInfo.inputAge),
        //     mbti_I : parseInt(mbti[0].score),
        //     mbti_E : parseInt(mbti[1].score),
        //     mbti_N : parseInt(mbti[2].score),
        //     mbti_S : parseInt(mbti[3].score),
        //     mbti_T : parseInt(mbti[4].score),
        //     mbti_F : parseInt(mbti[5].score),
        //     mbti_J : parseInt(mbti[6].score),
        //     mbti_P : parseInt(mbti[7].score),
        //     wantPlace1 : 1,
        //     wantPlace2 : 2,
        //     wantPlace3 : 3,
        //     wantPlace4 : 4,
        //     wantPlace5 : 5
        // })

        fetch(`http://localhost:8080/user/sign_up`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                userName : userInfo.inputName,
                userPassword : parseInt(userInfo.inputPw),
                e_mail : userInfo.inputMail,

                usernickname : userInfo.inputNickName,
                age : parseInt(userInfo.inputAge),
                mbti_I : parseInt(mbti[0].score),
                mbti_E : parseInt(mbti[1].score),
                mbti_N : parseInt(mbti[2].score),
                mbti_S : parseInt(mbti[3].score),
                mbti_T : parseInt(mbti[4].score),
                mbti_F : parseInt(mbti[5].score),
                mbti_J : parseInt(mbti[6].score),
                mbti_P : parseInt(mbti[7].score),
                wantPlace1 : userInfo.wantPlace1,
                wantPlace2 : userInfo.wantPlace2,
                wantPlace3 : userInfo.wantPlace3,
                wantPlace4 : userInfo.wantPlace4,
                wantPlace5 : userInfo.wantPlace5
            })
        })
        // .then(body => body.json())
        // .then(body => {console.log(body)})
    }

    const [mbti,setMBTI] = useState([{
        score:0
    },{
        score:0
    },{
        score:0
    },{
        score:0
    },{
        score:0
    },{
        score:0
    },{
        score:0
    },{
        score:0
    }
])

    const questions = [{
        id: '1', title: '??????????????? ????????? ????????? ????????? ?????? ????????????????'
    }, {
        id: '2', title: '?????? ?????? ??? ?????? ????????? ????????? ???????????? ???????????? ?????? ????????????????'
    }, {
        id: '3', title: '?????? ????????? ?????? ?????? ????????? ?????? ?????? ?????? ????????????????'
    }, {
        id: '4', title: '?????? ????????? ?????? ????????? ?????? ???????????? ?????? ?????????????'
    }, {
        id: '5', title: '???????????? ?????? ??????????????? ???????????? ???????????????????'
    }, {
        id: '6', title: '????????? ???????????? ????????? ???????????? ?????? ?????? ?????? ????????? ???????????? ?????????????'
    }, {
        id: '7', title: '?????? ?????? ????????? ?????? ????????? ?????? ?????? ???????????? ?????????????'
    }, {
        id: '8', title: '???????????? ???????????? ????????? ????????? ??? ???????????????????'
    },

    ]



    useEffect(()=>{
        console.log(mbti);
    },[mbti])

    useEffect(()=>{
        console.log(userInfo);
    },[userInfo])

    useEffect(() => {
        const joinMenus = document.querySelectorAll('.joinMenu>li')
        joinMenus.forEach((el, index) => {
            joinMenuPtr >= index && el.classList.add('active')
            joinMenuPtr === index ? el.classList.add('focus') : el.classList.remove('focus')
        })
    }, [joinMenuPtr])

    return (<div id="joinPage">
        <span className="material-symbols-outlined btnClose" onClick={() => {
            props.setIsJoin(false)
        }}>close</span>
        <div className="joinForm">
            <div className="btnClose material-symbols-outlined" onClick={() => {
                props.setIsJoin(true)
            }}>close
            </div>
            <div className="inner">
                <ul className="joinMenu">
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">chat</div>
                        <p className="joinMenuText">??????</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">perm_contact_calendar</div>
                        <p className="joinMenuText">???????????? ??????</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">android</div>
                        <p className="joinMenuText">?????? ??????</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">android</div>
                        <p className="joinMenuText">?????? ??????</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">new_releases</div>
                        <p className="joinMenuText">?????? ??????</p>
                    </li>
                </ul>

                <div className="joinBox">
                    <div className="inner">
                        {joinMenuPtr === 0 ? <div className="contentBox">
                            <img className="logo" src={logo} alt="logo"/>
                            <img className="alertStart alert" src={alertStart} alt="logo"/>
                            <p className="introText">?????? ???????????? ?????? ???????????? ???????????? ??????????????? ??????, ?????? ??? ??????????????? ???????????? ???????????????.
                                ??? ???????????? ?????????????????? ?????? ?????? ?????? ???????????? ????????? ????????? ??? ?????????, ?????? ?????? ??? ?????? ??? ???????????? ???????????? ??? ????????????.</p>
                            <button className="btnAccept" onClick={(e) => {
                                e.target.classList.add('active')
                                setTimeout(() => {
                                    setJoinMenuPtr(1)
                                }, 1000)
                            }}>?????????????????? ??????????????????
                            </button>
                        </div> : joinMenuPtr === 1 ? <div className="contentBox">
                            <div className="inputContainer">
                                <div className="inputEl">
                                    <label htmlFor="inputName" id="labelName">????????? ???????????????</label>
                                    <input type="text" id="inputName" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelName').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelName').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputMail" id="labelMail">????????? ????????? ???????????????</label>
                                    <input type="text" id="inputMail" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelMail').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelMail').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputNickName" id="labelNickName">???????????? ???????????? ???????????????</label>
                                    <input type="text" id="inputNickName" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelNickName').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelNickName').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">????????? ???????????????</label>
                                    <input type="text" id="inputAge" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputPw" id="labelPw">???????????? ??????????????? ???????????????</label>
                                    <input type="password" id="inputPw" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelPw').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelPw').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputPwConfirm" id="labelPwConfirm">??????????????? ?????? ??? ??? ??????????????????</label>
                                    <input type="password" id="inputPwConfirm" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelPwConfirm').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelPwConfirm').classList.remove('focused')
                                    }} onKeyUp={(e) => {
                                        (e.target.value !== "" && e.target.value === document.querySelector('#inputPw').value) ? setTimeout(() => {
                                            canNext && setJoinMenuPtr(2)
                                        }, 1000) : setTimeout(() => {
                                            document.querySelector('.pwConMsg').classList.add('active')
                                        }, 1000)
                                    }}
                                    onChange={onChangeAccount}/>
                                    <p className="pwConMsg">??????????????? ??????????????????!</p>
                                </div>
                            </div>
                        </div> : joinMenuPtr === 2 ? <div className="contentBox">
                            <ul className="tendencyBox">
                                {questions.map((q, index) => {
                                    return (<li className="tendencyEl focus" key={q.id}>
                                        <p className="question">{q.id+'. '+q.title}</p>
                                        <input type="range" max="7" className="response" onChange={(e) => {
                                            e.target.style.accentColor = e.target.value > 5 ? '#FC5230' :
                                                e.target.value > 2 ? '#FD8A69' : '#FECCBE'
                                                    setMBTI({
                                                        ...mbti,
                                                        // mbti[index].score :
                                                        [index]:{score : e.target.value}
                                                    })
                                        }}></input>
                                    </li>)
                                })}
                                <button className="btnSubmit" onClick={()=>{
                                    setJoinMenuPtr(joinMenuPtr+1)
                                }} >??? ???</button>
                            </ul>
                        </div> :joinMenuPtr === 3 ? 
                        

                            <div className="contentBox">
                            <img  src="image/temp.jpg" />
                            <br></br>
                            <div className="inputContainer">
                               
        
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">????????? ???????????? ??????????????????</label>
                                    <input type="text" id="wantPlace1" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>
                                <br></br> <br></br>
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">????????? ???????????? ?????????????????? </label>
                                    <input type="text" id="wantPlace2" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>          
                                <br></br> <br></br>
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">????????? ???????????? ??????????????????</label>
                                    <input type="text" id="wantPlace3" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>
                                <br></br> <br></br>
                                          <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">????????? ???????????? ??????????????????</label>
                                    <input type="text" id="wantPlace4" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>         
                                <br></br> <br></br>
                                 <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">????????? ???????????? ??????????????????</label>
                                    <input type="text" id="wantPlace5" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>



                                <ul className="tendencyBox_re">
                                <button className="btnSubmit" onClick={()=>{
                                    setJoinMenuPtr(joinMenuPtr+1)
                                    fetchUserInfo()
                                }} >??? ???</button>
                            </ul>
                                
                            </div>
                            </div>

                        
                        : <div className="contentBox">
                            <img className="logo" src={logo} alt="logo"/>
                            <img className="alertFin alert" src={alertFin} alt="logo"/>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}