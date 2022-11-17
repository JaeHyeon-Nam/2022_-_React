import React from 'react'
import { useEffect,useState } from "react"
import QRCode from "react-qr-code";
import './fontstyle.css'


export default function TicketPage(){
    // const [numberIncrease, setNumber] = useState(0);


    const [temp, setTemp] = React.useState([]);


    // const [temp, setTemp] = useState([{
    //     user_id: "",
    //     user_ticket: ""
    // }]);

    

    React.useEffect(function effectFunction(){
        async function fetchlist(){
            const response = await fetch(`http://localhost:8080/userticket/`+window.localStorage.getItem("id"));
            const json = await response.json();
            setTemp(json);
            console.log(temp);
        }

        //     fetch(`http://localhost:8080/userticket/`+window.localStorage.getItem("id"))
        //     .then(response =>{
        //         return response.json();
        //     })
        //     .then(response=>{
        //         setTemp(response);

        //     });
        // }   
        fetchlist();
    },[]);
        
    //     ()=>{
    //     fetch(`http://localhost:8080/userticket/`+window.localStorage.getItem("id"))
    //     .then(response =>{
    //         return response.json();
    //     })
    //     .then(response=>{
    //         setTemp(response);

    //     });

    //     console.log(temp);
    // },[numberIncrease])

    // const dkdldmdpdh =() =>{
    //     setNumber(numberIncrease +1);
    // }


    

    // const confimrtemp = () =>{
    //     fetch(`http://localhost:8080/userticket/`+window.localStorage.getItem("id"))
    //     .then(response =>{
    //         return response.json();
    //     })
    //     .then(response=>{
    //         setTemp(response);

    //     });

    //     temp.map(temp=>{
    //         console.log(temp.user_ticket);
    //     })
    //     // console.log(temp);
    // }

    return(

        // <ul>
        //    { temp.map(tmp =>(
        //         <QRCode value = {tmp.user_ticket}></QRCode>
        //     ))}
        // </ul>
        <div id="ticketPage">
            <div className="ticketList">
                <div className="inner">
                    <ul>
                        {/* <button onClick = {() =>{
                            setTem
                            );
                        }}>클릭</button> */}
                            
                          {
                            temp.map(tmp=>(
                                <body>
                                <QRCode value = {tmp.user_ticket}></QRCode>
                               
                                <p class='test'>{tmp.user_ticket}</p>
                                </body>
                            ))
                            }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

