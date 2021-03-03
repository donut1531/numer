import React from 'react';
import {Input , Button} from 'antd';
import {equation , fixed_fx} from './function';
class Bisection extends React.Component{
    state = {
        
    Equation : null, XL : null, XR : null , E : null,e : null
        
    };

    getEquation = (Event) =>{
        this.setState({Equation : Event.target.value})
    }

    getXL = (Event) =>{
        this.setState({XL : Event.target.value})
    }
    getXR = (Event) =>{
        this.setState({XR : Event.target.value})
    }
    getE = (Event) =>{
        this.setState({E : Event.target.value})
    }
    
    cal_bisection = (Event) =>{
        
        if(this.state.Equation === ''){
            <div style = {{color : 'red'}}> โปรดกรอกข้อมูลให้ครบถ้วย </div>

            return;
        }

        try {

            let Equation = parseFloat(this.state.Equation);
            let XL = parseFloat(this.state.XL);
            let XR = parseFloat(this.state.XR);
            let E = parseFloat(this.state.E);

            let XM = (XL + XR)/2;
            let num = equation(XM,Equation)*equation(XR,Equation);

            let er = 999999;
            let new_XM = 0;

            let arr = [];
            let i = 1;

            if(num > 0){

                XR = XM;
            }
            else if(num < 0)
        }
            

        
       
    }
   
    render(){

        return(
            <div>
             <div>
             Bisection Method
             </div>
             <div style = {{
                 marginTop : '10px'
             }}>
              <Input placeholder = 'ใส่สมการ' onChange = {this.getEquation}/>   
             </div>
             <div style = {{
                 marginTop : '10px'
                 
             }}>
                 <span style = {{marginLeft : '10px'}}><Input placeholder = 'XL = 0.0' onChange = {this.getXL}style = {{width : '100px'}} /></span>
                 <span style = {{marginLeft : '10px'}}><Input placeholder = 'XR = 0.0' onChange = {this.getXR}style = {{width : '100px'}}/></span>
                 <span style = {{marginLeft : '10px'}}><Input placeholder = 'Error = 0.000' onChange = {this.getE}style = {{width : '100px'}} /></span>
             </div>
             <div style = {{
                 marginTop : '10px'
                 ,marginLeft : '10px'
             }}>
                 <Button type = 'primary' onClick = {this.cal_bisection}> Calculate </Button>
             </div>
            </div>
        );
    }
}

export default Bisection;
 
