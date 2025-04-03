import { HashingDuplo } from "../components/Hashs/HashingDuplo";
import { HashingEncadeado } from "../components/Hashs/HashingEncadeado";
import { HashingPerfeito } from "../components/Hashs/HashingPerfeito";
import { HashingSondagem } from "../components/Hashs/HashingSondagem";
import { HashingUniversal } from "../components/Hashs/HashingUniversal";
import { useHash } from "../contexts/HashContext";

export default function Hashing() {
  const { selectedHash, setSelectedHash } = useHash();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Escolha um Tipo de Hash</h1>
      <div className="flex space-x-4">
        <button onClick={() => setSelectedHash('HashingDuplo')} className="btn">
          Hashing Duplo
        </button>
        <button onClick={() => setSelectedHash('HashingEncadeado')} className="btn">
          Hashing Encadeado
        </button>
        <button onClick={() => setSelectedHash('HashingPerfeito')} className="btn">
          Hashing Perfeito
        </button>
        <button onClick={() => setSelectedHash('HashingSondagem')} className="btn">
          Hashing Sondagem
        </button>
        <button onClick={() => setSelectedHash('HashingUniversal')} className="btn">
          Hashing Universal
        </button>
      </div>

      <div className="mt-8">
        {selectedHash === 'HashingDuplo' && <HashingDuplo />}
        {selectedHash === 'HashingEncadeado' && <HashingEncadeado />}
        {selectedHash === 'HashingPerfeito' && <HashingPerfeito />}
        {selectedHash === 'HashingSondagem' && <HashingSondagem />}
        {selectedHash === 'HashingUniversal' && <HashingUniversal />}
      </div>
    </div>
  );
}
