import React from 'react' ; 
import './ShowItems.css';
let ShowItems = (props) =>{
    const {users , deleteitem} = props ; 
    const listItems = users.map( user => {
    return(
    <div key={Math.random()}>
    <span >{user.name}</span> 
    <span >{user.age}</span>
    <span  onClick={()=>deleteitem(user.id)}>Delete</span>
    </div>
    )
    }) ;
    const {mylength}=props ;
    const handelclass = (mylength)=>{
        let mm ;
        if(mylength === 0 )
        mm =  'active' ; 
        else
        mm =  '' ; 
        return mm ; 
    }

    return(
       <div className="ShowItems">
           <p className ={"msg "+ handelclass(mylength)} > No Users  </p>
           <p className="user_name">UserName</p>
           <p className="user_name ">Age</p>
           <p className="user_name">Delete</p>
           {listItems}
        </div>
       
    )
}
export default ShowItems ; 