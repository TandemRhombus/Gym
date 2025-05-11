import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemplateDataService {
  private key = 'templateEntries';
  getEntries(): any[] {
    const json = localStorage.getItem(this.key);
    return json ? JSON.parse(json) : [];
  }
  updateEntries(entries: any[]): void {
    localStorage.setItem(this.key, JSON.stringify(entries));
  }
}
