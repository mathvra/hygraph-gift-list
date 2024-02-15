import Countdown from "@/components/Countdown/Countdown";
import GiftList from "@/components/GiftList/GiftList";
import Infos from "@/components/Infos/Infos";
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
      <Infos />
      <GiftList />
    </main>
  );
}
