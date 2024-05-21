import TablazatSor from "./TablazatSor";

export default function Tablazat(props) {
  return (
    <div className="container">
      <div className=" container text-center border">
        <div className="sor elt">
          <div class="oszl">ANGOL</div>
          <div class="oszl">MAGYAR</div>
          <div class="oszl">visszajelzés</div>
        </div>
        {props.szavak.map((szo) => 
            <TablazatSor szo = {szo}/>
        )}
      </div>
    </div>
  );
}
