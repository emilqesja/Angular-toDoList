import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from './models/note.model';
import { NotesService } from '../../../../shared/notes.service';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-note-details',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.scss'],
})
export class AddNewNoteComponent implements OnInit {
  note!: Note;
  isSubmitted: boolean = false;

  addNoteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    body: [''],
  });

  constructor(
    private fb: FormBuilder,
    private notesService: NotesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isSubmitted = true;
    if (this.addNoteForm.invalid) {
      return;
    }
    this.notesService
      .addNote(this.addNoteForm.value)
      .pipe(
        take(1),
        finalize(() => (this.isSubmitted = false))
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/']).then((r) => r);
        },
      });
  }

  cancel() {
    this.router.navigateByUrl('/').then((r) => r);
  }
}
