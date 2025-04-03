export default function Hashing() {
  return (
    <div className="">
        <h1 className="text-4xl text-center mt-20 text-blue-600">Hashing</h1>
    <p className="text-center mb-20 m-20">Hashing é uma técnica utilizada para transformar dados de entrada (como uma string ou número) em um valor de tamanho fixo, geralmente representado por um número ou sequência de caracteres. Essa transformação é feita por uma função chamada função hash.

O resultado da função hash é conhecido como hash code ou hash value. O principal objetivo do hashing é permitir buscas rápidas e eficientes, especialmente em estruturas de dados como tabelas hash.</p>
   <div className=" flex justify-center space-x-4 mb-8">
    <input
      type="number"
      placeholder="Digite um valor"
      className="px-4 py-2 border border-gray-300 rounded-lg"
    />
    <button
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
        Adicionar Nó
    </button>
    </div>
    </div>
  );
}
