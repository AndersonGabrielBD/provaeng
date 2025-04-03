import { useList } from '../contexts/ListsContext';
import { ListasAutoOrganizadas } from '../components/Lists/ListasAutoOrganizaveis';
import {SkipLists } from '../components/Lists/SkipLists';

export default function Listas() {
  const { selectedList, setSelectedList } = useList();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Escolha um Tipo de Lista</h1>
      <div className="flex space-x-4">
        <button onClick={() => setSelectedList('ListaAutoOrganizaveis')} className="btn">
          Lista Auto-Organizável
        </button>
        <button onClick={() => setSelectedList('SkipLists')} className="btn">
          Skip Lists
        </button>
      </div>

      <div className="mt-8">
        {selectedList === 'ListaAutoOrganizaveis' && <ListasAutoOrganizadas />}
        {selectedList === 'SkipLists' && <SkipLists />}
      </div>
    </div>
  );
}
