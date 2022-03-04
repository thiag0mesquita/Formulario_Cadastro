import { Button, TextField } from '@material-ui/core'
import React from "react";
import { useContext } from 'react';
import { useState } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event) {
        const {name, value} = event.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido)
            {
                return false;
            }
        }
        return true;
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
            
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                type="email"
                name='email'
                id="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                margin='normal'
                required

            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                type="password"
                id="senha"
                name='senha'
                label="Senha"
                variant="outlined"
                fullWidth
                margin='normal'
                required
            />
            <Button
                type='submit'
                variant="contained"
                color="primary">Próximo</Button>

        </form>
    );

}

export default DadosUsuario;
