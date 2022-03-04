import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react';


function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, cidade, estado });
        }}>
            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
                type="number"
                id="cep"
                label="CEP"
                variant="outlined"
                margin='normal'
            />
            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                type="text"
                id="endereco"
                label="Endereço"
                variant="outlined"
                fullWidth
                margin='normal'
            />
            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                type="number"
                id="numero"
                label="Numero"
                variant="outlined"
                margin='normal'
            />
            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                type="text"
                id="estado"
                label="Estado"
                variant="outlined"
                margin='normal'
            />
            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
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
