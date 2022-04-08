import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() link: string = '';

  @Output('delte') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncate', { static: true }) truncate!: ElementRef;
  @ViewChild('bodyText', { static: true }) bodyText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue('height'), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncate!.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncate!.nativeElement, 'display', 'none');
    }
  }

  onXButtonClick() {
    this.deleteEvent.emit();
  }
}
