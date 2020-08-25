import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { apiKey } from '../Settings';
// tslint:disable:max-classes-per-file

@Component({
  selector: 'container',
  template: `
    <ng-container *ngIf="show" [ngTemplateOutlet]="templateRef"></ng-container>
  `
})
export class MenuComponent {
  @Input() public show: boolean = false;
  @ContentChild(TemplateRef, { static: false }) public templateRef!: TemplateRef<any>;
}

@Component({
  selector: 'transclusion',
  styles: [`
    .container {
      border: 1px solid blue;
      display: block;
      padding: 15px;
    }
  `],
  template: `
  <div>
    <button [innerText]="show ? 'Hide' : 'Show'" (click)="handleToggle()"></button>

    <container [show]="show" [ngClass]="'container'">
      <ng-template #templateRef>
        <ng-content></ng-content>
      </ng-template>
    </container>
  <div>
  `
})
export class TransclusionComponent {
  public show = false;
  public handleToggle() {
    this.show = !this.show;
  }
}

@Component({
  selector: 'editor-wrapper',
  template: `<editor [apiKey]="apiKey" [(ngModel)]="editorValue"></editor>`
})
export class EditorWraper {
  public apiKey = apiKey;
  public editorValue = '';
}