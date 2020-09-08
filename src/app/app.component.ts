import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClrDragEvent } from '@clr/angular';

interface File {
  name: string;
}

@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  files: File[] = [{ name: 'img_001.jpg' }, { name: 'img_002.jpg' }, { name: 'img_003.jpg' }];

  droppedFiles: File[] = [];

  private moveItem(item: File, from: File[], to: File[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  onDropToUpload(dragEvent: ClrDragEvent<File>) {
    console.log('dropped to upload');
    this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles);
  }

  onDropBack(dragEvent: ClrDragEvent<File>) {
    console.log('dropped back');
    this.moveItem(dragEvent.dragDataTransfer, this.droppedFiles, this.files);
  }
}
