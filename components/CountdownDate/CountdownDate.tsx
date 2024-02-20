"use client";
import { Confetti } from "@phosphor-icons/react";
import Countdown from "react-countdown";

export default function CountdownCustom() {
  const targetDate = "2024-08-17:00:00";
  const targetTime = new Date(targetDate);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <div className="container mx-auto flex flex-col xl:flex-row py-6 text-secondary-2 justify-center items-center gap-4">
          <h2 className="font-bold text-3xl xl:text-5xl">
            Chegou o grande dia!
          </h2>
          <Confetti size={52} weight="bold" />
        </div>
      );
    }
    return (
      <div className="container mx-auto text-secondary-2 flex flex-col lg:flex-row gap-2 lg:gap-4 items-center justify-center py-4">
        <div>Faltam apenas:</div>
        <div className="gap-2 font-bold flex text-3xl lg:text-4xl">
          <div suppressHydrationWarning>{`${days} dias`}</div>
          <div suppressHydrationWarning>{`${hours}h`}</div>
          <div suppressHydrationWarning>{`${minutes}m`}</div>
          <div suppressHydrationWarning>{`${seconds}s`}</div>
        </div>
        <div>para o grande dia!</div>
      </div>
    );
  };

  return (
    <div className="flex bg-secondary-0">
      <Countdown date={targetTime} renderer={renderer} />,
    </div>
  );
}
