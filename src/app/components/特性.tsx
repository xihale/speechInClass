import Mind from "./mind"

export default function 新的形式({pos, goNextPage}:page_t){

  var view = [
    "为什么这么做?", 
    <Mind key={0} />,
    <iframe key={1} className="w-[90vw] h-[80vh]" src="https://www.bilibili.com"></iframe>
  ];
  if(pos>=view.length) goNextPage();

  return <>
    <div className="flex justify-center items-center flex-col h-screen text-6xl">
      {view[pos]}
    </div>
  </>
}