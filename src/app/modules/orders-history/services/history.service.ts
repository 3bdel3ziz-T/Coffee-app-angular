import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private appService: AppService) {
    
  }
}
