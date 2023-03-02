import { useEffect, useState } from "react";
import axios from "axios";
function Axiospage(props) {
  document.title=props.name;
  const [val, setVal] = useState(1);
  const [name, setName] = useState('Name');
  useEffect(() => {
    alert('Hello');
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
      console.log(res.data.name);
      setName(res.data.name);
    }
    getData();
  }, [val]);
  return (
    <div className="Axiospage">
      Hello I selected {name}
      <select  onChange={(e) => { return setVal(e.target.value); }}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </div>
  );
}

export default Axiospage;
