// components/Modal/Modal
import React from "react";
import styled from "styled-components";
// import image from "..//images.jpg";

function Modal({ onClose,place,setJjim ,jjim}) {
  const handleClose = () => {
    console.log(place);
    onClose?.();
  };


const addList = () =>{
  setJjim( jjim => [ ...jjim, place.tourName]);
  console.log(jjim);
  handleClose();
}

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <Img>
            <img src={place.pic} alt="smile" />
          </Img>
          <Price>
            <PriceSmalls>PAY</PriceSmalls>
            <PriceSmalls> 
                        어른 :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {place.adult} 
                <br/> 
                        
                        청소년 : &nbsp;&nbsp;{place.adolescent}   
                <br/> 
                        
                        유아 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{place.child} 
                <br/> 
                       
            </PriceSmalls>
          </Price>
          <Bc>
            {/* <Itembar>{place.tourLocation}</Itembar> */}
            <Itembar>종류 : {place.category}</Itembar>
            {/* <Bbutton>
              <Cbutton>BUY</Cbutton>
            </Bbutton> */}
            <Bbutton>
              <Cbutton onClick={addList} >BASKET</Cbutton>
            </Bbutton>
          </Bc>
          <Productexplain>
            <>
              <div>위치 : {place.tourName}</div>
              <div>{place.tourLocation}</div>
              {/* <div>043-832-5550</div> */}
            </>
            <Bspace>
              <Button onClick={handleClose}>Close</Button>
            </Bspace>
          </Productexplain>
          <Itemnamenaddes>
            <Smalls> </Smalls>
            <Bigs>  
                {place.tourName}
</Bigs>
            <Star>★★★★★</Star>
            <Ndiv>
              인원수{" "}
              <input
                class="ninput"
                type="number"
                name="number"
                min="1"
                max="9"
              />
            </Ndiv>
          </Itemnamenaddes>
          <Explain>
            {place.tourInfo}
            {/* {place['road_address'].building_name} */}
            {/* 쌍곡계곡은 퇴계 이황과 송강 정철 등 많은 유학자와 문인들이 찾아들어
            풍류를 즐기던 곳이다. 이곳의 아홉 명소를 쌍곡구곡이라 하는데, 다른
            구곡과 달리 1987년 12월 28일 괴산군에서 각계의 자문을 받아 지정한
            것이다. */}
          </Explain>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 30%;
  height: 60%;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 30px;
  height: 30px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  margin: 20px 30px;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "image itemnamenaddes price"
    "image explain buy-and-cash"
    "productexplain productexplain buy-and-cash";
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 10%;
    width: 100%;
  }
`;

const Button = styled.button`
  
  font-size: 2vh;
  padding: 1vh 2vh;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  margin-right: 13%;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

const Img = styled.div`
  grid-area: image;
  text-align: center;
`;

const Price = styled.div`
  grid-area: price;
  margin-left: 10%;
  text-align: left;
`;

const Smalls = styled.div`
  font-size: 3vh;
  margin-top: 15%;
`;

const Star = styled.div`
  font-size: 3vh;
  margin-top: 15%;
  color: red;
`;
const PriceSmalls = styled.div`
  font-size: 2vh;
  margin-top: 5%;
  position: relative;
  top: 30%;
`;

const Bigs = styled.div`
  font-size: 3vh;
`;

const PriceBigs = styled.div`
  font-size: 3vh;
  position: relative;
  top: 30%;
`;

const Bc = styled.div`
  grid-area: buy-and-cash;
  margin-left: 10%;
  text-align: left;
  margin-top:30%;
`;

const Itembar = styled.div`
  font-size: 1.5vh;
  margin-top: 2%;
  text-align: left;
`;

const Bbutton = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin: 2%;
  margin-top: 10%;
`;

const Cbutton = styled.button`
  
  border: 2px solid #1c1c1c;
  background-color: white;
  color: #1c1c1c;
  padding: 1vh 1vh;
  font-size: 1.2vh;
  cursor: pointer;
  border-color: #1c1c1c;
  color: #1c1c1c;
  &:hover {
    border-color: #1c1c1c;
    background-color: black;
    color: white;
  }
`;

const Productexplain = styled.div`
  grid-area: productexplain;
  border-top: 2px solid #000;
  margin: 2%;
  white-space: pre-wrap;
  text-align: left;
`;

const Bspace = styled.div`
  text-align: right;
`;

const Itemnamenaddes = styled.div`
  grid-area: itemnamenaddes;
  margin-left: 10%;
  text-align: left;
`;

const Ndiv = styled.div`
  margin-top: 5%;
  font-size: 2.3vh;
`;

const Explain = styled.div`
  grid-area: explain;
  margin-left: 10%;
  margin-top: 3%;
  font-size: 2vh;
  text-align: left;
`;
export default Modal;
