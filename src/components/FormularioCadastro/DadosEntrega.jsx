import React from 'react';
import { TextField, Button } from '@material-ui/core'


function DadosEntrega() {
    return (
        <form>
            <TextField
                type="number"
                id="cep"
                label="CEP"
                variant="outlined"
                margin='normal'
            />
            <TextField
                type="text"
                id="endereco"
                label="Endereço"
                variant="outlined"
                fullWidth
                margin='normal'
            />
            <TextField
                type="number"
                id="numero"
                label="Numero"
                variant="outlined"
                margin='normal'
            />
            <TextField
                type="text"
                id="estado"
                label="Estado"
                variant="outlined"
                margin='normal'
            />
            <TextField
                type="text"
                id="cidade"
                label="Cidade"
                variant="outlined"
                margin='normal'
            />
            <Button
                type='submit'
                variant="contained"
                color="primary"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;
