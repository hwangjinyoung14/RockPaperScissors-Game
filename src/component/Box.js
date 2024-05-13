import React from 'react'

const Box = (props) => {
  let result;
  if(
    props.title ==='Computer'&&
    props.result !== 'tie' &&
    props.result !== ''
  ){
    result = props.result =='win'?'lose':'win';
  }else{
    result = props.result;
  }if(props.title === 'computer'){
    console.log('computer', result)
  }

  return (
    <div className={`Box ${result}`}>
      <h2>{props.title}</h2>
      <h3>{props.item && props.item.name}</h3>
      <img src={props.item && props.item.img} alt="" />
      <h3>{result}</h3>
    </div>
  ) 
}

export default Box