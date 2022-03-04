function validarCPF(cpf){
    if(cpf.length !== 11) {
      return {valido:false, texto:"CPF deve conter 11 dígitos"}
    }else
    return {valido:true, texto:""}
}

function validarSenha(senha){
    if(senha.length < 4 || validarSenha.length > 72) {
      return {valido:false, texto:"Senha deve conter de 4 à 72 dígitos"}
    }else
    return {valido:true, texto:""}
}

export { validarCPF, validarSenha}