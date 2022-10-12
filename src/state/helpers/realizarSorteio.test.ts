import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio deamigo secreto", () => {
    test("cada participante não sorteie o próprio nome", () => {

        const participantes = [
            "Lorem",
            "ipsum",
            "dolor",
            "sit",
            "amet",
            "consectetur",
            "adipiscing",
            "elit",
        ];

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })

    });
});