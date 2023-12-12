document.addEventListener('DOMContentLoaded', function () {
    const notesContainer = document.getElementById('notesContainer');
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');

    // Recupera as anotações salvas, se houverem
    const savedNotes = localStorage.getItem('notes');

    // Atualiza o conteúdo da textarea com as anotações salvas
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }

    // Adiciona um ouvinte de eventos para o botão "Adicionar Anotação"
    addNoteBtn.addEventListener('click', function () {
        addNote();
    });

    // Adiciona um ouvinte de eventos para o pressionamento da tecla Enter na textarea
    noteInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            addNote();
        }
    });

    function addNote() {
        const noteText = noteInput.value.trim();

        if (noteText !== '') {
            // Cria uma nova caixa de texto para a anotação
            const newNote = document.createElement('div');
            newNote.className = 'note';
            newNote.textContent = noteText;

            // Adiciona a nova caixa de texto ao contêiner de anotações
            notesContainer.appendChild(newNote);

            // Limpa a textarea
            noteInput.value = '';

            // Salva as anotações no localStorage
            saveNotes();
        }
    }

    function saveNotes() {
        localStorage.setItem('notes', notesContainer.innerHTML);
    }
});
