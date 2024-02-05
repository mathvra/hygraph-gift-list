import { ArrowUp, Info } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary py-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <Button variant={"secondaryInverted"} asChild>
              <Link href="/mais-informacoes">
                <Info weight="bold" />
                Mais informações
              </Link>
            </Button>
            <Button size={"icon"} variant={"secondaryInverted"} asChild>
              <Link href="/">
                <ArrowUp weight="bold" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-neutral text-neutral-foreground">
        <div className="container mx-auto flex justify-center py-4 text-xs">
          Criado e desenvolvido por NODA ■
        </div>
      </div>
    </footer>
  );
}
