import GiftList from "@/components/GiftList/GiftList";
import Infos from "@/components/Infos/Infos";
import PixPayment from "@/components/PixPayment/PixPayment";
import type { Viewport } from "next";
import dynamic from "next/dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const CountdownNoSSR = dynamic(
  () => import("@/components/Countdown/Countdown"),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <CountdownNoSSR />
      <Infos />
      <PixPayment />
      <GiftList />
    </main>
  );
}
