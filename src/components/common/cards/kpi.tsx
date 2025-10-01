interface KpiCardType {
  title: string;
  amount: number;
  price: boolean;
  profit : boolean
  description: {
    num: number;
    explain: string;
  };
}

export default function KpiCard({
  title,
  price,
  amount,
  profit ,
  description,
}: KpiCardType) {
  return (
    <section className=" w-[calc(25%-32px)] h-auto p-3  bg-white border border-slate-200 shadow rounded-lg flex flex-col items-start">
      <h3 className=" text-base text-slate-400 mb-4 ">{title}</h3>
      <span className=" text-xl text-slate-800 font-bold mb-3">
        {price ? <>$ {amount.toPrecision(3)}</> : amount}
      </span>
      <p className=" text-slate-400 text-sm">
        <span className={`${profit ? 'text-green-400 bg-green-100 ' : 'text-red-400 bg-red-100 '}  p-0.5 rounded-sm mr-2 `}>
          {description.num.toPrecision(3)}%
        </span>
        {description.explain}
      </p>
    </section>
  );
}
