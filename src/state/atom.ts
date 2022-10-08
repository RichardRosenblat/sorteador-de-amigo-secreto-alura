import { atom } from "recoil";

export const listaPericipantesState = atom<string[]>({
    key: "listaParticipantesState",
    default: [],
});

export const erroState = atom<string>({
    key:'erroState',
    default:''
})