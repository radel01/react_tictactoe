import {LISTA} from "./Adat.js";
import Elem from "./Elem.js";


export default function(props){
    return(
        <div className="jatekTer">
            <>
            {
                LISTA.map((elem,index)=>{
                    return (<Elem ertek = {elem} key={index}/>)
                })
            }
            </>
        </div>
    )
}