import "./App.css";
import { useState } from "react";

function App() {
  const [isHidden, hideBlock] = useState(true);
  const [isHiddenTxt, hideText] = useState(false);
  const checkedIds = new Set();

  let [list, addVal] = useState([
    {
      id: 1,
      name: "nina",
    },
    { id: 2, name: "max" },
  ]);

  const deleteList = () => {
    const idsToDelete = new Set(checkedIds);
    list = list.filter((item) => !idsToDelete.has(item.id));
    // list.forEach((obj) => {
    //   if (idsToDelete.includes(obj.id)) {
    //     newList.push(obj);
    //   }
    // });

    console.log("checkedid: ", checkedIds);
    console.log("gefilterte liste: ", list);
    addVal(list);
    console.log("endliste: ", list);
    // idsToDelete.clear()
  };

  const changeItem = (id) => {
    if (isHidden) {
      hideBlock(false);
      hideText(true);
    } else {
      hideBlock(true);
      hideText(false);
    }
  };

  const cbox = (id, e) => {
    if (e && !checkedIds.has(id)) {
      checkedIds.add(id);
    }
    if (!e && checkedIds.has(id)) {
      checkedIds.delete(id);
    }
    console.log(checkedIds);
  };

  return (
    <div>
      {list.map((item, index) => (
        <>
          <div>
            <span
              hidden={isHiddenTxt}
              key={"name" + index}
              id={"input" + item.id}
            >
              {item.name}
            </span>
            <input hidden={isHidden} type="text" name={"text" + index} />

            <div>
              <input
                type="checkbox"
                name={"chbx" + index}
                
                onChange={(event) => cbox(item.id, event.target.checked)}
              />
              <button type="button" onClick={(e) => changeItem(item.id)}>
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
