import { Component, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {
  confirmSubject = new Subject<void>();
  negateSubject = new Subject<void>();
  public confirmAction$: Observable<void> = this.confirmSubject.asObservable();
  public negateAction$: Observable<void> = this.negateSubject.asObservable();

  confirmed: boolean = false;
  showModal: boolean = false;

  @Input() title: string = '';
  @Input() message: string = '';

  constructor() {}

  ngOnInit(): void {}

  public async openModal(): Promise<boolean> {
    this.showModal = true;
    return new Promise((resolve) => {
      this.confirmAction$.subscribe(() => {
        resolve(true);
        this.closeModal();
      });

      this.negateAction$.subscribe(() => {
        resolve(false);
        this.closeModal();
      });
    });
  }

  public closeModal() {
    this.showModal = false;
  }

  public quitModal() {
    this.negateSubject.next();
    this.closeModal();
  }

  public confirm() {
    this.confirmed = true;
    this.confirmSubject.next();
    this.closeModal();
  }
}
