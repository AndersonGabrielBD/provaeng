export const ListasAutoOrganizadas = () => {
    return(
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Listas Auto Organizáveis </h2>
      <p className='mb-20'>As Listas Auto-Organizáveis são estruturas de dados encadeadas que reorganizam seus elementos conforme as operações são realizadas, visando melhorar a eficiência de acesso futuro. Elas utilizam estratégias como MTF (Move-to-Front) ou Transposição, movendo os elementos mais acessados para posições mais próximas da cabeça da lista. Isso garante que os elementos frequentemente consultados fiquem mais acessíveis, otimizando a busca em cenários onde certos elementos são mais utilizados que outros.



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