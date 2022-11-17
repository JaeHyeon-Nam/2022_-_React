import { useEffect,useState } from "react"
import App from "../App";
import Home from "./Home";

export default function Mypage(props){

    const [temp, setTemp] = useState({
        userName: "",
        userPassword: "",
        e_mail: "",
        usernickname: "",
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

    const [individual, setIndividual] = useState({
        I_or_E : "",
        T_or_F : "",
        J_or_P : "",
        S_or_N : "",

    });


    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const [third,setThird] = useState("");
    const [fourth,setFourth] = useState("");



    useEffect(()=>{


  
        if(temp.mbti_I>=temp.mbti_E){
        setFirst("I");
        }
        else { setFirst("E");}

        if(temp.mbti_S>=temp.mbti_N){
            setSecond("S");
        }
        else {setSecond("N");}
        if(temp.mbti_T>=temp.mbti_F){
            setThird("T");
        }
        else {setThird("F");}

        if(temp.mbti_J>=temp.mbti_P){
            setFourth("J");
        }
        else {setFourth("P");}



  


    },[temp])


    useEffect(()=>{
        fetch(`http://localhost:8080/user/`+window.localStorage.getItem("id"))
        .then(response =>{
            return response.json();
        })
        .then(response=>{
            setTemp(response);

            // if(account.inputPW === temp.userPassword){
            //     props.setIsLogin(true)
            //   }
            // else{
            //     localStorage.removeItem('id');
            // }
        })
        .catch(()=>{
            localStorage.removeItem('id');
            props.setMenuPtr(0);
           
        })
        ;

    })


    return(
        <div id="mypage">
            <div className="profile">
                <div className="inner">
                    <div className="profileCard">
                        <div className="profileImage"></div>
                        <p className="profileName">{temp.userName}</p>
                        <button className="btnChangeImage">프로필 사진 변경</button>
                    </div>
                   
                    <ul className="profileMenu">
                        <li>
                            MBTI : {first}{second}{third}{fourth}
                        </li>
                        <li>
                            e_mail : {temp.e_mail}
                        </li>
                        <li>
                            age : {temp.age}
                        </li>
                        <li>
                            nickname : {temp.usernickname}
                        </li>
                    </ul>
                    
                  
                
                </div>
            </div>
        </div>
    )
}

// <style>

// ul { list-style:none; padding:0; margin:0; }

// ul li { float:left; padding:0; margin:0; }​


// </style>​ 