export default function List() {
    return (
      <div className="">
         <h1 className="text-4xl text-center mt-20 text-blue-600">Listas encadeadas</h1>
      <p className="text-start mb-16 m-20">Listas encadeadas são estruturas de dados compostas por nós que armazenam um valor e um ponteiro para o próximo nó, formando uma sequência encadeada. Elas podem ser simplesmente encadeadas (apontam para o próximo nó), duplamente encadeadas (apontam para o próximo e o anterior) ou circulares (o último nó aponta para o primeiro). Suas principais vantagens são o tamanho dinâmico e a eficiência na inserção e remoção de elementos, enquanto suas desvantagens incluem o acesso sequencial e o uso adicional de memória devido aos ponteiros. São amplamente utilizadas em implementações de filas, pilhas e listas de adjacência em grafos. </p>
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
  