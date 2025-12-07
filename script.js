const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const fone = document.getElementById('fone');
const erro = document.getElementById('erro');

form.addEventListener('submit', (e) => {
    erro.textContent = '';

    if (!nome.value || !email.value || !fone.value) {
        e.preventDefault();
        erro.textContent = 'Preencha todos os campos corretamente.';
        return;
    }

    if (nome.value.length < 5 || nome.value.length > 40) {
        e.preventDefault();
        erro.textContent = 'O nome deve ter entre 5 e 40 caracteres.';
        return;
    }

    if (!email.value.includes('@')) {
        e.preventDefault();
        erro.textContent = 'O email deve conter @.';
        return;
    }

    if (fone.value.length !== 11) {
        e.preventDefault();
        erro.textContent = 'O telefone deve ter 11 dígitos (DDD + número).';
        return;
    }
});
