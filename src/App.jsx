import Perfil from "./components/Perfil"
import Formulario from './components/Formulario'
import { useState } from "react"
import ReposList from "./components/ReposList"

function App() {
  const [formVisivel, setFormVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <input type="text" onBlur={e => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 3 && (
        <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      {/* {formVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setFormVisivel(!formVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
