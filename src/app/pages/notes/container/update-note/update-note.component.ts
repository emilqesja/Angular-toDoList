import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../../../../shared/notes.service';
import { Note } from '../add-new-note/models/note.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-view-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent implements OnInit {
  selectedNote!: Note;
  noteId!: number;
  isSubmitted: boolean = false;

  updateNoteForm: FormGroup = this.fb.group({
    id: [''],
    title: ['', Validators.required],
    body: [''],
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.noteId = this.route.snapshot.params['id'];
    this.getNote();
  }

  getInvalidInput(field: string, validation: string = 'required') {
    const control = this.updateNoteForm.get(field);
    return control?.hasError(validation) && control.touched;
  }

  getNote() {
    this.notesService.getNote(this.noteId).subscribe({
      next: (res) => {
        console.log(res);
        this.selectedNote = res;
        this.updateNoteForm.patchValue({ ...this.selectedNote });
      },
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    this.notesService
      .updateNote(this.selectedNote.id, this.updateNoteForm.value)
      .pipe(
        take(1),
        finalize(() => (this.isSubmitted = false))
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/').then((r) => r);
        },
      });
  }

  cancel() {
    this.router.navigateByUrl('/').then((r) => r);
  }
}
