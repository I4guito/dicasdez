document.addEventListener('DOMContentLoaded', function () {
    // Recupera as anotações salvas, se houverem
    const savedNotes = localStorage.getItem('notes');

    // Atualiza o conteúdo da textarea com as anotações salvas
    if (savedNotes) {
        document.getElementById('noteInput').value = savedNotes;
    }

    // Adiciona um ouvinte de eventos para salvar as anotações sempre que houver uma alteração
    document.getElementById('noteInput').addEventListener('input', function () {
        const notes = this.value;

        // Salva as anotações no localStorage
        localStorage.setItem('notes', notes);
    });
});
