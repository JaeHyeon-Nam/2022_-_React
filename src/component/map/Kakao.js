import React, { useEffect } from "react";
import Info from "./Info";
import './styles.css'
import Search from "./search/Search";
import { object } from "prop-types";
import Modal from './info/Modal'

const{kakao} = window;



const spaces = [
    {
        title: '카카오', 
        location: '제주',
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    },
    {
        title: '생태연못', 
        location: '제주',
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        title: '텃밭', 
        location: '제주',
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        title: '근린공원',
        location: '제주',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    },
    {
        title: '수암골',
        location: '청주',
        latlng: new kakao.maps.LatLng(36.647334, 127.4943559)
    },
    {
        title: '국립현대미술관 청주',
        location: '청주',
        latlng: new kakao.maps.LatLng(36.6554173, 127.49013532)
    },
    {
        title: '청주동물원',
        location: '청주',
        latlng: new kakao.maps.LatLng(36.6520697, 127.5229603)
    },
    {
        title: '대전스포츠몬스터',
        location: '대전',
        latlng: new kakao.maps.LatLng(36.3753050, 127.38141304)
    },
    {
        title: '주렁주렁 영등포 타임스퀘어점',
        location: '서울',
        latlng: new kakao.maps.LatLng(37.5171413610, 126.90317315)
    },
    {
        title: '주렁주렁 하남점',
        location: '하남',
        latlng: new kakao.maps.LatLng(37.54366588, 127.223674422)
    },
    {
        title: '스포츠몬스터 하남점',
        location: '하남',
        latlng: new kakao.maps.LatLng(37.545503520, 127.223883597)
    }
];



