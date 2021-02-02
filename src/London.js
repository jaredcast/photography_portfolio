import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { londonItems } from './photoList';

const London = () => {
    const [mainImg, setMainImg] = useState(`/1L.jpg`) //Set first initial
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
                        setC(londonItems.length);
                        setMainImg(`/${londonItems.length}L.jpg`);
                        console.log("New c " + c);                      
                    }
                    else {
                        setReset(true);
                        setDir("1000px");
                        setC(c - 1);
                        setMainImg(`/${c-1}L.jpg`);
                        console.log("New c " + c);
                    } 
                }}/>
                <FaArrowAltCircleRight className='m-right-arrow' onClick={() => {
                    console.log("Old c " + c);
                    if (c+1 > londonItems.length) {
                        setReset(true);
                        setDir("-1000px");
                        setC(1);
                        setMainImg(`/${1}L.jpg`);
                        console.log("New c " + c);
                    }
                    else {
                        setReset(true);
                        setDir("-1000px");
                        setC(c + 1);
                        setMainImg(`/${c+1}L.jpg`);
                        console.log("New c " + c);
                    }                   
                }} />
            </div>
            
            <div className = "carousel">
                <div className="carouselItems"  style={{
                    'transform' : `translateX(-${wid}%)`
                }}>
                    {londonItems.map((item, index) => (
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
                if (wid+20 <= londonItems.length * 20) {
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

export default London;