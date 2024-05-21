export default function Szavak(props) {




  return (
    <div className="">
      <select className="form-select w-25 m-3" onChange={(e) => console.log(e.target.value)}>
        <option>Válassz témát!</option>
        {props.temak.map((tema) => 
          <option>{tema.temanev}</option>
        )}
      </select>
    </div>
  );
}
