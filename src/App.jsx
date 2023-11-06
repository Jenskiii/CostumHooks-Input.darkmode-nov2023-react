
import { useToggle } from "./useToggle";
import { useInputValue } from "./useInputValue";
import { useEffect } from "react";
function App() {
  // costum hooks
  const nameInput = useInputValue("");
  const [isDarkmode, toggleDarkmode] = useToggle(false);

  useEffect(() =>{
    console.log(nameInput.value)
  },[nameInput.value])

 
  return (
    <>
      <div
        style={{
          background: isDarkmode ? "#333" : "white",
          color: isDarkmode ? "white" : "#333",
        }}
      >
        <label htmlFor="">
          Name:
          <br />
          <input {...nameInput} />
        </label>
        <br />
        <br />
        <button onClick={toggleDarkmode}>Toggle Dark Mode</button>
      </div>
    </>
  );
}

 // costum hooks can also be put on the bottom of the page

// function useToggle(initialValue){
//   const [value, setValue] = useState(initialValue)

//   function toggle(){
//     setValue(currentValue => !currentValue)
//   }

//   return [value , toggle]
// }

export default App;
