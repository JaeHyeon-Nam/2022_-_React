import logo from '../images/logo.png'
import {useEffect} from 'react'
import Login from '../pages/Login'

export default function SideMenu(props) {
    const menuEls = [{
        'icon': 'home', 'text': "홈"
    }, {
        'icon': 'person', 'text': "마이"
    }, {
        'icon': 'shopping_cart', 'text': "찜"
    }, {
        'icon': 'airplane_ticket', 'text': "티켓"
    }, {
        'icon': 'diversity_3', 'text': "게시판"
    }, {
        'icon': 'share_location', 'text': "지도"
    }, {
        'icon': 'diversity_3', 'text': "채팅"
    }
]

    useEffect(() => {
        const menus = document.querySelectorAll('#sideMenu > .menuList > li')
        menus.forEach((menu, index) => {
            props.menuPtr === index ? menu.classList.add('active') :
                menu.classList.remove('active')
        })
    }, [props.menuPtr])

    return (<div id="sideMenu">
        <div className="menuLogo">
            <img src={logo} alt="logo"/>
        </div>
        <ul className="menuList">
            {menuEls.map((menu, index) => {
                return (<li key={index} onClick={() => {
                    props.setMenuPtr(index)
                }}>
                    <div className="menuImg material-symbols-outlined">{menu.icon}</div>
                    <p className="menuText">{menu.text}</p>
                </li>)
            })}
        </ul>
        <div className="btnLogin" onClick={() => {
            props.setIsLogin(!props.isLogin)
            window.localStorage.removeItem('id')
        }}>
            <div className="menuImg material-symbols-outlined" title="로그인">{
                window.localStorage.getItem('id')===null
                 ? "login" : "logout"
            }</div>
            <p className="menuText" title="로그인">{
            
            window.localStorage.getItem('id')===null ? "로그인" : "로그아웃"
            }</p>
        </div>
    </div>)
}