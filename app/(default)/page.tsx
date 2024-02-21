import Countdown from "@/components/Countdown/Countdown";
import CountdownDate from "@/components/CountdownDate/CountdownDate";
import GiftList from "@/components/GiftList/GiftList";
import Infos from "@/components/Infos/Infos";
import PixPayment from "@/components/PixPayment/PixPayment";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Home() {
  return (
    <main>
      <Countdown />
      {/* <CountdownDate /> */}
      <Infos />
      <PixPayment />
      <GiftList />
    </main>
  );
}
