import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Product } from 'src/app/reducers/product/product.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent {
  product: Product = {
    title: '',
    description: '',
    price: 0,
    images: [],
    active: false
  };
  downloadURL: Observable<[]>;

  @Output() productAdd: EventEmitter<Product> = new EventEmitter();

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private storage: AngularFireStorage) {

  }
  ngOnInit(): void {

  }
  onSubmit() {
    this.productAdd.emit(this.product)
  }
  async imageUpload(e: HTMLInputElement | any) {
    console.log('e', e.target.files)
    let arr = Array.from(e.target.files)
    // let newar
    for (let file in arr) {
      var n = Date.now();
      // const file = e.target.files;
      const filePath = `RoomsImages/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`RoomsImages/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe((url: any) => {
              console.log('url---->', url);
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log('ulr--------->', url);
          }
        });
    }
  }
}
