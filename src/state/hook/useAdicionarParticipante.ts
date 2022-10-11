import { useSetRecoilState, useRecoilValue } from "recoil";
import { listaParicipantesState, erroState } from "../atom";

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParicipantesState);
    const lista = useRecoilValue(listaParicipantesState);
    const setErro = useSetRecoilState(erroState);
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro('')
            }, 5000);
            return;
        }
        return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
    };
};
