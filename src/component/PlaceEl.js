export default function PlaceEl(props){

    const suffix = "https://i.stack.imgur.com/4iGwt.jpg?s=64&g=1";
    document.documentElement.style.setProperty('--img',suffix);

    return(
        <div className="placeEl" style={{
            'animationDelay' : `${0.1*props.bgImage}s`
        }}
             onClick={()=>{
                 props.setPlaceView(true)
             }}>
            <div className="btnCart material-symbols-outlined" onClick={(e)=>{
                e.stopPropagation()
                e.target.classList.toggle('active')
            }}>heart_plus</div>
            <div className="placeImageBox">
                <img className="placeImage"
                src={props.bgImage.pic}></img>
                {/* // <div className="placeImage" ><Image</div> */}
            </div>
            <div className="placeInfo">
                <p className="placeName">{props.name}</p>
                <p className="placeLocation">{props.loc}</p>
                <p className="placePrice">￦{props.price} (어른)</p>
                <p className="placePoint">★{props.point}</p>
            </div>
        </div>
    )
}

