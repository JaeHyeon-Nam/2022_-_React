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
        id: '1', title: '주기적으로 새로운 친구를 만드는 것을 좋아하나요?'
    }, {
        id: '2', title: '자유 시간 중 상당 부분을 다양한 관심사를 탐구하는 데에 할애하나요?'
    }, {
        id: '3', title: '다른 사람이 울고 있는 모습을 보면 따라 울고 싶어지나요?'
    }, {
        id: '4', title: '일이 잘못될 때를 대비해 여러 대비책을 세워 두시나요?'
    }, {
        id: '5', title: '압박감이 심한 환경에서도 평정심을 유지하시나요?'
    }, {
        id: '6', title: '파티나 행사에서 새로운 사람보단 이미 알고 있는 사람과 대화하는 편인가요?'
    }, {
        id: '7', title: '하던 일을 완전히 마친 후에야 다른 일을 시작하는 편인가요?'
    }, {
        id: '8', title: '일정이나 목록으로 계획을 세우는 걸 좋아하시나요?'
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
                        <p className="joinMenuText">안내</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">perm_contact_calendar</div>
                        <p className="joinMenuText">개인정보 입력</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">android</div>
                        <p className="joinMenuText">성향 분석</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">android</div>
                        <p className="joinMenuText">경험 분석</p>
                    </li>
                    <li>
                        <div className="joinMenuIcon material-symbols-outlined">new_releases</div>
                        <p className="joinMenuText">가입 완료</p>
                    </li>
                </ul>

                <div className="joinBox">
                    <div className="inner">
                        {joinMenuPtr === 0 ? <div className="contentBox">
                            <img className="logo" src={logo} alt="logo"/>
                            <img className="alertStart alert" src={alertStart} alt="logo"/>
                            <p className="introText">관광 콘텐츠란 단순 관광지를 포함하여 액티비티나 체험, 숙박 등 편의시설을 포함하는 개념입니다.
                                본 플랫폼에 가입하신다면 국내 모든 관광 콘텐츠의 정보를 열람할 수 있으며, 맞춤 추천 및 예약 등 서비스를 이용하실 수 있습니다.</p>
                            <button className="btnAccept" onClick={(e) => {
                                e.target.classList.add('active')
                                setTimeout(() => {
                                    setJoinMenuPtr(1)
                                }, 1000)
                            }}>이해하셨다면 클릭해주세요
                            </button>
                        </div> : joinMenuPtr === 1 ? <div className="contentBox">
                            <div className="inputContainer">
                                <div className="inputEl">
                                    <label htmlFor="inputName" id="labelName">이름을 입력하세요</label>
                                    <input type="text" id="inputName" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelName').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelName').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputMail" id="labelMail">이메일 주소를 입력하세요</label>
                                    <input type="text" id="inputMail" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelMail').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelMail').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputNickName" id="labelNickName">사용하실 닉네임을 입력하세요</label>
                                    <input type="text" id="inputNickName" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelNickName').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelNickName').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">나이를 입력하세요</label>
                                    <input type="text" id="inputAge" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputPw" id="labelPw">사용하실 비밀번호를 입력하세요</label>
                                    <input type="password" id="inputPw" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelPw').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelPw').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                </div>
                                <div className="inputEl">
                                    <label htmlFor="inputPwConfirm" id="labelPwConfirm">비밀번호를 다시 한 번 입력해주세요</label>
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
                                    <p className="pwConMsg">비밀번호를 확인해주세요!</p>
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
                                }} >완 료</button>
                            </ul>
                        </div> :joinMenuPtr === 3 ? 
                        

                            <div className="contentBox">
                            <img  src="image/temp.jpg" />
                            <br></br>
                            <div className="inputContainer">
                               
        
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">원하는 여행지를 입력해주세요</label>
                                    <input type="text" id="wantPlace1" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>
                                <br></br> <br></br>
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">원하는 여행지를 입력해주세요 </label>
                                    <input type="text" id="wantPlace2" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>          
                                <br></br> <br></br>
                                <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">원하는 여행지를 입력해주세요</label>
                                    <input type="text" id="wantPlace3" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>
                                <br></br> <br></br>
                                          <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">원하는 여행지를 입력해주세요</label>
                                    <input type="text" id="wantPlace4" className="inputBox" onFocus={() => {
                                        document.querySelector('#labelAge').classList.add('focused')
                                    }} onBlur={(e) => {
                                        e.target.value === "" && document.querySelector('#labelAge').classList.remove('focused')
                                    }}
                                    onChange={onChangeAccount}/>
                                    
                                </div>         
                                <br></br> <br></br>
                                 <div className="inputEl">
                                    <label htmlFor="inputAge" id="labelAge">원하는 여행지를 입력해주세요</label>
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
                                }} >완 료</button>
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