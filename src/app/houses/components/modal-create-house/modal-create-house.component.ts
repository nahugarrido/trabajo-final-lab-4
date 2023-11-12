import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HousesService } from '../../services/houses.service';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-modal-create-house',
  templateUrl: './modal-create-house.component.html',
  styleUrls: ['./modal-create-house.component.scss'],
})
export class ModalCreateHouseComponent implements OnInit {
  createHouseForm!: FormGroup;
  showCreateHouseModal: boolean = false;
  isEditing: boolean = false;
  idEditing!: number;
  idHouseOwner!: number;
  @ViewChild('modalCreateHouse') modalCreateHouse!: TemplateRef<FormGroup>;

  @Output() updateHouses: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private houseService: HousesService
  ) {}

  ngOnInit(): void {
    this.initFormGroup();
  }

  private initFormGroup() {
    this.createHouseForm = this.formBuilder.group({
      price: [null, [Validators.required]],
      address: this.formBuilder.group({
        street: [null, [Validators.required]],
        district: [null, [Validators.required]],
        country: [null, [Validators.required]],
      }),
      parking: [null, [Validators.required]],
      bathrooms: [null, [Validators.required]],
      bedrooms: [null, [Validators.required]],
      description: [null, [Validators.required]],
      contact: [null, [Validators.required]],
      image: [null, [Validators.required]],
    });
  }

  private clearForm() {
    this.createHouseForm.reset({
      price: null,
      address: this.formBuilder.group({
        street: null,
        district: null,
        country: null,
      }),
      parking: null,
      bathrooms: null,
      bedrooms: null,
      description: null,
      contact: null,
      image: null,
    });
  }

  public onSubmitCreate() {
    if (this.createHouseForm.valid) {
      this.houseService
        .createHouse(this.createHouseForm.value)
        .subscribe((data) => {
          this.updateHouses.emit();
          this.closeModal();
          this.clearForm();
        });
    }
  }

  public onSubmitEdit() {
    let house: House = {
      id: this.idEditing,
      price: this.createHouseForm.value.price,
      address: {
        street: this.createHouseForm.value.address.street,
        district: this.createHouseForm.value.address.district,
        country: this.createHouseForm.value.address.country,
      },
      parking: this.createHouseForm.value.parking,
      bathrooms: this.createHouseForm.value.bathrooms,
      bedrooms: this.createHouseForm.value.bedrooms,
      description: this.createHouseForm.value.description,
      contact: this.createHouseForm.value.contact,
      user_id: this.idHouseOwner,
      image: this.createHouseForm.value.image,
    };

    if (this.createHouseForm.valid) {
      this.houseService
        .updateHouseById(house, this.idEditing)
        .subscribe((data) => {
          this.updateHouses.emit();
          this.closeModal();
          this.clearForm();
        });
    }
  }

  public showModalCreate() {
    this.showCreateHouseModal = true;
  }

  public showModalEdit(house: House) {
    this.idHouseOwner = house.user_id;
    this.idEditing = house.id;
    this.isEditing = true;
    this.showCreateHouseModal = true;
    this.createHouseForm.setValue({
      price: house.price,
      address: {
        street: house.address.street,
        district: house.address.district,
        country: house.address.country,
      },
      parking: house.parking,
      bathrooms: house.bathrooms,
      bedrooms: house.bedrooms,
      description: house.description,
      contact: house.contact,
      image: house.image,
    });
  }

  public closeModal() {
    this.showCreateHouseModal = false;
    this.isEditing = false;
    this.clearForm();
  }
}
