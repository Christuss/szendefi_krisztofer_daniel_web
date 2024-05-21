import { useState} from "react";


export default function  TablazatSor(props) {
    const [ertek, setErtek] = useState("");
    const [visszajelzes, setVisszajelzes] = useState("X");

    if (ertek === props.szo.magyar && visszajelzes === "X") {
        setVisszajelzes("✔");
    }

    return (
        <div className="sor m-2 border p-4">
          <div class="oszl">{props.szo.angol}</div>
          <div class="oszl"> <input className="form-control" placeholder={props.szo.magyar} value={ertek} onChange={(e) => {setErtek(e.target.value);}}>
          </input></div>
          <div class="oszl">{visszajelzes}</div>
        </div>
        
    )
}