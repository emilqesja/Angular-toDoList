import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: () =>
          import('./pages/notes/note.module').then((m) => m.NoteModule),
      },
      {
        path: '**',
        redirectTo: 'notes',
        pathMatch: 'full',
      },
    ],
  },
];
