// src/components/trees/BSTTree.tsx
import { useState } from 'react';

// Estrutura de nó da Árvore Binária de Busca
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const BSTTree = () => {
  const [root, setRoot] = useState<TreeNode | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Função para inserir um valor na árvore
  const insertNode = (root: TreeNode | null, value: number): TreeNode => {
    if (!root) {
      return new TreeNode(value);
    }

    if (value < root.value) {
      root.left = insertNode(root.left, value);
    } else if (value > root.value) {
      root.right = insertNode(root.right, value);
    }

    return root;
  };

  // Função para adicionar o valor à árvore
  const handleAddNode = () => {
    if (inputValue) {
      const value = parseInt(inputValue);
      if (!isNaN(value)) {
        const newRoot = insertNode(root, value);
        setRoot(newRoot);
      }
    }
    setInputValue('');
  };

  // Função para renderizar a árvore (em forma simples)
  const renderTree = (node: TreeNode | null) => {
    if (!node) return null;

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-green-500 text-white p-4 rounded-full">
          <span className="text-lg">{node.value}</span>
        </div>
        <div className="flex space-x-12">
          <div>{renderTree(node.left)}</div>
          <div>{renderTree(node.right)}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Árvore Binária de Busca</h2>
      <p className='mb-20'> A Árvore Binária de Busca (BST) é uma estrutura de dados onde cada nó possui no máximo dois filhos: um à esquerda e outro à direita. A principal característica dessa árvore é que o valor de cada nó à esquerda de um nó é menor que o valor do nó, e o valor de cada nó à direita é maior. Isso permite uma busca eficiente de elementos, já que, para encontrar um valor, podemos descartar metade da árvore a cada comparação. As operações básicas, como inserção, remoção e busca, têm complexidade de tempo média de O(log n), onde "n" é o número de nós na árvore.</p>

      {/* Input e botão para adicionar um nó */}
      <div className="flex justify-center space-x-4 mb-8">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite um valor"
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddNode}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Adicionar Nó
        </button>
      </div>

      {/* Exibir a árvore */}
      <div className="flex justify-center">
        {renderTree(root)}
      </div>
    </div>
  );
};
