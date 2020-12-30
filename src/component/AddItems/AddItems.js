import React, { Component, Fragment } from 'react' ; 
import './AddItems.css' ; 
class AddItems extends Component {
    state = {
        name : '' , 
        age : '' ,
        class_btn_delete :'' 
    }

    handelchange = (e) =>{
       this.setState({ [e.target.id]:e.target.value }); 
    }

    hadelsubmit = (e) =>{
      e.preventDefault();
      this.props.additem(this.state) ; 
      this.setState({
          name : '' , 
          age : '' , 
      }) ;
    }
     handelclass = () =>{
        let mainclass ; 
        if(this.props.mylength === 0 )
         {mainclass = '' ;} 
        else if(this.props.mylength >  1 )  
        { mainclass ='active' ;}
        return mainclass ;  
    }

    render(){

        return(      
            <div className="AddItems">
                <input type="text" placeholder="Enter Your Name ... " id="name" onChange = {this.handelchange} value={this.state.name}/>
                <input type="number" placeholder="Enter Your Age ..."  id="age" onChange = {this.handelchange} value={this.state.age}/>
                <input type="submit" value="Add" className="btn-add " onClick = {this.hadelsubmit}  />
                <input type="submit" value="Delete All " className={"btn-delete " + this.handelclass()} onClick={this.props.deleteAll}/>
        
            </div>
            
        )
    }
}
export default AddItems ;