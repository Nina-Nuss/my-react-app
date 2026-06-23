import "./App.css";
import { useState } from "react";

function App() {
  
  const [list, addVal] = useState([
    {
      id: 1,
      name: "nina",
    },
    { id: 2, name: "max" },
  ]);

  const filteredItems = (id) => {
      const liste = list.filter((val) => val.id !== id)
      addVal(liste)
      console.log(liste)
  };

  return (
    <div>
      {list.map((item, index) => (
        <> 
        <div >
          <span key={"name" + index}>{item.name}</span>
          <input
          
            type="checkbox"
            name={"chbx" + index}
            onClick={() => filteredItems(item.id)}
          />
        </div>
        </>
      ))}
    </div>
  );
}

export default App;
