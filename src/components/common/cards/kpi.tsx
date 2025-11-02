import { ArrowDown, ArrowUp } from "lucide-react";

interface KpiCardType {
  title: string;
  amount: string;
  profit : boolean
  description: {
    num: number;
    explain: string;
  };
}

export default function KpiCard({
  title,
  amount,
  profit ,
  description,
}: KpiCardType) {
  return (
    <section className=" w-[calc(25%-32px)] h-auto p-3  bg-white text-slate-400 dark:bg-dark-4 dark:text-dark-text border border-slate-200 shadow rounded-lg flex flex-col items-start">
      <h3 className=" text-base  mb-4 ">{title}</h3>
      <span className=" text-xl text-slate-800 dark:text-dark-text font-bold mb-3">
        {amount}
      </span>
      <p className=" text-sm flex w-full">
        <span className={`${profit ? 'text-green-400 bg-green-100 ' : 'text-red-400 bg-red-100 '}  flex items-center gap-1 w-fit p-0.5 rounded-sm mr-2 `}>
          {profit ? <ArrowUp  className=" size-3" /> : <ArrowDown  className=" size-3" />}
          {description.num.toPrecision(3)}%
        </span>
        {description.explain}
      </p>
    </section>
  );
}
