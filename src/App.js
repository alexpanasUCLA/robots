import React,{Component} from 'react';

import './App.css';
import Cardlist from './components/Cardlist/Cardlist';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsterNames:[],
      searchValue:"",
    }
  }

 

  async componentDidMount(){
    const monsterNames = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await monsterNames.json();
    this.setState({monsterNames:data})
    
  }

  render() {

    const {monsterNames,searchValue} = this.state; 
    const filteredMonsters = monsterNames.filter(monster=>
       monster.name.toLowerCase().includes(searchValue.toLowerCase()))
    
  return (
    <div className="App">
      <h3 className="AppTitle">Robot Family</h3>
      <input className="InputStyle" type="search" placeholder="robot search"
      onChange={e=>this.setState({searchValue:e.target.value})}/>
    
      <header className="App-header">
        <Cardlist monsters={filteredMonsters}/>
      </header>
    
    </div>
  );
}}

export default App;
