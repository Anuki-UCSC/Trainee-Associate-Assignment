import React,{Component} from "react";
import './loginPage.css';
// import { useState } from 'react';
import axios from 'axios';

export default class Insert extends Component{
    constructor(props){
        super(props);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);   
        this.onSubmit=this.onSubmit.bind(this);
       

        this.state={
            email:'',
           password:'',
           error:'',
        }
    }

    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }

    
    
    onSubmit(e){
       e.preventDefault();
        const obj={
            email:this.state.email,
            password:this.state.password,
        };
        console.log(obj);
        axios.post("http://localhost/Trainee-Associate-Assignment/bizlogic/login.php",obj)
    .then(res=>{
        console.log(res);
        console.log(res.status);
        if(res.status===201){

            window.sessionStorage.setItem("isLoggin","login");
            window.location.href="/home";

        }else if(res.status===200){
            this.setState({
                error:"Invalid email or password!"
            })
            // window.location.href="/";
        }
     
    }).catch(
        // err=>{
        //     this.setState({
        //         error:true
        //     });

        // }
    )
       
      //  .catch(err=>alert(err));
        
       
    }

    

    render(){
        return(

            <div class="login">
            <div class="container">
            <h1 class="title">Welcome</h1> 
            <div class="wrapper fadeInDown">
            <form onSubmit={this.onSubmit}>
            
                <div class="cont">
                    
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
                </div>
                { this.state.error? <p class="errorclass">{this.state.error}</p>:<div></div>}
                <button type="submit" 
                    class="btn btn-primary" 
                    >Sign in</button>
                </div>
            </form>
           
            </div>
            </div>
            
        </div>
        )
    }
}