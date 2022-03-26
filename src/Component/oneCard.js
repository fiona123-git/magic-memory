import React from 'react'
import './oneCard.css'
import beep from '../sound/success-1-6297.mp3';
import {Howl,Howler} from 'howler';


//  function used for the back of the card//
// the flip
export default function oneCard({ card, handleChoice, cardFlipped, disabled }) {    // destructure card and handleChoice props from App
 

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card);
          console.log(beep)
              Howler.volume(1.0);
        //Howler is used to play the sound in react
           const sound=new Howl({src : [beep]});
           sound.play();
            console.log('beep');
            
        }
    }

    

  return (
    <div className="card">
      
      <div className={cardFlipped ? "flipped" : ""}>
         <img className="front" src={card.src} alt="card-front" />
         <img  className="back" src="/img/cover.jpg " onClick={handleClick} alt="card back"/>
         </div>
        </div>
      
    
  )
}


