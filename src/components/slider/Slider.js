import React, {useState, useEffect} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import Landing from '../landing/Landing';
import Axios from 'axios';
export default function Slider() {

    const [dataSlider,setDataSlider] = useState([]);
    useEffect(() => {
          
      Axios.get('http://localhost:5000/galerie/').then( (response) => {
  
      setDataSlider(response.data);
       
  
     })
    .catch((error) => {
      console.error(error);
    });
    
    },[]);

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div>
            <Landing subtitle="FORUM" title="Editions Précédentes Du Forum" color="#004059" />

        
            <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: dataSlider.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        </div>
    )
}
