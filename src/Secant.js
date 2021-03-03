import React from 'react';
import {Input , Button} from 'antd';
class Secant extends React.Component{

    state = { Equation : null , X0 : null ,X1 : null, E : null};

    getEquation = (Event) => {
        this.setState({Equation : Event.target.value})
    }
    getX0 = (Event) => {
        this.setState({X0 : Event.target.value})
    }
    getX1 = (Event) => {
        this.setState({X1 : Event.target.value})
    }
    getE = (Event) => {
        this.setState({E : Event.target.value})
    }
    cal_secant = (Event) =>{
        
    }

    render(){

        return(
            <div>

            
            <div>
             Secant Method
            </div>
            <div style = {{marginTop : '10px'}}>
                <Input placeholder = 'ใส่สมการ' onChange = {this.getEquation}/>
            </div>
            <div style = {{marginTop : '10px'}}>
                <span> <Input  placeholder = 'X0=0.00' onChange = {this.getX0} style = {{width : '100px'}}/>     </span>
                <span> <Input  placeholder = 'X1=0.00' onChange = {this.getX1} style = {{width : '100px'}}/>     </span>
                <span> <Input  placeholder = 'Error=0.00000' onChange = {this.getE} style = {{width : '100px'}}/>     </span>
            </div>
            <div style = {{marginTop : '10px'}}>
                <Button type = 'primary' onClick = {this.cal_onepoint} >Calculate</Button>
            </div>
            </div>
        );
    }
}

export default Secant;
 