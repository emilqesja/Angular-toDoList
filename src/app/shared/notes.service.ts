import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../core/api.token';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../pages/notes/container/add-new-note/models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) {}

  getNotes(): Observable<Note[]> {
    const path = `${this.apiUrl}/notes`;
    return this.http.get<Note[]>(path);
  }

  getNote(): Observable<Note> {
    const path = `${this.apiUrl}/notes/id`;
    return this.http.get<Note>(path);
  }

  addNote(note: Note) {
    const path = `${this.apiUrl}/notes`;
    return this.http.post<Note>(path, note);
  }

  delete(id: number) {
    console.log('service', id);
    const path = `${this.apiUrl}/notes/${id}`;
    return this.http.delete<Note>(path);
  }
}
