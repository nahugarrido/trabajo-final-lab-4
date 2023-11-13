import {
  Component,
  Input,
  Output,
  HostListener,
  OnInit,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { House } from '../../models/house.model';
import { ModalCreateHouseComponent } from '../modal-create-house/modal-create-house.component';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.scss'],
})
export class HouseTableComponent implements OnInit {
  @Input() houses: House[] = [];
  @Output() updateHouses: EventEmitter<any> = new EventEmitter();

  @ViewChild(ModalCreateHouseComponent)
  modalCreateHouse!: ModalCreateHouseComponent;

  @ViewChild(ModalConfirmComponent)
  modalConfirm!: ModalConfirmComponent;

  windowInnerWidth: number = window.innerWidth;

  constructor(private houseService: HousesService) {}

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.windowInnerWidth = window.innerWidth;
    console.log(this.windowInnerWidth);
  }

  public handleUpdateHouses() {
    this.updateHouses.emit();
  }

  public openCreateModal() {
    if (this.modalCreateHouse) {
      this.modalCreateHouse.showModalCreate();
    }
  }

  public openEditModal(house: House) {
    if (this.modalCreateHouse) {
      this.modalCreateHouse.showModalEdit(house);
    }
  }

  public openDeleteModal(house: House) {
    if (this.modalConfirm) {
      this.modalConfirm.openModal().then((confirmed) => {
        if (confirmed) {
          console.log('User confirmed the modal.');
          this.houseService.deleteHouseById(house.id).subscribe((data) => {
            this.updateHouses.emit();
          });
        } else {
          console.log('User dismissed the modal.');
        }
      });
    }
  }
}
