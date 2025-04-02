
import { useTree } from '../contexts/TreeContext';
import { AVLTree } from '../components/trees/AVLTree';
import { BSTTree } from '../components/trees/BSTTree';
import { BTree } from '../components/trees/BTree';
import { FibonacciTree } from '../components/trees/FibonacciTree';

export default function Arvores() {
  const { selectedTree, setSelectedTree } = useTree();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Escolha um Tipo de Árvore</h1>
      <div className="flex space-x-4">
        <button onClick={() => setSelectedTree('BST')} className="btn">
          Árvore Binária de Busca
        </button>
        <button onClick={() => setSelectedTree('AVL')} className="btn">
          Árvore AVL
        </button>
        <button onClick={() => setSelectedTree('B')} className="btn">
          Árvore B
        </button>
        <button onClick={() => setSelectedTree('Fibonacci')} className="btn">
          Árvore de Fibonacci
        </button>
      </div>

      <div className="mt-8">
        {selectedTree === 'BST' && <BSTTree />}
        {selectedTree === 'AVL' && <AVLTree />}
        {selectedTree === 'BTree' && <BTree />}
        {selectedTree === 'Fibonacci' && <FibonacciTree />}
      </div>
    </div>
  );
}
