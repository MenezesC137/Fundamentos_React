import'./index.css'
import ReactDOM from "react-dom"
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do estudante" 
            aluno="Carlos"
            nota={ 8 } />
        <Fragmento />
    </div>,
    document.getElementById('root')
) 