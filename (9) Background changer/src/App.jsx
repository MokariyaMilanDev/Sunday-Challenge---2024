import { useState } from "react";

const bg_data = ["red", "orange", "green","teal", "pink","purple"];

function App() {
  const [background, setBackground] = useState("black");

  return (
    <main 
      style={{background:`${background}`}}
      className={`h-screen`}>

      <p className="text-center m-4 font-medium">Let's Change Background</p>
      
      <ul className="grid gap-3 justify-center items-center --bg-ul m-2 sm:m-10">
        {bg_data.map((e, i) => {
          return (
            <div
              key={i}
              onClick={()=> setBackground(bg_data[i])}
              className={`px-2 bg-white text-black py-1 flex justify-center items-center gap-2 cursor-pointer rounded`}>
              <span style={{background:`${e}`}} className="h-2 w-2 rounded"></span><li>{e}</li>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
