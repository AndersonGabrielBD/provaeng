export const HashingUniversal = () => {
    return(
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Hashing Universal</h2>
          <p className='mb-20'>O hashing universal utiliza um conjunto de funções hash aleatórias para reduzir a probabilidade de colisões, garantindo que, para qualquer conjunto de chaves, a função hash escolhida tenha baixa taxa de colisão. Essa abordagem é eficiente para cenários onde as chaves não são previamente conhecidas, proporcionando uma distribuição equilibrada e evitando padrões que possam prejudicar o desempenho.


    
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