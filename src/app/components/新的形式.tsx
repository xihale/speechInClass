export default function 新的形式({pos, goNextPage}:page_t){

  var view = [
     "使用前端技术解决需求", 
     "为了目的而服务",
  ];
  if(pos>=view.length) goNextPage();

  return <>
    <div className="flex justify-center items-center flex-col h-screen text-6xl">
      {view[pos]}
    </div>
  </>
}