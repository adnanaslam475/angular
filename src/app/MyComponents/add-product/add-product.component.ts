import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Product } from 'src/app/reducers/product/product.model';
// import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.interface';
import { login } from 'src/app/store/actions/app.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    title: 'aaaa',
    description: '',
    price: 0,
    active: false,
  };
  images: File[] = [];
  urls: any[] = [];
  imageUploading = false
  isSubmitting = false
  @Output() productAdd: EventEmitter<Product> = new EventEmitter();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private storage: AngularFireStorage,
    private http: HttpClient, public router: Router, private store: Store<IAppState>) { }
  // ngAfterContentInit() { console.log('ngAfterContentInit_runonce', this.product.title) }
  // ngAfterContentChecked() { console.log('ngAfterContentChecked', this.product.title) }
  // ngAfterViewChecked() { console.log('ngAfterViewChecked', this.product.title) }
  // ngDoCheck() { console.log('ngDoCheck', this.product.title) }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit', this.product.title)
  }

  ngOnChanges(p: any, c: any, firstChange: boolean) {
    console.log('ngOnChanges2', p, c, firstChange)
  }

  ngOnInit() {
    // console.log('ngOnInit',)
  }

  async onSubmit() {
    const finl: any = { ...this.product, images: this.images };
    console.log('onSubmit')
    try {
      this.productAdd.emit(finl);
      // const res = await this.http.post('http://localhost:5000/product', finl, { headers: { 'content-type': 'application/json' } })
      this.store.dispatch(login(finl));
      this.router.navigate(['/'])
    } catch (error) {
      console.log('onSubmit_e')
    }
  }

  onRemove(event: File) {
    this.images.splice(this.images.indexOf(event), 1);
  }

  onCatch(s: any) {
    this.product.title = s
  }

  onSelect(e: any) {
    const len = Array.from(e.addedFiles)
    e.addedFiles.forEach((file: File) => {
      const filePath = `${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url: string) => {
              this.urls.push(url);
              this.images.push(file);
              if (this.urls.length == len.length) {
                this.imageUploading = false
                console.log('runnnnnnnnn1')
              }
            });
          })
        )
        .subscribe(r => {
          console.log('runnnnnnnnn2', r)
        });
    });
    console.log('runnnnnnnnn3')
  }
}
