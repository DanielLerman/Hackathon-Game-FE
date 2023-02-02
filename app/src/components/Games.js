import WheelComponent from "../Components2/WheelComponent";
import React, { useState, useEffect, useContext } from "react";
import "../WheelCss.css";
import { GameContext } from "../Contextprovider";
import Confetti from "react-dom-confetti";

export default function Games({ socket }) {
  const { playersTurn, setPlayersTurn } = useContext(GameContext);
  const [arrowOn, setArrowOn] = useState([""]);
  const [shots, setShots] = useState(false);
  const [task, setTask] = useState("");
  const [users, setUsers] = useState([]);
  const [confetti, setConfetti] = useState(false);

  const toggleConfetti = () => {
    setConfetti(true);
  };
  let currentIndex = 0;

  const yourTurn = (users) => {
    if (currentIndex >= users.length) {
      currentIndex = 0;
    }
    const element = users[currentIndex];
    currentIndex++;

    return console.log(element);
  };
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const dareTasksLevel1 = [
    "Sing the main chorus of your favorite song",
    "Switch t shirts with the player to your right",
    "Hold your breath for 30 seconds",
    "Dont talk for 1 turn",
    "Put your finger on your nose for 1 turn",
    "Without looking down, what t shirt are you wearing",
    "Dont blink for 45 seconds",
    "Hum a song and if the other players cant guess it you drink",
    "Bend down and touch your toes",
  ];
  const dareTasksLevel2 = [
    "Do a handstand for 10 second",
    "Post a risky story on a Instagram",
    "Let a player of your choice send a risky text from your phone to someone of their choosing",
    "Twerk",
    "Daily Double: Take 2 shots",
    "Take off your shirt for 1 turn (No double standards)",
    "Give the player of your choice a foot rub for 1 turn",
    "Prank call the mom of the player to your left",
    "Crab walk to the nearest bathroom",
  ];
  const dareTasksLevel3 = [
    "Suck the toe of the player of your choosing",
    "Gargle the hardest alcohol on the table for 15 seconds",
    "Let any player you want slap you in the face",
    "Call your mom/dad and tell her you are pregnant / got a girl pregnant",
    "Give a hickey to the person nearest to you",
    "Lick the bottom of your shoe",
    "Smack the butt of the player you know the least",
    "Benchpress any player you choose",
    "Shout something of the other players choosing outside the window/door",
  ];
  const dareTasksLevel4 = [
    "Choose a player to french kiss",
    "Flash all players for 5 seconds",
    "Demonstrate your favorite sex position with the person to your right",
    "Let any player you choose spit in your face and don’t wipe it off for 30 seconds",
    "Stick your fist in your mouth",
    "Pick up a player and hold them upside down",
    "Make your 'O' face",
    "Lap dance any player of your choosing",
    "Crawl on the ground seductively",
    "Take a video of you spanking yourself",
  ];
  const dareTasksLevel5 = ["Everyone Time To Take A Shot!!"];

  const getRandomTask = (arr) => {
    let task = arr[Math.floor(Math.random() * arr.length)];
    setTask(task);
  };

  const toggleTasBox = () => {
    setShots((curr) => !curr);
    setTask("");
  };
  const tookShots = () => {
    setShots((curr) => !curr);
    setTask("");
  };
  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      setUsers(data);
      setPlayersTurn(data);
    });
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
    "12",
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
    setArrowOn(winner);
    socket.emit("points", { winner, socketID: socket.id });
  };

  useEffect(() => {
    if (arrowOn === "1") {
      getRandomTask(dareTasksLevel1);
    }
    if (arrowOn === "2") {
      getRandomTask(dareTasksLevel1);
    }
    if (arrowOn === "3") {
      getRandomTask(dareTasksLevel1);
    }
    if (arrowOn === "4") {
      getRandomTask(dareTasksLevel1);
    }
    if (arrowOn === "5") {
      getRandomTask(dareTasksLevel1);
    }
    if (arrowOn === "6") {
      getRandomTask(dareTasksLevel2);
    }
    if (arrowOn === "7") {
      getRandomTask(dareTasksLevel2);
    }
    if (arrowOn === "8") {
      getRandomTask(dareTasksLevel2);
    }
    if (arrowOn === "9") {
      getRandomTask(dareTasksLevel2);
    }
    if (arrowOn === "10") {
      getRandomTask(dareTasksLevel3);
    }
    if (arrowOn === "11") {
      getRandomTask(dareTasksLevel3);
    }
    if (arrowOn === "12") {
      getRandomTask(dareTasksLevel4);
    }
    if (arrowOn === "Shots o' Clock") {
      getRandomTask(dareTasksLevel5);
    }
    return;
  }, [arrowOn]);

  return (
    <div className="background  d-flex ">
      <div className=" d-flex  players-box  flex-column  align-slef-start">
        <div className="d-flex justify-content-center">
          <span className="mx-4 fw-bold">PLAYER:</span>
          <span className="mx-4 fw-bold">SCORE:</span>
        </div>

        {users.map((user) => (
          <div key={user.socketID} className="d-flex player">
            <span>{user.player.username}</span>
            <span>{user.player.score} </span>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column mt-3 align-items-center">
        <div className="spin-title p-4">SPIN IT</div>
        <WheelComponent
          style={{ padding: "0" }}
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
          fontFamily="Fredoka One"
        />
        {task && (
          <div className=" task-box d-flex rounded-3 flex-column">
            <span className="task align-self-center p-3 fs-4">{task}</span>
            <span className="d-flex justify-content-center">
              <span className="shots-btn rounded-pill mx-2" onClick={tookShots}>
                Shots
              </span>
              <Confetti active={confetti} config={config} />
              <span
                className="points-btn rounded-pill mx-2 "
                onClick={toggleConfetti}
              >
                Points{" "}
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
