        // Script para alternar a visibilidade do menu
        const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementById('navbar');

        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });

        // Adicionei um evento para fechar o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (e.target !== hamburger && e.target !== navbar && !navbar.contains(e.target)) {
                navbar.classList.remove('active');
            }
        });