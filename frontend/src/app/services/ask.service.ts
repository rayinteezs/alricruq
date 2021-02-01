import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ask } from '../classes/ask';

@Injectable({
  providedIn: 'root'
})
export class AskService {

  constructor() { }

  public ask(ask:Ask):Observable<number>{
    return of(Math.random()*(1000-0))
  }
}
