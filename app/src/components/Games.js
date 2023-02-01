// import "./styles.css";
import WheelComponent from "../Components2/WheelComponent";
import React, {useState, useEffect} from "react";
import '../WheelCss.css'

export default function Games({ socket }) {
    const [arrowOn, setArrowOn] = useState([""]);
    const [flash, setFlash] = useState(false);
    console.log(flash)
    const [users, setUsers] = useState([]);

    useEffect(() => {
      socket.on('newUserResponse', (data) => setUsers(data));
    }, [socket, users]);


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
    "	#FAFA37",
    "#66FF66",
    "	#FF9933",
    "#FD5B78",
    "#00CCCC",
    "	#00CC99",
    "#66FF66",
    "	#FF9933",
    "#FD5B78",
    "#00CCCC",
    "	#00CC99",
    "#66FF66",
    "#FF9933",
  ];

  const onFinished = (winner) => {
    setArrowOn(winner)
    socket.emit('points', {winner});
};

    useEffect(() => {
       if(arrowOn === "1"){
        // alert("Please drink 1 shot")
       }
       if(arrowOn === "2"){
        // alert("Please drink 2 shot")
       }
       if(arrowOn === "3"){
        // alert("Please drink 3 shot")
       }
       if(arrowOn === "4"){
        // alert("Please drink 4 shot")
       }
       if(arrowOn === "5"){
        // alert("Please drink 5 shot")
       }
       if(arrowOn === "6"){
        // alert("Please drink 6 shot")
       }
       if(arrowOn === "7"){
        // alert("Please drink 7 shot")
       }
       if(arrowOn === "8"){
        // alert("Please drink 8 shots")
       }
       if(arrowOn === "9"){
        // alert("Please drink 9 shots")
       }
       if(arrowOn === "10"){
        // alert("Please drink 10 shots")
       }
       if(arrowOn === "11"){
        // alert("Please drink 11 shots")
       }
       if(arrowOn === "12"){
        // alert("Please drink 12 shots")
       }
       if(arrowOn === "Shots o' Clock"){
        setFlash(true)
       }
       return 
      }, [arrowOn]);
      
      return (
        <div className="background  d-flex justify-content-center">
          <div className="d-flex flex-column mt-3 align-items-center"> 
          <div className="spin-title p-4">SPIN IT</div>
          <WheelComponent
           style={{padding:"0"}}
            segments={segments}
            segColors={segColors}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="#FF6EFF "
            contrastColor="	BLACK"
            buttonText="DRINK"
            isOnlyOnce={false}
            size={190}
            upDuration={500}
            downDuration={600}
            fontFamily='Fredoka One'
          
          />
          </div>
    
        
           <h2>  {users.map((user) => (
                <p key={user.socketID}>{user.userName}</p>
              ))}</h2> 
        </div>
      );
    }