import MoreInformationItem from "@/components/MoreInformationItem/MoreInformationItem";
import { Flower, Wine } from "@phosphor-icons/react/dist/ssr";

export default function MoreInformation() {
  return (
    <main className="container mx-auto">
      <div className="flex flex-col gap-6 py-4">
        <h1 className="text-center text-3xl font-bold">Mais informações</h1>
        <div className="flex flex-col xl:flex-row gap-12">
          <MoreInformationItem
            title={"Cerimônia"}
            iconTitle={
              <Flower className="fill-secondary" size={24} weight="bold" />
            }
            description={
              "Gostaríamos muito de contar com a presença de todos vocês no momento em que nossa união será abençoada diante de Deus! Contamos com vocês!"
            }
            imageUrl={"/church.png"}
            addressTitle={"Paróquia de Santo Afonso Maria de Ligório"}
            address={
              "Av. Santos Dumont, s/n, Conj. Mirassol, Capim Macio, Natal/RN, CEP: 59078-200"
            }
            addressUrl={"https://maps.app.goo.gl/9qqgAJgHMPuJiDJYA"}
          />

          <MoreInformationItem
            title={"Recepção"}
            iconTitle={
              <Wine size={24} className="fill-secondary" weight="bold" />
            }
            description={
              "Convidamos você também para recepção após cerimônia religiosa. Vamos festejar juntos!"
            }
            imageUrl={"/party.png"}
            addressTitle={"Salão de Festas do Cond. Green Club I"}
            address={
              "Av. das Américas, 1722 Parque das Nações, Parnamirim/RN CEP: 59158-150"
            }
            addressUrl={"https://maps.app.goo.gl/uMM8VMoR6mNihx8J9"}
          />
        </div>
      </div>
    </main>
  );
}
