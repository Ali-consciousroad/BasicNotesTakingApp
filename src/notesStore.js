import {nanoid} from 'nanoid'

export function createNotesStore(){
    return {
        notes: [],
        // In redux objects are used to define actions
        // In mobx functions are used to define actions
        addNote(text){
            this.notes.push({
                text, id: nanoid()
            })
        },
        removeNote(id){
            this.notes = this.notes.filter(note => note.id != id) 
        }
    }
}