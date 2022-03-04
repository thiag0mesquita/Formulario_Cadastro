import { Button, TextField } from '@material-ui/core'
import React from "react";
import { useState } from 'react';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                type="email"
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
                type="password"
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                margin='normal'
                required
            />
            <Button
                type='submit'
                variant="contained"
                color="primary">Cadastrar</Button>

        </form>
    );

}

export default DadosUsuario;
