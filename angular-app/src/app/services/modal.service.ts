import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showSettingsDialog = false;
  showFollowDialog = false;
}
