import React from 'react';
import {Input , Button} from 'antd';
class False_position extends React.Component{

    state= {Equation : null , XL : null , XR : null ,E : null};
    getEquation = (Event) =>{
        this.setState({Equation : Event.target.value})
    }
    getXL = (Event) =>{
        this.setState({XL : Event.target.value})
    }
    getXR =(Event) => {
        this.setState({XR : Event.target.value})
    }
    getE = (Event) => {
        this.setState({E : Event.target.value})
    }

    cal_false = (Event) => {
        
    }
    render(){
    
        return(
            <div>
            
            
            <div>
             False-Position Method
            </div>
            <div style = {{marginTop : '10px'}}>
                <Input placeholder = 'ใส่สมการ'  onChange = {this.getEquation} />
            
            
            </div>
            <div style = {{marginTop : '10px'}}>
                
                <span style = {{marginLeft : '10px'}}><Input placeholder = 'XL = 0.00' onChange = {this.getXL} style ={{width : '100px'}}/></span>
                <span style = {{marginLeft : '10px'}}> <Input placeholder = 'XR = 0.00 ' onChange = {this.getXR} style = {{width : '100px'}}/></span>
                <span style = {{marginLeft : '10px'}}> <Input placeholder = 'Error = 0.0000' onChange = {this.getE} style = {{width : '100px'}} /> </span>

            </div>
            <div style = {{marginTop : '10px' ,marginLeft : '10px'}}>
                <Button type = 'primary' onClick = {this.cal_false}> Calculate </Button>
            </div>
    

            </div>
        );
    }
}

export default False_position;
 
