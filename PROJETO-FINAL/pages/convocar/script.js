document.getElementById('convocarForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const local = document.getElementById('local').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const telefone = document.getElementById('telefone').value;

    try {
        const response = await fetch('https://sua-api.com/convocar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ local, data, hora, telefone }),
        });

        if (response.ok) {
            document.getElementById('successMessage').textContent = 'Convocação enviada com sucesso!';
            document.getElementById('convocarForm').reset();
        } else {
            document.getElementById('successMessage').textContent = 'Erro ao enviar a convocação. Tente novamente.';
        }
    } catch (error) {
        document.getElementById('successMessage').textContent = 'Erro de conexão. Tente novamente.';
    }
});

