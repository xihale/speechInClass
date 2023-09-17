
export default function 不要鼓掌({ pos, goNextPage }: page_t) {
  var view = [
    <>
      <div>演讲的自由 - 形式篇</div>
      <button className="mt-[20rem] text-2xl" onClick={goNextPage}>
        直接进入正题
      </button>
    </>,
    "鼓掌的原因",
    "真正的鼓掌",
  ];
  if(pos>=view.length) goNextPage();

  return (
    <>
      <div className="bg-black">
        <div className="flex justify-center items-center flex-col h-screen text-8xl text-white">
          {view[pos]}
        </div>
      </div>
    </>
  );
}
