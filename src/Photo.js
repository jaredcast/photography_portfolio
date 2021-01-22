import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();
//temp
const items = [
    { id:1,image: "/1.jpg"},
    {id:2,image: "/2.jpg"},
    { id:3, image: "/3.jpg"},
    { id:4, image: "/4.jpg"},
    { id:5, image: "/5.jpg"},{ id:1,image: "/1.jpg"},
    {id:2,image: "/2.jpg"},
    { id:3, image: "/3.jpg"},
    { id:4, image: "/4.jpg"},
    { id:5, image: "/5.jpg"},   
    //{ id:3, image: "/3.jpg"},
    
  ];

const Photo = () => {
    const [mainImg, setMainImg] = useState(`/1.jpg`) //Set first initial
    const [c, setC] = useState(1);
    const props = useSpring({
        opacity: 1, from: {opacity: 0, transform: "translate(-1000px, 0px)"}, 
        transform: "translate(0px, 0px)",
        reset: true, initial: 0}
        )

    return(
        <div className = "photos">
            <div className = "mainImgCont">
                <animated.img src={mainImg} style={props}/>
                <FaArrowAltCircleLeft className='m-left-arrow' onClick={() => {
                    console.log("Old c " + c);
                    if (c - 1 === 0) {
                        setC(items.length);
                        setMainImg(`/${items.length}.jpg`);
                        console.log("New c " + c);
                    }
                    else {
                        setC(c - 1);
                        setMainImg(`/${c-1}.jpg`);
                        console.log("New c " + c);
                    } 
                }}/>
                <FaArrowAltCircleRight className='m-right-arrow' onClick={() => {
                    console.log("Old c " + c);
                    if (c+1 > items.length) {
                        setC(1);
                        setMainImg(`/${1}.jpg`);
                        console.log("New c " + c);
                    }
                    else {
                        setC(c + 1);
                        setMainImg(`/${c+1}.jpg`);
                        console.log("New c " + c);
                    }                   
                }} />
                
            </div>
            
            <div className = "carousel">
                <div className="carouselItems">
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
            <FaArrowAltCircleLeft className='c-left-arrow'/>
                <FaArrowAltCircleRight className='c-right-arrow'/>
        </div>
        
        
    )
}

export default Photo;