"use client";

import 引入 from "./components/引入";
import 新的形式 from "./components/新的形式";
import 特性 from "./components/特性";
import 要求 from "./components/要求";
import 完 from "./components/完";

import { useEffect, useState } from "react";

var pages = [引入, 新的形式, 特性, 要求, 完];

export default function Page() {
  const [pos, setPos] = useState(0);
  const [pagePos, setPagePos] = useState(0);

  let goNextPage=()=>{
    setPagePos(pagePos + 1);
    setPos(0);
  }
  let goNext=()=>{
    setPos(pos + 1);
  }
  let goPrev=()=>{
    if(pos > 0) 
      setPos(pos - 1);
    else setPagePos(pagePos - 1);
  }

  // 添加 鼠标滚轮和键盘(pageDown/pageUp) 事件
  // 先检测 pos 再操作 pagePos
  useEffect(()=>{
    document.addEventListener("keydown", (e) => {
      if (e.key === "PageDown")
        goNext();
      else if (e.key === "PageUp")
        goPrev();
    })
    document.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) 
        goNext();
      else if (e.deltaY < 0) 
        goPrev();
    })
  })

  return (
    <div>
      {pages[pagePos<0?0:pagePos>=pages.length?pages.length-1:pagePos]({ pos, goNextPage })}
      <div className="absolute left-1 bottom-1 text-xl text-[#aaa]">
        <button
          onClick={() => {
            setPagePos(pagePos + 1);
          }}
        >
          next page
        </button>
        <button
          onClick={() => {
            setPos(pos + 1);
          }}
          className="block"
        >
          next content
        </button>
      </div>
    </div>
  );
}
