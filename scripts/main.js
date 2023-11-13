const email = document.querySelector('#email');

// Tirar aviso padrão de erros do formulário
email.addEventListener('invalid', e => e.preventDefault());

email.addEventListener('blur', () => {
    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if (email.validity[erro]) {
            mensagem = mensagens.email[erro];
        }
    });

    const mensagemErro = document.querySelector('.mensagem-erro');
    const validador = email.checkValidity();

    if (!validador) {
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = 'block';
    } else {
        mensagemErro.textContent = '';
    }
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch'
];

const mensagens = {
    email: {
        valueMissing: 'Oops! Please add your email',
        typeMismatch: 'Oops! Please check your email'
    }
};
