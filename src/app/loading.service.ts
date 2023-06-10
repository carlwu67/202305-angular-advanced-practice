import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  task = 0;
  loadingElm?: HTMLElement;

  constructor() {}

  loading() {
    ++this.task;
    if (this.loadingElm) {
      return;
    }

    const loading = document.createElement('div');
    loading.style.position = 'absolute';
    loading.style.width = '100vw';
    loading.style.height = '100vh';
    loading.style.top = '0';
    loading.style.left = '0';
    loading.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    document.body.appendChild(loading);
    this.loadingElm = loading;
  }

  unloading() {
    --this.task;
    if (!this.task) {
      this.loadingElm?.remove();
      this.loadingElm = undefined;
    }
  }
}
