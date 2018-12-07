import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(obj: any) {
    console.log(obj);
  }
}
