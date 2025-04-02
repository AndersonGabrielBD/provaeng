import { useState } from 'react';
import { BSTTree } from '../components/trees/BSTTree';
import { AVLTree } from '../components/trees/AVLTree'; 
import { FibonacciTree } from '../components/trees/FibonacciTree'; // Importe a árvore Fibonacci
import { BTree } from '../components/trees/BTree'; // Importe a árvore BTree

export const Trees = () => {
  const [selectedTree, setSelectedTree] = useState('');

  const handleTreeSelection = (tree: string) => {
    setSelectedTree(tree);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">Escolha um Tipo de Árvore</h1>
      
      {/* Botões para selecionar o tipo de árvore */}
      <div className="flex justify-center space-x-8 mb-8">
        <button 
          onClick={() => handleTreeSelection('BST')} 
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Árvore Binária de Busca (BST)
        </button>
        <button 
          onClick={() => handleTreeSelection('AVL')} 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Árvore AVL
        </button>
        <button 
          onClick={() => handleTreeSelection('Fibonacci')} 
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Árvore de Fibonacci
        </button>
        <button 
          onClick={() => handleTreeSelection('BTree')} 
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Árvore B
        </button>
      </div>

      {/* Renderizar a árvore selecionada */}
      <div className="flex justify-center">
        {selectedTree === 'BST' && <BSTTree />}
        {selectedTree === 'AVL' && <AVLTree />}
        {selectedTree === 'Fibonacci' && <FibonacciTree />}
        {selectedTree === 'BTree' && <BTree />} {/* Aqui está a BTree */}
      </div>
    </div>
  );
};
