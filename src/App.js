
import React, { Component } from 'react' ; 
import AddItems from './component/AddItems/AddItems';
import ShowItems from './component/Showitems/ShowItems';
import './newApp.css';


class App extends Component{
  state ={
    users :[
      //{id:1 , name:'anas' , age : 18}
    ] 
  }
   deleteAll = () =>{
     this.setState({
       users:[]
     })
   }
   deleteitem = (id)=>{
    let users = this.state.users.filter( item => {
      return item.id !== id
    }) 
     this.setState({users});
  }
  additem = (item) =>{
    item.id = Math.random() ; 
    let myitems = this.state.users ; 
    myitems.push(item) ; 
    this.setState({users : myitems }) ; 
  }
  render(){

  return (
    <div className="App">
      <h2> List of Users </h2>
      <AddItems additem = {this.additem} deleteAll = {this.deleteAll} mylength = {this.state.users.length}  />
      <ShowItems users ={this.state.users} deleteitem={this.deleteitem} mylength = {this.state.users.length} />
    </div>
  );
}
}

export default App;
