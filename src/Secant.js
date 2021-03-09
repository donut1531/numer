import React from 'react';
import {Input , Button} from 'antd';
import {equation , fixed_fx} from './function';

class Secant extends React.Component{

    state = { Equation : '' , X0 : '' ,X1 : '', E : '' , status : null};

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
        this.setState({status : null});
        if(this.state.Equation === '' || this.state.X0 === '' || this.state.X1 === '' || this.state.E === ''){
            this.setState({status : <div style = {{color : 'red'}}> โปรดกรอกข้อมูลให้ครบถ้วน </div>})
            return;
        }

        try{
           
         let   Equation = this.state.Equation;
         Equation = fixed_fx(Equation);
         equation(2,Equation); // debug
         let   X0 = parseFloat(this.state.X0);
         let  X1 = parseFloat(this.state.X1);
         let  E  = parseFloat(this.state.E);

         let  FX0 = equation(X0,Equation);
         let  FX1 = equation(X1,Equation);
        /*console.log(FX0);
         console.log(FX1);*/
         let X = 0;
         
         let i = 1;
        
         let arr = [];
         let Error = 999999;

         while(Error > E){
           
          
            X = X1 - (FX1*(X0 - X1) / (FX0 - FX1));
            
            Error = Math.abs((X - X1)/X);
            
            FX0 = FX1;
            X0 = X1;
            X1 = X;
            FX1 = equation(X1,Equation);

            
            arr.push(<div style = {{fontSize : '25px' , display : 'flex' }}>
            <span style = {{ width : '60%' , textAlign : 'left'}}> Iteration {i} : x is {X}</span>
            <span > Error : {Error.toFixed(15)}</span>
            </div>);
            
            i++;
         }
         arr.push(<div style = {{fontSize:'40px' , fontWeight : 'bold',textAlign : 'left'}}> Result of x is {X}</div>);
            this.setState({arr:arr});

            
            
            

        }
        catch(error){
            this.setState({status : <div style = {{color :  'red'}}> ใส่ฟังก์ชั่นไม่ถูกต้อง</div>});
        }

    }

    render(){

        return(
            <div>

            
            <div>
             Secant Method
            </div>
            <div style = {{marginTop : '10px'}}>
                <Input placeholder = 'ใส่สมการ' onChange = {this.getEquation}/>
                {this.state.status}
            </div>
            <div style = {{marginTop : '10px'}}>
                <span> <Input  placeholder = 'X0=0.00' onChange = {this.getX0} style = {{width : '100px'}}/>     </span>
                <span> <Input  placeholder = 'X1=0.00' onChange = {this.getX1} style = {{width : '100px'}}/>     </span>
                <span> <Input  placeholder = 'Error=0.00000' onChange = {this.getE} style = {{width : '100px'}}/>     </span>
            </div>
            <div style = {{marginTop : '10px'}}>
                <Button type = 'primary' onClick = {this.cal_secant} >Calculate</Button>
                {this.state.arr}
            </div>
            </div>
        );
    }
}

export default Secant;
 