function Kakao(props){
    const [isOpen, setIsOpen] = React.useState(false);

    const [ps,setPs]=React.useState('');
    const [tourlist,setTourList] = React.useState([]);    
    const bounds = new kakao.maps.LatLngBounds();

    const [tourChoose,setTourChoose] = React.useState([]);


    useEffect(()=>{

        // const bounds = new kakao.maps.LatLngBounds();
        // const pstion = new kakao.maps.services.Places();
        // pstion.keywordSearch(ps,placesSearchCB);

        const markers = [];
        
        const container = document.getElementById('map');
        const options = {
            center : new kakao.maps.LatLng(36.628501,127.457667),
            level:8
        };
        const map = new kakao.maps.Map(container, options);

        const imageSrc = "image/free-icon-map-marker-5860579.png",
            imageSize = new kakao.maps.Size(36,40),
            imageOption = {offset: new kakao.maps.Point(27,69)};

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        const clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 5 // 클러스터 할 최소 지도 레벨 
        });

        // const iwContent ='<div style = "padding:5px;">Hello World!</div>',
        //         iwRemoveable = true;

        // const infowindow = new kakao.maps.InfoWindow({
        //     content:iwContent,
        //     removable : iwRemoveable
        // });
        

        for(var i = 0 ; i < tourlist.length; i++){

            const temp = tourlist[i];
            // const iwContent ='<div style = "padding:5px;">Hello World!</div>',
            // const iwContent = '<div style="padding:5px;">'+tourlist[i].tourName+'</div>',
            const iwContent = '<div style="display:black; background:#50627F; color:#fff;text-align:center; height: 24px;  line-height:22px; border-radius:4px; padding:0px 10px;">'+tourlist[i].tourName+'</div>',

            iwRemoveable = true;


            const infowindow = new kakao.maps.InfoWindow({
                content:iwContent,
                removable : iwRemoveable
            });



            if(ps.length===0){
                const geocoder = new kakao.maps.services.Geocoder();
                geocoder.addressSearch(tourlist[i].tourLocation, function(result,status){
                    if(status === kakao.maps.services.Status.OK){
                        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
                        const marker = new kakao.maps.Marker({
                            map: map,
                            position: coords,
                            image: markerImage
                        });
   
                        kakao.maps.event.addListener(marker, 'mouseover', function() {
                            // 마커 위에 인포윈도우를 표시합니다
                            infowindow.open(map, marker);  
                        });

                        kakao.maps.event.addListener(marker, 'mouseout', function() {
                        // 마커 위에 인포윈도우를 표시합니다
                        infowindow.close(map, marker);  
                         });

                        bounds.extend(new kakao.maps.LatLng(result[0].y, result[0].x));
                        map.setBounds(bounds);
                        
                        markers.push(marker);
                        clusterer.addMarkers(markers);

                        kakao.maps.event.addListener(marker, 'click', function() {
                            setTourChoose(temp);
                            console.log(tourChoose);
                            // 마커 위에 인포윈도우를 표시합니다
                            setIsOpen(true);
                            // infowindow.close(map, marker);  
                    });

                    }
                })
            }

            else if(tourlist[i].tourLocation.includes(ps[0])
            ||tourlist[i].tourName.includes(ps[0])){

            const geocoder = new kakao.maps.services.Geocoder();
            
            geocoder.addressSearch(tourlist[i].tourLocation, function(result,status){
                if(status === kakao.maps.services.Status.OK){
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    const marker = new kakao.maps.Marker({
                        map: map,
                        position: coords,
                        image: markerImage

                    });

                    kakao.maps.event.addListener(marker, 'mouseover', function() {
                        // 마커 위에 인포윈도우를 표시합니다
                        infowindow.open(map, marker);  
                  });

                  kakao.maps.event.addListener(marker, 'mouseout', function() {
                        // 마커 위에 인포윈도우를 표시합니다
                        infowindow.close(map, marker);  
                  });

   

                    bounds.extend(new kakao.maps.LatLng(result[0].y, result[0].x));
                    map.setBounds(bounds);

                    markers.push(marker);
                    clusterer.addMarkers(markers);
         
                    kakao.maps.event.addListener(marker, 'click', function() {
                        setTourChoose(temp);
                        // console.log(tourChoose);
                        // 마커 위에 인포윈도우를 표시합니다
                        setIsOpen(true);
                        // infowindow.close(map, marker);  
                });
                }
            })

            
        }

    }


    

    },[ps]);
    
   
    useEffect(()=>{
        fetch(`http://localhost:8080/placelist/`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            setTourList(data);
        })
        .then(()=> {
            // console.log(tourlist);
        })
    },[]);

    // useEffect(()=>{
    //     console.log("hi");

    //     {isOpen && (<Modal open={isOpen} onClose = {() => { setIsOpen(false);}}/>)}
    //     console.log("hi");
    //     setIsOpen(false);
    // },[isOpen]);
    // ModalFunction(()=>{
    //     {isOpen && (<Modal open={isOpen} onClose = {() => { setIsOpen(false);}}/>)}
    // });


    return(
      <div style={{marginLeft:'50px'}}>
        <Search setPs={setPs} />
        <div style={{width:'250%',margin:'10px auto',border:'1px solid black'}}>

                <div id="map" style={{width:'90%',height:'650px',border:'1px solid black',marginLeft:'40px',marginTop:'30px',
                borderRadius:'5%',float:'left'}}>
                </div>        
                
                <div 
                    style={{
                        marginTop:'30px',
                        width:'40%',
                        // border:'1px solid black',
                        // backgroundColor:'black',
                        // padding:'1% 1% 1% 1%',
                        borderRadius:'5%',
                        // marginLeft:'25%',
                        // marginRight:'25%',
                        float:'right'
                        
                    }}>
                        {isOpen && (<Modal place={tourChoose} setJjim = {props.setJjim} jjim = {props.jjim} open={isOpen} onClose ={()=>{ setIsOpen(false);}}/>)}
                    {/* <Info spaces={spaces} ps={ps} tourlist={tourlist}/> */}
                </div>
        </div>
    </div>        
        
    )
}

export default Kakao;
