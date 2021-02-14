import './App.css';
import Navbar from "./components/Navbar/Navbar";
import butterfly from './img/pinkbutterfly.png';
import { Component } from "react";
import axios from 'axios'; 

class App extends Component {
  render (){
    const name = "ellie"
 var nameComponent = (name === "ellie") ?
  <p>i'm {name}</p> : <p>i'm not {name}</p>
  const buttonFunction = () => {
    console.log("the yes button was clicked")
  }
  const buttonFunction2 = () => {
    console.log("the no button was clicked")
  }
  const onChangeFunction = (event) => {
    console.log (event.target.value);
  }
  const dogList = ["Finn","Ozzy"];
  const dogFunction = () => {
    var goldendoodleCount = 0;
    var goldenretriverCount = 0;
    dogList.forEach((dog) => {
      if (dog === "Finn") {
        goldendoodleCount++;
      } else {
        goldenretriverCount++;
      }
    })
  const dogMap = dogList.map((dog) => {
    return (
    <p>I have a dog named {dog}</p>);
  })
  return (
  <div className="dogMap">
    <p>I have {goldendoodleCount} {goldendoodleCount === 1 ? "golden doodle" : "golden doodles"}</p>
    <p>I have {goldenretriverCount} {goldenretriverCount === 1 ? "golden retreiver" : "golden reteivers"}</p>
    {dogMap}
  </div>
  )
  };
  const ellieList = ["from Yarmouth, Me","a sophomore","majoring in politics"];
  const ellieMap = ellieList.map((ellie) => {
    return (
      <p className= "ellie">I am {ellie}</p>
    )
  });
  const emily = {
    name:"emily",
    age: 19, 
    major: "sociology",
    activity: "dance"
  }
  const ally = {
    name: "ally",
    age: 19,
    major: "economics",
    activity: "play tennis"
  }
  const myFriends = [emily, ally];
  const friendMap = myFriends.map((friend) => {
    return(
      <div className = "friend">
        <h3>{friend.name}</h3>
       <p>
        {friend.name} is {friend.age} years old.
        She is a {friend.major} major.
        She loves to {friend.activity}!
      </p>
    </div>
    )
  })
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <title>hi</title>
          <link rel="stylesheet" href='style.css'></link>
        </header>
    <div> 
          <h1 className= "header"id="center">hi!</h1>
          <h2 id="center"><div>{nameComponent}</div></h2>
          <h3 id="center" className="button"><button onClick={buttonFunction}>yes</button></h3>
          <h3 id="center" className="button"><button onClick={buttonFunction2}>no</button></h3>
    </div>
    <input type="text" class="search" onChange={onChangeFunction}/>
        <div>
        <img src={butterfly} alt="butterfly"/>
        </div>
        <div className="dog-container">{dogFunction()}</div>
        <body>
          <h4 className="pink-text">I love:</h4>
          <li className="pink-text">coffee</li>
          <li className="pink-text">the beach</li>
          <li className="pink-text">my sister</li>
        <div className="friend-containter">{friendMap}</div>
        </body>
        <h4>more about me:</h4>
        <div id="center" className="ellie-containter">{ellieMap}</div>
        <a href="https://www.bates.edu/">i go to bates!</a>
        <div>
          <h3 id="center" className="button"><button onClick = {this.fetchData}>click me for a poem</button></h3>
          {this.renderPoem()}
        </div>
        </div>
      );
    };
    constructor(props){
      super(props)
      this.state = {
      data: null
      }
    }
    fetchData = () => {
      axios.get("https://poetrydb.org/random")
      .then((response) => {
        console.log(response);
        this.setState({
        data: response.data[0]
        })
      }).catch((error) => {
        console.log(error);
      })
    };
    renderPoem = () => {
      if (this.state.data) {
        return(
          <div>
            <div>Title: {this.state.data.title}</div>
            <div>Author: {this.state.data.author}</div>
            <div>
              {
                this.state.data.lines.map((line) => {
                  return(<div>{line}</div>);
                })
              }
            </div>
          </div>
        )
      } else {
        return(<div> </div>);
      }
    }
}
export default App;
