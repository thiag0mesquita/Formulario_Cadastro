import { Button, TextField } from '@material-ui/core'
import React from "react";
import { useContext } from 'react';
import { useState } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

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
