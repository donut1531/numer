import React from 'react';
import {Input , Button } from 'antd';
class One_point extends React.Component{

    state = { Equation : null , X : null , E : null};

    getEquation = (Event) => {
        this.setState({Equation : Event.target.value})
    }
    getX = (Event) => {
        this.setState({X : Event.target.value})
    }
    getE = (Event) => {
        this.setState({E : Event.target.value})
    }
    cal_onepoint = (Event) =>{
        
    }
    render(){
      
        

        return(
            <div>

            
            <div>
             One-Point Iteration Method
            </div>

            <div style = {{marginTop : '10px'}}>
                <Input placeholder = 'ใส่สมการ' onChange = {this.getEquation}/>
            </div>
            <div style = {{marginTop : '10px'}}>
                <span> <Input  placeholder = 'X=0.00' onChange = {this.getX} style = {{width : '100px'}}/>     </span>
                <span> <Input  placeholder = 'Error=0.00000' onChange = {this.getE} style = {{width : '100px'}}/>     </span>
            </div>
            <div style = {{marginTop : '10px'}}>
                <Button type = 'primary' onClick = {this.cal_onepoint} >Calculate</Button>
            </div>
            </div>
        );
    }
}

export default One_point;
 