document.addEventListener('DOMContentLoaded', function () {
    // Recupera as anotações salvas, se houverem
    const savedNotes = localStorage.getItem('notes');

    // Atualiza o conteúdo da textarea com as anotações salvas
    if (savedNotes) {
        document.getElementById('noteInput').value = savedNotes;
    }

    // Adiciona um ouvinte de eventos para o pressionamento da tecla Enter
    document.getElementById('noteInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();

            const notesContainer = document.getElementById('notesContainer');
            const noteText = this.value.trim();

            if (noteText !== '') {
                // Cria uma nova caixa de texto para a anotação
                const newNote = document.createElement('div');
                newNote.className = 'note';
                newNote.textContent = noteText;

                // Adiciona a nova caixa de texto ao contêiner de anotações
                notesContainer.appendChild(newNote);

                // Limpa a textarea
                this.value = '';

                // Salva as anotações no localStorage
                saveNotes();
            }
        }
    });

    function saveNotes() {
        const notes = Array.from(document.querySelectorAll('.note')).map(note => note.textContent).join('\n');
        localStorage.setItem('notes', notes);
    }
});