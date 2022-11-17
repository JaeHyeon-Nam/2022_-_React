import {useState, useEffect} from 'react'
import PlacePage from '../component/PlacePage'
import PlaceEl from '../component/PlaceEl'
import Loading from '../component/Loading'

export default function Home(props) {
    const [joinBarView, setJoinBarView] = useState(true)
    const [categoryPtr, setCategoryPtr] = useState(0)
    const [categoryView, setCategoryView] = useState(false)
    const [placeView, setPlaceView] = useState(false)
    
    const [tourList, setTourList] = useState([]);
    const [element, setElement] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(true);
            },6000);
        }


  


        const categories = document.querySelectorAll('.categoryEl')
        categories.forEach((category, index) => {
            categoryPtr === index ? category.classList.add('active') :
                category.classList.remove('active')
        })

        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(false);
            },6000);
        }



    }, [categoryPtr])

    const category = [{
        'icon': 'hotel_class', 'text': '인기'
    }, {
        'icon': 'settings_suggest', 'text': '맞춤'
    }, {
        'icon': 'landscape', 'text': '산'
    }, {
        'icon': 'sailing', 'text': '바다'
    }, {
        'icon': 'apartment', 'text': '도시'
    }, {
        'icon': 'toys_fan', 'text': '액티비티'
    }, {
        'icon': 'hotel', 'text': '숙소'
    }, {
        'icon': 'more_horiz', 'text': '기타'
    }
    ]

    // const data = []
    // for(let i=0;i<299;i++){
    //     data.push(i)
    // }

    useEffect(()=>{
        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(true);
            },6000);
        }

      
  

        const categoryBox = document.querySelector('.categoryBox')
        categoryView ? categoryBox.classList.add('active') :
            categoryBox.classList.remove('active')

            if(categoryPtr ===1){
                setTimeout(function(){
                    setLoading(false);
                },6000);
            }
    
       

    },[categoryView])

    useEffect(()=>{

        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(true);
            },6000);
        }

  
  


        fetch(`http://localhost:8080/placelist/`)
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            setTourList(data);
        })
        .then(()=> {
            // console.log(tourlist);
        });

        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(false);
            },6000);
        }

  
    },[]);


    useEffect(()=>{
        
        // if(categoryPtr ===1){
        //     setTimeout(function(){
        //         setLoading(true);
        //     },6000);
        // }

        // else{
        //     setTimeout(function(){
        //         setLoading(true);
        //     },4000);
        // }
  

        fetch(`http://localhost:8080/placelist/${categoryPtr}/`+window.localStorage.getItem("id"))
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            setTourList(data);
        })
        .then(()=> {
            // console.log(tourlist);
        });

        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(true);
            },4500);
        }

      
  

        if(categoryPtr ===1){
            setTimeout(function(){
                setLoading(false);
            },4500);
        }

   
    },[categoryPtr]);



    useEffect(()=>{
        console.log(element);
    },[element]);

    function test(aa){

    };


    return (<div id="homePage" onScroll={(e) => {
        const scr = e.target.scrollTop
        scr > 235 ? setCategoryView(true) : setCategoryView(false)
    }}>
        {
            placeView && <PlacePage  ele = {element} setPlaceView={setPlaceView} setJjim = {props.setJjim} jjim = {props.jjim}></PlacePage>
        }
        {joinBarView && <div className="joinBar" onClick={()=>{props.setIsJoin(false)}}>
            <p>아직도 트립윗미에 가입하지 않았다면?</p>
            <span className="material-symbols-outlined">mouse</span>
            <span className="material-symbols-outlined btnClose" onClick={() => {
                setJoinBarView(false)
            }}>close</span>
        </div>}
        <div id="searchContainer">
            <div className="inner">
                <div className="searchBox">
                    <input type="text" id="inputSearch" placeholder="어디로 놀러가실 건가요?" onKeyUp={(e) => {
                        const btnSearch = document.querySelector('#inputSearch+.btnSearch')
                        e.target.value !== "" ? btnSearch.classList.add('active') : btnSearch.classList.remove('active')
                    }}/>
                    <div className="material-symbols-outlined btnSearch">search</div>
                </div>
            </div>
        </div>
        <div id="placeContainer">
            <div className="categoryBox">
                <div className="inner">
                    {category.map((el, index) => {
                        return (<div className="categoryEl" key={index} onClick={() => {
                            setCategoryPtr(index)
                            setLoading(true)
                            
                        }}>
                             
                            <div className="categoryIcon material-symbols-outlined">{el.icon}</div>
                            <p className="categoryText">{el.text}</p>
                            
                        </div>)
                    })}
                </div>
            </div>
            <div className="placeBox">
                <div className="inner">
                    {loading && categoryPtr===1 ? <Loading/> : 
                    
                        tourList.map((el,index)=>{ 
                            return(
                                <div onClick={()=>setElement(el)}>

                                <PlaceEl bgImage={el} name={el.tourName} loc={el.tourLocation} price={el.adult} point={el.score} setElement={el} setPlaceView={setPlaceView}>
                           
                                </PlaceEl>
                            </div>
                      
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>)
}