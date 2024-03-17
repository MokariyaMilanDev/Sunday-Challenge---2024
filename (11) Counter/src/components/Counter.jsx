import { useState } from "react";
import "../styles/count.css";
import plusIcon from "../assets/plus.svg";
import minusIcon from '../assets/minus.svg';


function Count() {

  const [count, setCount] = useState(0);

  return (
    <>
      <p className="--heading">Let's Count</p>
      <section className="--count-section">
        <main className="--count-container">
          <div className="--btn --btn-left" onClick={() => setCount(count - 1)}>
            <img src={minusIcon} alt="ADD" />
          </div>
          <div className="--count-main">
            <span>{count - 1}</span>
            <span>{count}</span>
            <span>{count + 1}</span>
          </div>
          <div className="--btn --btn-right">
            <img src={plusIcon} alt="MIN" onClick={() => setCount(count + 1)} />
          </div>
        </main>
      </section>
      <div className="--btn-reset" onClick={()=> setCount(0)}>
        <button>Reset</button>
      </div>
    </>
  );
}

export default Count
