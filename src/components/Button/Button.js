import React, {Component} from 'react';
import './Button.css'


    function Button (props){

        let handlerClick = (i) =>{

            props.myHandler(i)



        };
        let AddValue = () =>{

            props.AddVal()



        };
        let resetCount = () =>{

            props.resetConter()

        };



    return(
        <div >
            <button   type="button" class="btn btn-warning m-10 "  onClick={handlerClick.bind(null,1)} > ADD1 </button>
            <button   type="button" class="btn btn-warning m-10"  onClick={handlerClick.bind(null,-1)} > minus1</button>
            <button   type="button" class="btn btn-warning m-10" onClick={handlerClick.bind(null,100)} > ADD100 </button>
            <button   type="button" class="btn btn-warning m-10" onClick={handlerClick.bind(null,-100)} > minus100</button>
            <button  type="button" class="btn btn-success mb-10" onClick={AddValue} > addValue</button>
            <button   type="button" class="btn btn-danger m-10" onClick={resetCount} > Reset</button>

        </div>

    );
}


export default Button;

