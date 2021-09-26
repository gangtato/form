import React from "react";
import Input from "./input";
import ShowErrors from "./showerror";

class FormValidasi extends React.Component {

    state = {
       email:'',
       password:'',
       errors:[]
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        let message = [];

        if(email.length === 0){
            message = [...message, "Email tidak boleh kosong"];
        }

        if(password.length === 0){
            message = [...message, "Password tidak boleh kosong"];
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            message = [...message, "Email tidak valid"]
        }

        if(password.length < 7){
            message = [...message, "Password terlalu pendek"]
        }

        if(message.length > 0){
            this.setState({
                errors: message
            })
        }else{
            alert(`
               email: ${this.state.email},
               password: ${this.state.password}
            `)
        }
        
        
    }

    render(){
        const style =  {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
        return(
        <div style={style}>
          {
            this.state.errors && <ShowErrors errors={this.state.errors}/>
          }
          
          <form onSubmit={this.handleSubmit}>
              <Input type="email" name="email" label="Email" 
              onChange={value => this.setState({ email: value})}/>

              <Input type="password" name="password" label="Password" 
              onChange={value => this.setState({ password: value})}/>
              <br/>
              <button type="submit">Submit</button>
          </form>
        </div>);
    }
}

export default FormValidasi;