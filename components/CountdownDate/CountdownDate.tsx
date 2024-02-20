"use client";
import Countdown from "react-countdown";

export default function CountdownCustom() {
  const targetDate = "2024-08-17:00:00";
  const targetTime = new Date(targetDate).getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <h1>Chegou o grande dia!</h1>;
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
    <div className="bg-secondary-0">
      <Countdown date={targetTime} renderer={renderer} />,
    </div>
  );
}
