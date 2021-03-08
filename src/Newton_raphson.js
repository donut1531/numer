import React from 'react';
import {Input , Button} from 'antd';
import {equation , fixed_fx} from '/.function';
class Newton_raphson extends React.Component{

    state = { Equation : '' , X : '' , E : '' ,status : null};

    getEquation = (Event) => {
        this.setState({Equation : Event.target.value})
    }
    getX = (Event) => {
        this.setState({X : Event.target.value})
    }
    getE = (Event) => {
        this.setState({E : Event.target.value})
    }
    cal_newton = (Event) =>{
        if(Equation === '' || X === '' || E === ''){
            this.setState({status : <div style = {{color : 'red'}}> โปรดกรอกข้อมูลให้ครบถ้วน </div>})
            return;
        }
        try{
            let Equation = this.state.Equation;
            Equation = equation(Equation);
            equation(2,Equation);//debug
    
            let X = parseFloat(this.state.X);
            let E = parseFloat(this.state.E);
    
            let Error = 99999;
            let i = 1;
            let arr = [];
            let x1 = 0;
    
            while(Error > E){
                X0 = equation(X,Equation);
                
            }
        }
        catch(error){

        }
        
        

    }

    render(){

        return(
            <div>

            
            <div>
             Newton_Raphson Method
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

export default Newton_raphson;
 