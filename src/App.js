import './styles/main.scss'
import {useState} from 'react'
import SideMenu from './component/SideMenu'
import Home from './pages/Home'
import Community from './pages/Community'
import Login from './pages/Login'
import Join from './pages/Join'
import Mypage from './pages/Mypage'
import TicketPage from './pages/TicketPage'
import Map from './component/map/Kakao'
import QRCode from "react-qr-code";
import { useEffect } from 'react'
import Abcde from "./pages/Abcde";
import Chat from "./component/chat/Chat/Chat"
import Joins from "./component/chat/Join/Join"
import App_Chat from './component/chat/App_Chat'

function App() {
    const [menuPtr, setMenuPtr] = useState(0)
    const [isLogin,setIsLogin] = useState(false)
    const [isJoin,setIsJoin] = useState(true)
    // sessionStorage.setItem('id', 10);

    const [jjimPlace, setJjimplace] = useState([
    ])


    const [temp, setTemp] = useState([{
        user_id: "",
        user_ticket: ""
    }]);


    // useEffect(()=>{
    //   console.log(jjimPlace);  
    // },[jjimPlace])
    return (
        <div className="App">
            {
                !isLogin && <Login setIsLogin={setIsLogin} setIsJoin = {setIsJoin}></Login>
            }
          
            {
                !isJoin && <Join setIsJoin={setIsJoin}></Join>
            }
            <SideMenu menuPtr={menuPtr} setMenuPtr={setMenuPtr} isLogin={isLogin} setIsLogin={setIsLogin}></SideMenu>
            {menuPtr === 0 && <Home setIsJoin={setIsJoin} setJjim = {setJjimplace} jjim = {jjimPlace} ></Home>}
            {menuPtr === 1 && <Mypage setMenuPtr={setMenuPtr}></Mypage>}
            {
            menuPtr === 2 &&   <Abcde setJjim={setJjimplace} jjim={jjimPlace} ></Abcde>
            }
            {menuPtr === 3 && <TicketPage temp={temp} setTemp={setTemp} ></TicketPage>}
            {menuPtr === 4 && <Community></Community>}
            {menuPtr === 5 && <Map setJjim = {setJjimplace} jjim = {jjimPlace}></Map>}
            {menuPtr === 6 && <App_Chat></App_Chat>}


        </div>
    );
}

export default App;
