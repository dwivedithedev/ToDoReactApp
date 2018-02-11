import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }


    // when user input changes, set the newNotecontent to 
    //value in the inputbox
    handleUserInput(e) {
        console.log(this);
        this.setState({
            newNoteContent: e.target.value, //the value of text inpur
        })
    }

    writeNote() {

        // call a methods that sets the noteContent for a note to
        // value of the input
this.props.addNote(this.state.newNoteContent);


        //sets newNoteContent to empty string
        this.setState({
            newNoteContent: '',
        })
    }

    render() {
        return(
                <div className="formWrapper">
                    <input className="noteInput"
                    placeholder="Enter a new note here.." 
                    value={this.state.newNoteContent} 
                    onChange={this.handleUserInput}/ >
                    <button className="noteButton"
                    onClick={this.writeNote}
                    >Add Note</button>
                </div>

        )
    }
}

export default NoteForm;