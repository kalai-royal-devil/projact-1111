import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userapi } from "./api";
import { autho, logout } from "./auth";

export default function Dashboard() {
 const[user,setuser] =  useState({
        name:"",email:"",localID:""
    })
    useEffect(()=>{
        if(autho()){
        userapi().then((response)=>{
           
setuser({
    name:response.data.users[0].displayName,
    email:response.data.users[0].email,
    localID:response.data.users[0].localId


})
        })}
    },[])
  const navigate = useNavigate();
const logoutuser=()=>{
    logout();
    navigate("/")
}
if(!autho()){
    return <Navigate to="/login" />
    }
    return (
        <div className="ttt">
        {/*nav--------------------------------------start*/ }
        < nav className = "navbar navbar-inverse navbar-fixed-top" >
            <div className="container-flued navbarr">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={"/"}>A.A.KALAINILAVAN</Link>
                </div>
          
                
                    <ul className="navbar-nav nav">
                        <li><Link to={"/"}><i className="glyphicon glyphicon-home"></i> Home</Link></li>
                      
                    </ul>
                    <ul className="navbar-nav nav navbar-right">
                              { !autho()? (<li><Link to={"/login"}><i className="glyphicon glyphicon-user"></i> Sign_in</Link></li>):null}
                              {autho()?(    <li><a class="nav-link"  onClick={logoutuser} style={{cursor:"pointer"}} ><i className="glyphicon glyphicon-log-out"></i> Logout</a></li>):null}
                              
                                { !autho()? ( <li><Link to={"/register"}><i className="glyphicon glyphicon-log-in"></i> Register</Link></li>):null}

                            </ul>
               
         </div>

             </nav >
        {/*nav-------------------------------------------end*/ }
        < main role = "main" className="dasdboard ccc " >
            <div className="col-md-12 text-center well cccc">

                <h3 >Dashboard page</h3>
                {user.name!="" && user.email!="" && user.localID!=""?
                (<div>
                <p className="text-bold " >Hi!! {user.name}<br /> your ID is:  {user.localID}</p>
                <p>your Email is  : {user.email}</p>
                </div>): <p>loading...</p>}
            </div>
    
</main >
         {/*footer -----------------------------------------------start */}
         <footer >
                    <div className="fline">

                        <div className="col-md-12 fline text-center"><Link className="aa" to={"/"}><h4>A.A.KALAINILAVAN</h4></Link><br /><p>EUSL/TC/IS/2020/COM/32</p></div>
                    </div>
                </footer>
</div>

)




}