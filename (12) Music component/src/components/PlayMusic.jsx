import musicImage from "../images/music1.png";
import "../styles/playMusic.css";
import iconPlay from "../assets/play.svg";
import iconPause from "../assets/pause.svg";
import iconPlayBack from "../assets/playBack.svg";
import iconPlayNext from "../assets/playNext.svg";
import { useState } from "react";

// only ui design 
// not play music when someone click play button...

const PlayMusic = () => {
  const [playMode, setPlayMode] = useState(false);
  const [timeline, setTimeline] = useState(0);

  const fun_Play = () => {
    setPlayMode(playMode ? false : true);
  };

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <main className="">
        <div className="my-6">
          <section className=" bg-white rounded-md p-1">
            <img className="rounded opacity-0" src={musicImage} alt="" />
          </section>
        </div>

        <div className="my-6">
          <h3 className="text-center m-1 font-bold text-3xl">[Song name]</h3>
          <p className="text-center m-1">[Artist name]</p>
        </div>

        <div className="">
          <section>
            <div
              className={`h-1 flex justify-right items-center bg-slate-300 my-4 before:block beforer:absolute before:inset-1 before:h-1 before:w-[${timeline}%] before:bg-teal-700 relative`}
              style={{}}></div>
          </section>
        </div>

        <div className="flex justify-center gap-6 my-2 items-center">
          <img
            className="--tool w-12 p-2 hover:bg-stone-900 bg-stone-950 rounded-full "
            src={iconPlayBack}
            alt=""
          />
          <img
            onClick={() => fun_Play()}
            className="--tool w-16 p-2 hover:bg-stone-900 bg-stone-950 rounded-full "
            src={playMode ? iconPause : iconPlay}
            alt=""
          />
          <img
            className="--tool w-12 p-2 hover:bg-stone-900 bg-stone-950 rounded-full "
            src={iconPlayNext}
            alt=""
          />
        </div>
      </main>
    </section>
  );
};

export default PlayMusic;

// img
// name
// des
// timeline
// time
// button
/// repeatPlay, Back, Play, Next, sufflePlay

//// suffle = random play
//// playlist play
//// repeat play

// favourite, mute, line Animation

// icons = suffle, playlist
