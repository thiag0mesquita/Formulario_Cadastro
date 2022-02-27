import { Button, TextField } from '@material-ui/core'
import React from "react";

function DadosUsuario() {
    return (
        <form>
            <TextField
                type="email"
                id="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                margin='normal'

            />
            <TextField
                type="password"
                id="senha"
                label="senha"
                variant="outlined"
                fullWidth
                margin='normal'
            />
            <Button
                type='submit'
                variant="contained"
                color="primary">Cadastrar</Button>

        </form>
    );

}

export default DadosUsuario;
