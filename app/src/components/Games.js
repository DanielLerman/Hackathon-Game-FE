// import "./styles.css";
import WheelComponent from "react-wheel-of-prizes";
import React, {useState, useEffect} from "react";

export default function Games() {
    const [arrowOn, setArrowOn] = useState([""]);
    const [flash, setFlash] = useState(false);



  const segments = [
    "Shots o' Clock",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];
  

  const segColors = [
    "#01FFF4",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
    "#FF4DA6",
  ];
  const onFinished = (winner) => {
    setArrowOn(winner)};

    useEffect(() => {
       if(arrowOn === "1"){
        alert("Please drink 1 shot")
       }
       if(arrowOn === "2"){
        alert("Please drink 2 shot")
       }
       if(arrowOn === "3"){
        alert("Please drink 3 shot")
       }
       if(arrowOn === "4"){
        alert("Please drink 4 shot")
       }
       if(arrowOn === "5"){
        alert("Please drink 5 shot")
       }
       if(arrowOn === "6"){
        alert("Please drink 6 shot")
       }
       if(arrowOn === "7"){
        alert("Please drink 7 shot")
       }
       if(arrowOn === "8"){
        alert("Please drink 8 shots")
       }
       if(arrowOn === "9"){
        alert("Please drink 9 shots")
       }
       if(arrowOn === "10"){
        alert("Please drink 10 shots")
       }
       if(arrowOn === "11"){
        alert("Please drink 11 shots")
       }
       if(arrowOn === "12"){
        alert("Please drink 12 shots")
       }
       if(arrowOn === "Shots o' Clock"){
        setFlash(true)
       }
       return (alert("Did they actually do this?"))
      }, [arrowOn]);
      
  return (
    <div>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="BLACK"
          contrastColor="white"
          buttonText="DRINK"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Helvetica"
        />
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
