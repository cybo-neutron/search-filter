import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const notes = [
    "this",
    "that",
    "hey mama",
    "carry on",
    "hey dude",
    "tit tat",
    "think",
    "thank",
    "carrf",
  ];

  const searchRef = useRef();
  const [search, setSearch] = useState("");
  function handleChange(e) {
    // const newArr = notes.filter((elem) => {
    //   return elem.startsWith(e.target.value);
    // });
    // // console.log(e.target.value);
    // console.log(newArr);

    setSearch(e.target.value);
  }
  return (
    <div className="min-h-screen bg-zinc-800  text-white w-screen">
      <div className="w-8/12 relative mx-auto pt-5">
        <div className="">
          <input
            type="text"
            className="w-full bg-transparent border-b-[1px] outline-none"
            onChange={handleChange}
            // value={search}
          />
        </div>
        {/* <div className="w-full bg-slate-400 bg-opacity-70 flex flex-col z-10 absolute "></div> */}
      </div>
      <div className="pl-5">
        {notes
          .filter((elem) => {
            return elem.startsWith(search);
          })
          .map((elem) => {
            return <p>{elem}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
