function getSearchErrorElement() {
    const error = document.getElementById('searchError')
    if (!error) {
        return null;
    }
    return error;
}

function removeSearchErrorIfExists() {
    const error = getSearchErrorElement();
    if (!error) {
        return;
    }
    error.remove();
}

function insertSearchErrorElement() {
    const error = document.createElement('div');
    error.id = 'searchError';
    error.textContent = 'test';
    document.body.appendChild(error)
}

function getNotesElement() {
    const notes = document.getElementById('notes')
    if (!notes) {
        return null;
    }
    return notes;
}

function removeNotesElementIfExists() {
    const notes = getSearchErrorElement();
    if (!notes) {
        return;
    }
    notes.remove();
}

function insertNotesElement(notesName) {
    const notes = document.createElement('div');
    notes.id = 'notes';
    const text = document.createElement('p');
    text.textContent =  'Not implemented yet.';
    notes.appendChild(text);
    document.body.appendChild(notes)
}

function searchNotes() {
    removeSearchErrorIfExists();
    removeNotesElementIfExists();

    const input = document.getElementById('search');
    if (!input) {
        console.log('failed to get input element');
        return;
    }
    
    const value = input.value;
    if (!value) {
        insertSearchErrorElement();
        return;
    }
    insertNotesElement(value);
}