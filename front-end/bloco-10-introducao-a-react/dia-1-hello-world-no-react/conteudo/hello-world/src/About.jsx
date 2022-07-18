import React from 'react'

class About extends React.Component {
  render() {
    const skills = ["HTML",'CSS', 'JS', 'GIT'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>); // cria um array de tags <li>
    const nome = <h1>Luis Rowe</h1>;
    const tituloLista = <h2>Minhas Habilidades</h2>
    const lista = <ul type='square'>{jsxSkills}</ul>
    return <div>
      {nome}
      {tituloLista}
      {lista}
    </div>
    // <h2>Minhas Habilidades</h2>;

  }
}

export default About;