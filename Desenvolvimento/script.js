// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Funções auxiliares
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        return phoneRegex.test(phone);
    }

    function applyPhoneMask(input) {
        input.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    // Tratamento do formulário de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            // Simulação de login
            console.log('Tentativa de login:', { email });
            alert('Login realizado com sucesso!');
            // Aqui você redirecionaria para a página principal após o login
            // window.location.href = 'principal.html';
        });
    }

    // Tratamento do formulário de cadastro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            applyPhoneMask(phoneInput);
        }

        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const position = document.getElementById('position').value;
            const phone = document.getElementById('phone').value;

            if (!name || !email || !password || !position || !phone) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            if (!validatePhone(phone)) {
                alert('Por favor, insira um número de telefone válido no formato (00) 00000-0000.');
                return;
            }

            // Simulação de cadastro
            console.log('Dados do cadastro:', { name, email, position, phone });
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a página de login
        });
    }

    // Tratamento do formulário de recuperação de senha
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;

            if (!email) {
                alert('Por favor, insira seu email.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            // Simulação de envio de email de recuperação
            console.log('Solicitação de recuperação de senha:', { email });
            alert('Se este email estiver cadastrado em nossa base de dados, você receberá um link para redefinir sua senha.');
            window.location.href = 'index.html'; // Redireciona para a página de login
        });
    }

    // Tratamento de links de navegação
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Verifica se o link tem href e não é "#"
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                // Aqui você pode adicionar lógica adicional antes da navegação
                console.log('Navegando para:', this.getAttribute('href'));
            }
        });
    });

    // Função para simular armazenamento de dados (em produção, isso seria feito em um backend)
    function simulateDataStorage(data) {
        // Em produção, isso seria uma chamada API
        console.log('Dados armazenados:', data);
        return true;
    }
});