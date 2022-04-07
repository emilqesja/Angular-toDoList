import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { NotesListComponent } from './container/notes-list/notes-list.component';
import { AddNewNoteComponent } from './container/add-new-note/add-new-note.component';
import { ViewNoteComponent } from './container/view-note/view-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NotesListComponent },
      { path: 'view-note/:id', component: ViewNoteComponent },
      { path: 'add-new-note', component: AddNewNoteComponent },
    ],
  },
];

@NgModule({
  declarations: [
    NotesListComponent,
    ViewNoteComponent,
    AddNewNoteComponent,
    NoteCardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class NoteModule {}
