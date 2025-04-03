export const HashingPerfeito = () => {
    return(
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Hashing Perfeito</h2>
          <p className='mb-20'>O hashing perfeito é uma técnica que busca eliminar colisões completamente, garantindo que cada chave tenha um endereço único na tabela hash. Isso é alcançado através de um processo de pré-computação que utiliza funções hash específicas, criando uma estrutura onde as colisões nunca ocorrem. Apesar de ser extremamente eficiente em termos de busca (O(1)), sua construção pode ser complexa e demorada, especialmente quando o conjunto de chaves é dinâmico.


    
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