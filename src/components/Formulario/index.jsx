import { useState, useEffect } from "react"

const Formulario = () => {

    const [notaA, setNotaA] = useState(0)
    const [notaB, setNotaB] = useState(0)
    const [notaC, setNotaC] = useState(0)
    const [nome, setNome] = useState('')
    useEffect(() => {
        console.log('O componente foi criado')
        return () => {
            console.log('O componente foi finalizado')
        }
    }, [])

    useEffect(() => {
        console.log('O estado nome foi alterado')
    }, [nome])

    useEffect(() => {
        console.log('O estado nota foi alterado')
    }, [notaA, notaB, notaC])

    const renderizaResultado = () => {
        const media = (notaA + notaB + notaC) / 3
        if (media >= 7) {
            return (
                <p> Olá {nome}, vc foi aprovado</p>
            )
        } else {
            return (
                <p> Olá {nome}, vc foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Digite seu nome" onChange={evento => setNome(evento.target.value)}/>
            <input type="number" placeholder="Nota A" onChange={({target}) => setNotaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota B" onChange={evento => setNotaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota C" onChange={evento => setNotaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario