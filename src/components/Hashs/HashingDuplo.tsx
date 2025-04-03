export const HashingDuplo = () => {
    return(
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Hashing Duplo</h2>
      <p className='mb-20'>O hashing duplo combina duas funções hash para resolver colisões. Quando ocorre uma colisão, uma segunda função hash é usada para determinar o próximo passo na busca por uma posição livre. Isso ajuda a reduzir problemas de clustering que surgem com técnicas mais simples, como a sondagem linear, melhorando o desempenho e a dispersão dos dados na tabela.

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