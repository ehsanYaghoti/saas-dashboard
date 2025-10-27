import React from "react";

export function statusTokens(rate: number) {
  switch (rate) {
    case 1:
      return { title: "Very Bad", color: "bg-red-500" };
    case 2:
      return { title: "Bad", color: "bg-[#EB8C33]" };
    case 3:
      return { title: "Good", color: "bg-[#73F1DC]" };
    case 4:
      return { title: "Very Good", color: "bg-[#41BFAA]" };
    case 5:
      return { title: "Perfect", color: "bg-primary-1" };
    default:
      return { title: "NotValidate", color: "bg-[#E1E7EE]" };
  }
}


export function ratingSectionGenerator(rate : number) : React.ReactNode {
    const elements : React.ReactNode[] = [];

    for(let i = 1; i <= rate; i++){
       elements.push(React.createElement("span" , {className : `w-[20px] h-2 rounded-full ${statusTokens(rate).color}`}))
    }

    for(let i = 1; i <= 5 - rate; i++){
       elements.push(React.createElement("span" , {className : 'w-[20px] h-2 rounded-full bg-[#E1E7EE]'}))
    }

    return elements
}
