import {
  Info,
  Gift,
  PencilSimpleLine,
  ArrowSquareOut,
  House,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

export default function Infos() {
  return (
    <div className="flex flex-col container mx-auto py-6 font-primary-0 gap-4">
      <h1 className="text-center text-3xl font-bold">Lista de presentes</h1>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Info size={28} weight="bold" className="text-secondary" />
            <h3 className="font-bold text-xl">Como usar:</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:flex">
            <div className="flex flex-col p-4 justify-center items-center bg-primary-2 gap-4 rounded-lg lg:flex-1">
              <Gift size={32} weight="bold" />
              <span className="text-xs text-center font-bold">
                1. Escolha um presente
              </span>
            </div>
            <div className="flex flex-col p-4 justify-center items-center bg-primary-2 gap-4 rounded-lg lg:flex-1">
              <PencilSimpleLine size={32} weight="bold" />
              <span className="text-xs text-center font-bold">
                2. Assine o presente
              </span>
            </div>
            <div className="flex flex-col p-4 justify-center items-center bg-primary-2 gap-4 rounded-lg lg:flex-1">
              <ArrowSquareOut size={32} weight="bold" />
              <span className="text-xs text-center font-bold">
                3. Compre pelo link
              </span>
            </div>
            <div className="flex flex-col p-4 justify-center items-center bg-primary-2 gap-4 rounded-lg lg:flex-1">
              <House size={32} weight="bold" />
              <span className="text-xs text-center font-bold">
                4. Envie para nossa casa
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center gap-2">
            <MapPin size={28} weight="bold" className="text-secondary" />
            <h3 className="font-bold text-xl">Endereço para entrega:</h3>
          </div>
          <div className="bg-primary-2 rounded-lg p-4">
            <p className="text-sm">
              Condomínio Vila Verde, R. Pantanal, 150, bloco Jasmim, 1102 - Nova
              Parnamirim, Parnamirim/RN, 59150-015
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
