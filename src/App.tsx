import "./App.css";
import { useState } from "react";

function App() {
  const listids = [];
  const newList = [];
  const [list, addVal] = useState([
    {
      id: 1,
      name: "nina",
    },
    { id: 2, name: "max" },
  ]);

  const deleteList = () => {
    const newList = list.filter((obj) => !listids.includes(obj.id));

    // list.forEach((obj) => {
    //   if (listids.includes(obj.id)) {
    //     newList.push(obj);
    //   }
    // });

    console.log(newList);
    addVal(newList);
  };

  const cbox = (id) => {
    listids.push(id);
  };

  return (
    <div>
      {list.map((item, index) => (
        <>
          <div>
            <span key={"name" + index}>{item.name}</span>
            <input
              type="checkbox"
              name={"chbx" + index}
              onClick={() => cbox(item.id)}
            />
          </div>
        </>
      ))}
      <button onClick={deleteList}>delete</button>
    </div>
  );
}

export default App;
