function validarForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Verificar o formato do e-mail
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    // Verificar o tamanho da mensagem
    if (mensagem.length > 500) {
        alert('A mensagem não pode ter mais de 500 caracteres.');
        return false;
    }

    return true;
}