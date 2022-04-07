import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const API_URL = new InjectionToken<string>('API Base URL', {
  factory: () => environment.apiUrl,
});
