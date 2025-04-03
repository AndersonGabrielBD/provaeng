export const SkipLists = () => {
    return(
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Skip Lists</h2>
      <p className='mb-20'>As Skip Lists são estruturas de dados que combinam listas encadeadas ordenadas com um sistema de saltos para acelerar as operações de busca, inserção e remoção. Elas utilizam múltiplas camadas de listas encadeadas, onde cada camada superior "pula" vários elementos da camada inferior, permitindo acessos rápidos em uma média de tempo logarítmica. Isso torna as Skip Lists uma alternativa eficiente às árvores balanceadas, especialmente em aplicações onde a inserção e a remoção de elementos ocorrem com frequência.

        </p>
      {/* Input e botão para adicionar um nó */}
      <div className="flex justify-center space-x-4 mb-8">
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
    )
}