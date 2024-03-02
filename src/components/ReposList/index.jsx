import { useEffect, useState } from "react"
import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li key={repositorio.id} className={styles.listItem}>
                        <div className={styles.listItemName}>
                            <b>Nome: </b>
                            {repositorio.name}
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem: </b>
                            {repositorio.language}
                        </div>
                        <a className={styles.listItemLink} target="_blank" href={repositorio.html_url}>Visite no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ReposList