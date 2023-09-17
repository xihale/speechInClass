export default function 新的形式({pos,goNextPage}:page_t){

  var view = [
     "权力意味着责任", 
     "尝试"
  ];
  if(pos>=view.length) goNextPage();

  return <>
    <div className="flex justify-center items-center flex-col h-screen text-6xl">
      {view[pos]}
    </div>
  </>
}