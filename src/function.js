let equation = (x,Equation) => {
    let temp = eval(Equation) 
    return temp;
}

let fixed_fx = (Equation) => {
    Equation = Equation.replaceAll('^',"**");
    Equation = Equation.replaceAll('sin','Math.sin');
    Equation = Equation.replaceAll('cos','Math.cos');
    Equation = Equation.replaceAll('tan','Math.tan');
    Equation = Equation.replaceAll('sqrt','Math.sqrt');
    Equation = Equation.replaceAll(/\d(?=x)/g,'$&*');
    Equation = Equation.replaceAll('xx','x*x');
    

    return Equation;

}
export {equation , fixed_fx};