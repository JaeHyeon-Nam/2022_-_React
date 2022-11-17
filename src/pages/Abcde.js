import React, { useState, useEffect } from "react";
import { Bootpay } from '@bootpay/client-js'
import Toast from "./Toast";


import "./index12.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { element } from "prop-types";
import { useForceUpdate } from "@react-spring/shared";

export default function Abcde  ({setJjim, jjim})  {
  const [toast, setToast] = useState(false);
  // const copyUrl = async () => {
  //   // await navigator.clipboard.writeText(url); // 링크 복사 부분
  //   setToast(true);
  // };









  const [error,setError] = ([]);

              const buyfunction = (count,price,ghdlt) => {

               
                  Bootpay.requestPayment({
                    "application_id": "627bbe542701800023f6b473", // 고유 키값 : 결제설정 -> 연동키 및 보안 -> 첫번째꺼 자바스크립트
                    "price": price, // 가격
                    "order_name": "테스트결제", // 이름
                    "order_id": "TEST_ORDER_ID",
                    "pg": "kcp", // pg 이게 좀 개고생인데 얘네가 이름을 안알려줘서 대문자로 했다가 오류나길래 소문자로 고쳤더니 됬음 다른건 이름을 모르겠어
                    "method": "카드",
                    "tax_free": 0,
                    "user": {
                    "id": "회원아이디",
                    "username": "회원이름",
                    "phone": "01000000000",
                    "email": "test@test.com"
                    },
                    "items": [
                    {
                        "id": "item_id",
                        "name": "name",
                        "qty": 1,
                        "price": price
                    }
                    ],
                    "extra": {
                    "open_type": "iframe",
                    "card_quota": "0,2,3",
                    "escrow": false
                    }
                });
                
                sessionStorage.clear();
                
                jjim.map((jim,index)=>{
                  sessionStorage.setItem("adwqdq",
                  sessionStorage.getItem("adwqdq")+jim + " 어른 : " + cartlist[index].adult_quantity+ " 청소년 : " + cartlist[index].adole_quantity +
                  " 어린이 : " + cartlist[index].child_quantity);
                  
                })

                fetch(`http://localhost:8080/userticket/`,{
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body : JSON.stringify({
                      user_id : localStorage.getItem('id'),
                      user_ticket : sessionStorage.getItem("adwqdq")
                  })
              });


              setTimeout(function(){
                setToast(true);
              },7000);
              
              

              // setToast(true);
            }



  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    {
      itemName: "item 1",
      quantity: 1,
      isSelected: false,
    },
    {
      itemName: "item 2",
      quantity: 3,
      isSelected: true,
    },
    {
      itemName: "item 3",
      quantity: 2,
      isSelected: false,
    },
  ]);

  const [cartlist, setCartlist] = useState([
    // {
    //   tourName:'',
    //   tourLocartion:'',
    //   category:'',
    //   adult:0,
    //   adolescent:0,
    //   child:0,
    //   score:0,
    //   pic:''
    // }
  ]);

  const [tourAdult, setTourAdult] = useState([]);
  const [tourAdole, setTourAdole] = useState([]);
  const [tourChild, setTourChild] = useState([]);

  const [fltmxmdi, setFltmxmdi] = useState([{
    vmffpdltm:''
  }]);


  const [rerand,setRerand] = useState(true);




  useEffect(()=>{
    console.log(jjim);

    // const tp = Object.assign({}, jjim);

    // console.log(tp);
    jjim.map((jim) =>{
      fetch(`http://localhost:8080/placelist/cart/`+jim)
      .then(response =>{
          return response.json();
      })
      .then(response=>{
          response.adult_quantity = 0;
          response.adole_quantity = 0;
          response.child_quantity = 0;
          // setCartlist(cartlist.concat(response));
          cartlist.push(response);


          // tourAdult.push(response);
          // tourAdole.push(response);
          // tourChild.push(response);
   
      })

    })
    // cartlist.map(data=>({
    //   ...data, quantity:0
    // }))

    // // cartlist.forEach(function(element){
    // //   ...element, 
    // //   element.quantity = 0;
    // // });

    // setTourAdult(cartlist);
    // setTourAdole(cartlist);
    // setTourChild(cartlist);

    console.log(cartlist);


    console.log(items);
  },[])

  

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(0);

  const [totalItemPrice, setTotalItemPrice] = useState(0);
  // const handleAddButtonClick = () => {
  //   const newItem = {
  //     itemName: inputValue,
  //     quantity: 1,
  //     isSelected: false,
  //   };

  //   const newItems = [...items, newItem];

  //   setItems(newItems);
  //   setInputValue("");
  //   calculateTotal();
  // };

  // const toggleComplete = (index) => {
  //   const newItems = [...items];

  //   newItems[index].isSelected = !newItems[index].isSelected;

  //   setItems(newItems);
  // };

  const handleQuantityIncrease = (index) => {
    const newItems = [...cartlist];

    newItems[index].quantity++;

    setCartlist(newItems);
    calculateTotal();
  };
  const handleQuantityIncrease1 = (index1) => {
    const newItems1 = [...cartlist];

    newItems1[index1].adult_quantity++;
    
    setCartlist(newItems1);

    calculateTotal();
  };  
  const handleQuantityIncrease2 = (index2) => {
    const newItems2 = [...cartlist];

    newItems2[index2].adole_quantity++;

    setCartlist(newItems2);
    calculateTotal();
  };  
  const handleQuantityIncrease3 = (index3) => {
    const newItems3 = [...cartlist];

    newItems3[index3].child_quantity++;

    setCartlist(newItems3);
    calculateTotal();
  };
  const handleQuantityDecrease = (index) => {
    const newItems = [...cartlist];

    newItems[index].quantity--;

    setCartlist(newItems);
    calculateTotal();
  };
  const handleQuantityDecrease1 = (index1) => {
    const newItems4 = [...cartlist];

    newItems4[index1].adult_quantity--;

    setCartlist(newItems4);
    calculateTotal();
  };  
  const handleQuantityDecrease2 = (index2) => {
    const newItems5 = [...cartlist];

    newItems5[index2].adole_quantity--;

    setCartlist(newItems5);
    calculateTotal();
  };  
  const handleQuantityDecrease3 = (index3) => {
    const newItems6 = [...cartlist];

    newItems6[index3].child_quantity--;

    setCartlist(newItems6);
    calculateTotal();
  };



  const calculateTotal = () => {
    const totalItemCount = cartlist.reduce((total, cart) => {
      return total + cart.adult_quantity + cart.adole_quantity + cart.child_quantity;
    }, 0);

    // const totalItemCount = tourAdult.reduce((total, cart) => {
    //   return total + cart.quantity;
    // }, 0)
    // +  tourAdole.reduce((total, cart) => {
    //   return total + cart.quantity;
    // }, 0)
    // + tourChild.reduce((total, cart) => {
    //   return total + cart.quantity;
    // }, 0)
    // ;   


    setTotalItemCount(totalItemCount);

    const totalItemPrice = cartlist.reduce((total, cart) => {
      return total + cart.adult_quantity * cart.adult + cart.adole_quantity * cart.adolescent + cart.child_quantity * cart.child;
    }, 0);

    setTotalItemPrice(totalItemPrice);
  };


  


  
  return (
    <div className="AAAAA">
        <div className="body">
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
            <div className = "add-item-input">
              {
                rerand ?
                <button onClick={()=>
                  {
                    setRerand(false);
                    // jjim.map((jim,index)=>{
                    //   setFltmxmdi({...fltmxmdi, [0] : {vmffpdltm : fltmxmdi[0].vmffpdltm.concat(jim)} });
                    //   // console.log(jim);
                    //   // setlist(jim);
                    //   // console.log(lists);
                    // });
                    // sessionStorage.setItem("palceeee",fltmxmdi[0].vmffpdltm);
                    // console.log(lists);
                  
                  }
                  }>찜 여행지 목록 보기</button>
                : <button>찜 여행지 목록 보기</button>
              }
            
              
              </div>
          {/* <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          /> */}
          {/* <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          /> */}
        </div>
        <div className="item-list">
          {cartlist.map((cart1, index1) => (
            <div>
                          <div className="item-container">
                          
                                      <div className="item-name" 
                                      
                                      >
                                          <>
                                              <FontAwesomeIcon icon={faCircle} />
                                              <span >{cart1.tourName}</span>
                                              <span> </span>
                                              <span >어른 : {cart1.adult}</span>

                                          </>
                                          <>
                                              {/* <FontAwesomeIcon icon={faCircle} />
                                              <span>{cart.tourLocation}</span> */}
                                          </>
                                      </div>
                                              <div className="quantity">
                                                  <button>
                                                  <FontAwesomeIcon
                                                      icon={faChevronLeft}
                                                      onClick={() => handleQuantityDecrease1(index1)}
                                                  />
                                                  </button>
                                                  <span> {cart1.adult_quantity} </span>
                                                  <button>
                                                  <FontAwesomeIcon
                                                      icon={faChevronRight}
                                                      onClick={() => handleQuantityIncrease1(index1)}
                                                  />
                                                  </button>
                                              </div>
                          </div>

            </div>
                          
          ))}
          {cartlist.map((cart2, index2) => (
            <div>
                          <div className="item-container">
                          
                                      <div className="item-name" 
                                      
                                      >
                                          <>
                                              <FontAwesomeIcon icon={faCircle} />
                                              <span >{cart2.tourName}</span>
                                              <span> </span>
                                              <span >청소년 : {cart2.adolescent}</span>

                                          </>
                                          <>
                                              {/* <FontAwesomeIcon icon={faCircle} />
                                              <span>{cart.tourLocation}</span> */}
                                          </>
                                      </div>
                                              <div className="quantity">
                                                  <button>
                                                  <FontAwesomeIcon
                                                      icon={faChevronLeft}
                                                      onClick={() => handleQuantityDecrease2(index2)}
                                                  />
                                                  </button>
                                                  <span> {cart2.adole_quantity} </span>
                                                  <button>
                                                  <FontAwesomeIcon
                                                      icon={faChevronRight}
                                                      onClick={() => handleQuantityIncrease2(index2)}
                                                  />
                                                  </button>
                                              </div>
                          </div>

            </div>
                          
          ))}
            {cartlist.map((cart3, index3) => (
            <div>
                          <div className="item-container">
                          
                                      <div className="item-name" 
                                      
                                      >
                                          <>
                                              <FontAwesomeIcon icon={faCircle} />
                                              <span >{cart3.tourName}</span>
                                              <span> </span>
                                              <span >어린이 : {cart3.child}</span>

                                          </>
                                          <>
                                              {/* <FontAwesomeIcon icon={faCircle} />
                                              <span>{cart.tourLocation}</span> */}
                                          </>
                                      </div>
                                              <div className="quantity">
                                                  <button>
                                                  <FontAwesomeIcon
                                                      icon={faChevronLeft}
                                                      onClick={() => handleQuantityDecrease3(index3)}
                                                  />
                                                  </button>
                                                  <span> {cart3.child_quantity} </span>
                                                  <button>
                                                  <FontAwesomeIcon
                                                      icon={faChevronRight}
                                                      onClick={() => handleQuantityIncrease3(index3)}
                                                  />
                                                  </button>
                                              </div>
                          </div>

            </div>
                          
          ))}
        </div>
        <div className="total">Total: {totalItemCount} & Price: {totalItemPrice}</div>
        <div>
        <ul>
          <button className="bottun-color" onClick={()=> {buyfunction(totalItemCount, totalItemPrice, fltmxmdi[0].vmffpdltm); } } > 구매 하기 </button>
          {toast && <Toast setToast={setToast} text="구매 성공 . 좌측의 티켓을 확인해 보세요." />}

        </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};