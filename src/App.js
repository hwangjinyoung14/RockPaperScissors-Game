import { useState } from 'react';
import './App.css';
import Box from './component/Box';

/*React icons */
import {FaHandRock, FaHandPaper, FaHandScissors} from 'react-icons/fa';

let choice = {
  rock:{
    name:'Rock',
    img:process.env.PUBLIC_URL + '/img/주먹.png'
  },
  scissors:{
    name:'Scissors',
    img:process.env.PUBLIC_URL+'/img/가위.png'
  },
  paper:{
    name:'Paper',
    img:process.env.PUBLIC_URL+'/img/보.png'
  }
}

function App() {
//유저와 컴퓨터의 선택, 결과값을 상태관리해주는 함수
const[userSelect, setUserSelect]=useState(null);
const[computerSelect, setComputerSelect]=useState(null);
const[result, setResult]=useState(null);

//유저의 선택에 따라 게임 진행하는 함수
const play = (userChoice)=>{
  console.log('선택됨', userChoice);
  //사용자의 선택을 상태로 저장
  setUserSelect(choice[userChoice]);
  let computerChoice = randomChoice();
  setComputerSelect(computerChoice);
  setResult(judgement(choice[userChoice], computerChoice));
}
  //컴퓨터) 가위바위보 중 랜덤으로 하나를 선택하는 함수
  const randomChoice =() =>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  //승패를 판단하는 함수]
  const judgement = (user, computer)=>{
    console.log('user', user, 'computer', computer)

  if(user.name ===computer.name){
    return "tie"//무승부
  }else if (user.name ==="Rock"){
    return computer.name === "Scissors" ? 'win': 'lose';
  }else if (user.name ==="Scissors"){
    return computer.name === "Paper" ? 'win': 'lose';
  }else if (user.name ==="Paper"){
    return computer.name === "Rock" ? 'win': 'lose';
  }
  };

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>🎮ROCKPAPERSCISSOR GAME🎮</h1>
      <div className="Box-wrap">
        <Box title='Me' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={()=> play('scissors')}>가위<FaHandScissors/></button>
        <button onClick={()=> play('rock')}>바위<FaHandRock/></button>
        <button onClick={()=> play('paper')}>보<FaHandPaper/></button>
      </div>
    </div>
  );
}

export default App;
