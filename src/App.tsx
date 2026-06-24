import "./App.css";
import { useState } from "react";

function App() {
  const [isHidden, hideBlock] = useState(true);
  const [isHiddenTxt, hideText] = useState(false);
  const checked = new Set();
  const checkedIds = new Set();
  let [selectedObj, isSelected] = useState(null);

  const [list, addVal] = useState([
    {
      id: 1,
      name: "nina",
      isChecked: false,
    },
    { id: 2, name: "max", isChecked: false },
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

    isSelected(() => {
      let obj = list.find((item) => item.id === id);
      return obj;
    });
    console.log(selectedObj);
    if (e && !checkedIds.has(id)) {
      checkedIds.add(id);
      e.checked = true;
    }
    if (!e && checkedIds.has(id)) {
      checkedIds.delete(id);
      e.checked = false;
    }
    console.log(checkedIds);
  };

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
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
                  checked={item.isChecked}
                  name={"chbx" + index}
                  onChange={(e) => cbox(item.id, e.target)}
                />
                <button type="button" onClick={(e) => changeItem(item.id)}>
                  edit
                </button>
              </div>
            </div>
          </>
        </div>
      ))}
      <button onClick={deleteList}>delete</button>
    </div>
  );
}

export default App;
