import "./App.css";
import { useState } from "react";
import { useRef } from 'react';

function App() {
  const hiddenBlocks = useRef(0)
  const [isHidden, hideBlock] = useState(true)
  const [isHiddenTxt, hideText] = useState(false)
  const newList = [];
  const checkedIds = new Set();


  const [list, addVal] = useState([
    {
      id: 1,
      name: "nina",
    },
    { id: 2, name: "max" },
  ]);

  const deleteList = () => {
    const idsToDelete = new Set(checkedIds);
    const newList = list.filter((item) => !idsToDelete.has(item.id));
    // list.forEach((obj) => {
    //   if (idsToDelete.includes(obj.id)) {
    //     newList.push(obj);
    //   }
    // });

    console.log(newList);
    addVal(newList);
  };

  const changeItem = (id) => {
    if(isHidden){
      hideBlock(false)
      hideText(true)
    }else{
      hideBlock(true)
      hideText(false)
    }
  };

  const cbox = (id, e) => {
    if (e) {
      checkedIds.add(id);
    } else {
      if (!e && checkedIds.has(id)) {
        checkedIds.delete(id);
      }
    }
  };

  return (
    <div>
      {list.map((item, index) => (
        <>
          <div>
            <span  hidden={isHiddenTxt} key={"name" + index} id={"input" + item.id}>
              {item.name} 
            </span>
             <input hidden={isHidden}
                type="text"
                name={"text" + index}
                onChange={() => console.log(event.target.value)}
              />

            <div>
              <input
                type="checkbox"
                name={"chbx" + index}
                onClick={(event) => cbox(item.id, event.target.checked)}
              />
              <button type="button" onClick={(event) => changeItem(item.id)}>
                edit
              </button>
            </div>
          </div>
        </>
      ))}
      <button onClick={deleteList}>delete</button>
    </div>
  );
}

export default App;
