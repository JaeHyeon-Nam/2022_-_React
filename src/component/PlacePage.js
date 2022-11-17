import { useEffect } from "react";

export default function PlacePage({ele, setPlaceView, setJjim, jjim}){
    // console.log(props.ele);
    // ele = {element} setPlaceView={setPlaceView} setJjim = {props.setJjim} jjim = {props.jjim}
    const temp = () => {
        setJjim( jjim => [ ...jjim, ele.tourName]);
        console.log(jjim);
    }



    return(
        <div id="placePage" onScroll={(e)=>{
            const btnReserve = document.querySelector('.btnReserve')
            e.target.scrollTop > 270 ? btnReserve.classList.add('active') :
                btnReserve.classList.remove('active')
        }}>
            <div className="material-symbols-outlined btnClose" onClick={() => {
                setPlaceView(false)
            }}>close</div>

            <div className="inner">
                <div className="placeInfo">
                    <p className="placeName">{ele.tourName}</p>
                    <p className="placeLocation">{ele.tourLocation}</p>
                    <p className="placePoint">★ 4.9</p>
                    <p className="placeBtnBox">
                        <button className="btnReserve btn" 
                        onClick={temp}
                   
                        >빠른예약</button>
                        <button className="btnCart btn">찜</button>
                    </p>
                </div>
            </div>
            <div className="placeAbout">
                <div className="inner">
                    <img className="placeImage" src={ele.pic}></img>
                    {/* <div className="placeImage"></div> */}
                    <div className="infoBox">
                        <p className="title">상세설명</p>
                        <p className="script">설명</p>
                    </div>
                </div>
            </div>
        </div>
    )
}