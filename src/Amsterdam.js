import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import amstItems from './photoList';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();
//temp
const items = [
    { id:1,image: "/1a.jpg"},
    { id:2,image: "/2a.jpg"},
    { id:3, image: "/3a.jpg"},
    { id:4, image: "/4a.jpg"},
    { id:5, image: "/5a.jpg"},
    { id:6, image: "/6a.jpg"},
    { id:7, image: "/7a.jpg"}, 
    //{ id:3, image: "/3.jpg"}
  ];

const Amsterdam = () => {
    const [mainImg, setMainImg] = useState(`/1a.jpg`) //Set first initial
    const [c, setC] = useState(1);
    const [direction, setDir] = useState("1000px");
    const [wid, setWid] = useState(0);
    const [resetBool, setReset] = useState(true);

    const props = useSpring({
        opacity: 1, from: {opacity: 0, transform: `translate(${direction}, 0px)`}, 
        transform: "translate(0px, 0px)",
        reset: resetBool, initial: 0})

    return(
        <div className = "photos">
            <div className = "mainImgCont">
                <animated.img src={mainImg} style={props}/> {/* This is the main image.*/}
                <FaArrowAltCircleLeft className='m-left-arrow' onClick={() => {
                    console.log("Old c " + c);
                    if (c - 1 === 0) {
                        setReset(true);
                        setDir("1000px");
                        setC(items.length);
                        setMainImg(`/${items.length}a.jpg`);
                        console.log("New c " + c);                      
                    }
                    else {
                        setReset(true);
                        setDir("1000px");
                        setC(c - 1);
                        setMainImg(`/${c-1}a.jpg`);
                        console.log("New c " + c);
                    } 
                }}/>
                <FaArrowAltCircleRight className='m-right-arrow' onClick={() => {
                    console.log("Old c " + c);
                    if (c+1 > items.length) {
                        setReset(true);
                        setDir("-1000px");
                        setC(1);
                        setMainImg(`/${1}a.jpg`);
                        console.log("New c " + c);
                    }
                    else {
                        setReset(true);
                        setDir("-1000px");
                        setC(c + 1);
                        setMainImg(`/${c+1}a.jpg`);
                        console.log("New c " + c);
                    }                   
                }} />
            </div>
            
            <div className = "carousel">
                <div className="carouselItems"  style={{
                    'transform' : `translateX(-${wid}%)`
                }}>
                    {items.map((item, index) => (
                        <img src={item.image} onClick={() => {
                            setMainImg(item.image);
                            setC(item.id);
                            console.log("Value of c " + c + 1);
                        }}
                        key = {index}/>
                    ))}
                </div>
            </div>
            <FaArrowAltCircleLeft className='c-left-arrow' onClick = {() => {
                if (wid-20 >= 0) {
                    setWid(wid-20);
                    console.log(wid-20);
                    setReset(false);
                }
                else {
                    console.log("Can't go left.")
                };
            }}/>
            <FaArrowAltCircleRight className='c-right-arrow' onClick = {() => {
                if (wid+20 <= items.length * 20) {
                    setWid(wid+20);
                    console.log(wid+20);
                    setReset(false);
                }
                else {
                    //fix me later
                };
            }}/>
        </div>
    )
}

export default Amsterdam;