export const HashingSondagem = () => {
    return(
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Hashing Por Sondagem</h2>
          <p className='mb-20'>O hashing por sondagem resolve colisões procurando por uma posição livre na tabela através de técnicas de sondagem, como sondagem linear, quadrática ou dupla. Em vez de usar listas encadeadas, ele armazena diretamente os elementos na própria tabela hash. A eficiência depende da estratégia de sondagem escolhida e da carga da tabela, já que colisões repetidas podem provocar clusters e degradação do desempenho.


    
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