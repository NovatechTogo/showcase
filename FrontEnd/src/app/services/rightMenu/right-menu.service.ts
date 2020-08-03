import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RightMenuService {
  ispen = false;

  constructor() { }

  toggleMenu() {
    this.ispen = !this.ispen;
  }
}
