import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/container/notes-list/notes-list.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NoteCardComponent } from './pages/components/note-card/note-card.component';

@NgModule({
  declarations: [AppComponent, NotesListComponent, MainLayoutComponent, NoteCardComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
