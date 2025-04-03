export const HashingEncadeado = () => {
    return(
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Hashing Encadeado</h2>
          <p className='mb-20'>O hashing encadeado resolve colisões usando listas encadeadas. Cada posição na tabela hash contém um ponteiro para uma lista de elementos que compartilham o mesmo valor hash. Quando ocorre uma colisão, o novo elemento é simplesmente adicionado ao final da lista. Essa técnica é eficiente quando a tabela tem um bom fator de carga, mas pode ter desempenho degradado se muitas colisões ocorrerem, formando listas longas.
    
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