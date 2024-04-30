export default function Infos() {
  return (
    <div className="flex flex-col container mx-auto py-6 font-primary-0 gap-4">
      <h1 className="text-center text-2xl font-bold">Lista de presentes</h1>
      <div className="flex flex-col gap-6 bg-primary-2 rounded-lg p-4">
        <div>
          <h3 className="font-bold">Como usar:</h3>
          <p>
            Todos os presentes contém um link que te encaminha para o site da
            loja, basta realizar a compra da forma que desejar e colocar o nosso
            endereço para a entrega
          </p>
        </div>
        <div>
          <h3 className="font-bold">Endereço para entrega:</h3>
          <p>
            Condomínio Vila Verde, R. Pantanal, 150, bloco Jasmim, 1102 - Nova
            Parnamirim, Parnamirim/RN, 59150-015
          </p>
        </div>
      </div>
    </div>
  );
}
