export default function Ball() {
  return (
    <div
      className=" w-12 h-12 rounded-full absolute top-5 left-4 bg-radial-[at_60%_15%] from-[#DD7E27]  to-[#985515]   to-65% flex items-center justify-center
                    after:content-[''] after:absolute after:w-16 after:h-16 after:rounded-full after:bg-white/10 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:blur-lg
                    overflow-hidden  drop-shadow-[0px_0px_20px_#000000]
                  "
    >
      <span className=" bg-white w-[7px] h-[9px] -rotate-[50deg]  shadow shadow-white rounded-full relative left-2 bottom-3 "></span>
      <span className=" w-[60px] h-[60px]  absolute rounded-full   border-double border-[3px] border-[#CE894A] translate-x-[20px] rotate-z-90 "></span>
      <span className=" w-[60px] h-[60px]  absolute rounded-full   border-double border-[3px] border-[#CE894A] -translate-y-[21px] "></span>
    </div>
  );
}
