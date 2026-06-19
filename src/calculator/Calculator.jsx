import React,{useState,useEffect} from "react";
import './Calculator.css'
function Calculator(){
    const [value, setValue] = useState(() => {
    try {
        const saved = localStorage.getItem("val");
        return saved ? JSON.parse(saved) : '';
    } catch (err) {
        console.error("Failed", err);
        return '';
    }
});
useEffect(()=>{
        localStorage.setItem("val",JSON.stringify(value));
    },[value])
   
    return(
        <div className="calculator">
            <div  className="btn-parrent" id="inp-div">
            <input className="inp-calc" value={value} readOnly/>
            </div>
            <div className="btn-parrent">
            <button className="btn-calc" onClick={()=>setValue('')}>Ac</button>
            <button className="btn-calc" onClick={()=>setValue(value.slice(0,-1))}>DE</button>
            <button className="btn-calc" value='.' onClick={(e)=>setValue(value+e.target.value)}>.</button>
            <button className="btn-calc" value='/' onClick={(e)=>setValue(value+e.target.value)}>/</button>
            </div>
            <div className="btn-parrent">
            <button className="btn-calc" value='7'onClick={(e)=>setValue(value+e.target.value)}>7</button>
            <button className="btn-calc" value='8'onClick={(e)=>setValue(value+e.target.value)}>8</button>
            <button className="btn-calc" value='9'onClick={(e)=>setValue(value+e.target.value)}>9</button>
            <button className="btn-calc" value='*'onClick={(e)=>setValue(value+e.target.value)}>*</button>
            </div>
            <div className="btn-parrent">
            <button className="btn-calc" value='4' onClick={(e)=>setValue(value+e.target.value)}>4</button>
            <button className="btn-calc" value='5'onClick={(e)=>setValue(value+e.target.value)}>5</button>
            <button className="btn-calc" value='6'onClick={(e)=>setValue(value+e.target.value)}>6</button>
            <button className="btn-calc" value='+'onClick={(e)=>setValue(value+e.target.value)}>+</button>
            </div>
            <div className="btn-parrent">
            <button className="btn-calc" value='1'onClick={(e)=>setValue(value+e.target.value)}>1</button>
            <button className="btn-calc" value='2'onClick={(e)=>setValue(value+e.target.value)}>2</button>
            <button className="btn-calc"value='3' onClick={(e)=>setValue(value+e.target.value)}  >3</button>
            <button className="btn-calc" value='-'onClick={(e)=>setValue(value+e.target.value)}  >-</button>
            </div>
            <div className="btn-parrent">
            <button className="btn-calc" value='00'onClick={(e)=>setValue(value+e.target.value)}>00</button>
            <button className="btn-calc" value='0'onClick={(e)=>setValue(value+e.target.value)}>0</button>
            <button className="btn-calc" id="eq-calc" onClick={()=>setValue(eval(value))}>=</button>
            </div>

        </div>
    )

}
export default Calculator;