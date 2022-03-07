import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import ValidacoesCadastro from "../../context/ValidacoesCadastro"
import useErros from '../../hooks/useErros';



function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                name='nome'
                variant="outlined"
                fullWidth
                margin='normal'
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                onBlur={validarCampos}

            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin='normal'

            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                id="CPF"
                name='cpf'
                label="CPF"
                variant="outlined"
                fullWidth
                margin='normal'
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}

            />
            <FormControlLabel
                label='Promoções'
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name='promocoes'
                        value="checkedA"
                        color='primary'
                    />}
            />
            <FormControlLabel
                label='Novidades'
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name='novidades'
                        value="checkedA"
                        color='primary'
                    />}
            />
            <Button
                type='submit'
                variant="contained"
                color="primary">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;