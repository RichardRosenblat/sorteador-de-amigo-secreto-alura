import React from 'react'
import { render, screen } from '@testing-library/react'
import Formulario from './Formulario'

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)
    const input = screen.getByPlaceholderText('Insira os nomes do participante')
    const botao = screen.getByRole('button')
    expect(input).toBeInTheDocument()
    expect(botao).toBeDisabled()
})