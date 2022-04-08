import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesListComponent } from './container/notes-list/notes-list.component';
import { AddNewNoteComponent } from './container/add-new-note/add-new-note.component';
import { UpdateNoteComponent } from './container/update-note/update-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NotesListComponent },
      { path: 'update-note/:id', component: UpdateNoteComponent },
      { path: 'add-new-note', component: AddNewNoteComponent },
    ],
  },
];

@NgModule({
  declarations: [
    NotesListComponent,
    UpdateNoteComponent,
    AddNewNoteComponent,
    NoteCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    Ng2SearchPipeModule,
  ],
})
export class NoteModule {}
