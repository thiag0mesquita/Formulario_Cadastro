import { Button, TextField } from '@material-ui/core'
import React from "react";

function DadosUsuario({aoEnviar}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar()
        }}>
            <TextField
                type="email"
                id="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                margin='normal'
                required

            />
            <TextField
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
