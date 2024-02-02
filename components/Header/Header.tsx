import { House, Info } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary-0 pt-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Button size={"icon"} variant={"defaultInverted"} asChild>
            <Link href="/">
              <House weight="bold" />
            </Link>
          </Button>
          <Button variant={"defaultInverted"} asChild>
            <Link href="/mais-informacoes">
              <Info weight="bold" />
              Mais informações
            </Link>
          </Button>
        </div>
        <div className="px-10 py-20 flex justify-center">
          <Image
            src={"/hero-logo.svg"}
            alt={""}
            width={200}
            height={200}
            className="w-full h-auto max-w-72"
          ></Image>
        </div>
      </div>
    </header>
  );
}
