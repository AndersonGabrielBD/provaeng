// src/components/trees/BTree.tsx
import { useState } from 'react';

class BTreeNode {
  keys: number[];
  children: BTreeNode[];
  isLeaf: boolean;

  constructor(isLeaf: boolean) {
    this.keys = [];
    this.children = [];
    this.isLeaf = isLeaf;
  }
}

export const BTree = () => {
  const [root, setRoot] = useState<BTreeNode | null>(null);
  const [inputValue, setInputValue] = useState('');
  const order = 3; // Ordem da Árvore B (máximo de 2 filhos por nó)


  // Função para dividir um nó
  const splitChild = (parent: BTreeNode, index: number) => {
    const node = parent.children[index];
    const newNode = new BTreeNode(node.isLeaf);
    const midIndex = Math.floor(order / 2);
    const midKey = node.keys[midIndex];

    // Mover metade das chaves e filhos para o novo nó
    newNode.keys = node.keys.splice(midIndex + 1);
    if (!node.isLeaf) {
      newNode.children = node.children.splice(midIndex + 1);
    }

    // Adicionar a chave do meio no nó pai
    parent.keys.splice(index, 0, midKey);
    parent.children.splice(index + 1, 0, newNode);
  };

  // Função para inserir em um nó
  const insertNonFull = (node: BTreeNode, key: number) => {
    let i = node.keys.length - 1;

    if (node.isLeaf) {
      // Encontrar a posição correta
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      node.keys.splice(i + 1, 0, key);
    } else {
      // Encontrar o nó filho que será recursivamente inserido
      while (i >= 0 && key < node.keys[i]) {
        i--;
      }
      i++;

      const child = node.children[i];
      if (child.keys.length === order - 1) {
        splitChild(node, i);

        if (key > node.keys[i]) {
          i++;
        }
      }

      insertNonFull(node.children[i], key);
    }
  };

  // Função para inserir na Árvore B
  const insert = (key: number) => {
    if (!root) {
      const newRoot = new BTreeNode(true);
      newRoot.keys.push(key);
      setRoot(newRoot);
    } else {
      if (root.keys.length === order - 1) {
        const newRoot = new BTreeNode(false);
        newRoot.children.push(root);
        splitChild(newRoot, 0);
        setRoot(newRoot);
      }
      insertNonFull(root, key);
    }
  };

  // Função para adicionar um nó
  const handleAddNode = () => {
    if (inputValue) {
      const value = parseInt(inputValue);
      if (!isNaN(value)) {
        insert(value);
      }
    }
    setInputValue('');
  };

  // Função para renderizar a árvore
  const renderTree = (node: BTreeNode) => {
    if (!node) return null;

    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-blue-500 text-white p-4 rounded-md">
          <span className="text-lg">{node.keys.join(', ')}</span>
        </div>
        {!node.isLeaf && (
          <div className="flex space-x-12">
            {node.children.map((child, index) => (
              <div key={index}>{renderTree(child)}</div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Árvore B</h2>
      <p className='mb-20'> A Árvore B é uma árvore balanceada e de busca que é amplamente utilizada em sistemas de banco de dados e sistemas de arquivos. Ela permite que vários filhos sejam armazenados em cada nó, o que melhora a performance ao reduzir o número de acessos ao disco. A árvore B é balanceada, o que significa que todas as folhas estão no mesmo nível, e as operações de inserção, remoção e busca podem ser realizadas em tempo O(log n). Essa árvore é particularmente útil em estruturas de dados em disco, pois a quantidade de dados lidos ou escritos por operação é minimizada.</p>
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
        {root && renderTree(root)}
      </div>
    </div>
  );
};
