import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, FormHelperText } from '@material-ui/core'


function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, email, cpf, promocoes, novidades });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin='normal'

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
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                label="E-mail"
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
                label="CPF"
                variant="outlined"
                fullWidth
                margin='normal'
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                }}

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
                color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;