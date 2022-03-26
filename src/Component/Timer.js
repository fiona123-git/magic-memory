import React from 'react'
import {useState, useEffect} from 'react';
import './Timer.css'

function Timer(props) {
  const  { disabled,setDisabled, min,sec }= props;
 const [ minutes, setMintues] = useState(min);
 const [seconds, setSeconds] = useState(sec);
 useEffect(() => {
   let interval= setInterval(() => {
     if (seconds > 0) {
       setSeconds(seconds - 1)
     }
      if (seconds == 0) {
        if(minutes === 0){
         setDisabled(!disabled);
         clearInterval(interval)
        } else {
       setMintues(minutes - 1)
       setSeconds(59)}
     }
   },1000)
 return ()=>{
   clearInterval(interval);
 }
 })
  return (
    <div>
     {
       minutes == 0 && seconds == 0 ? < h4 > timeout </h4> :<h4>{minutes<10 ? `0${minutes} ` : minutes} : {seconds<10 ? `0${seconds}` : seconds} </h4 >
       }
    </div>
  )
}

export default Timer
