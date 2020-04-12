import { Component, OnInit } from '@angular/core';
import { LoadingController} from '@ionic/angular';
import { NetworkStatus } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';

const { Network } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page implements OnInit {

  status: NetworkStatus;
  batsForm: FormGroup;

  thenumbers = new Array(100);


  public show = true;
  public spinner = false;
  public loading = null;
  public isSubmitted = false;
  public startGCS = 15;
  public nextID = 1;
  public age: any;
  public period: any;

  constructor(
    private loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {


    this.batsForm = this.formBuilder.group({
      bp : ['', [Validators.required, Validators.min(0), Validators.max(240)]],
      gcs : ['', [Validators.required, Validators.min(3), Validators.max(15)]],
      rr : ['', [Validators.required, Validators.min(0), Validators.max(60)]],
      spo2 : ['', [Validators.required, Validators.min(50), Validators.max(100)]],
      hr : ['', [Validators.required, Validators.min(0), Validators.max(180)]],
      age : ['', [Validators.required, Validators.min(0), Validators.max(115)]],
      period : ['', [Validators.required]],
      penetrating : ['', [Validators.required]],
      velocity : ['', [Validators.required]],
      callsign : ['', [Validators.required]]
    });

    this.batsForm.controls.period.setValue('years');

    this.formControlValueChanged();
  }

ionViewDidEnter() {
    this.getStatus();
    this.nextID = 1;
  }

  async getStatus() {
    try {
      this.status = await Network.getStatus();
      console.log(this.status);
    } catch (e) {
      console.log('Error', e);
    }
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Calculating score...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  get errorControl() {
    return this.batsForm.controls;
  }

  // tslint:disable-next-line: max-line-length
  // https://www.infragistics.com/community/blogs/b/infragistics/posts/how-to-do-conditional-validation-on-valuechanges-method-in-angular-reactive-forms-

  // https://stackoverflow.com/questions/47821809/rangeerror-maximum-call-stack-size-exceeded-when-using-valuechanges-subscribe
  
  formControlValueChanged() {
    const spo2Control = this.batsForm.get('spo2');
    const rrControl = this.batsForm.get('rr');
    this.batsForm.get('rr').valueChanges.pipe(distinctUntilChanged()).subscribe(
        (rr: number) => {
            console.log(rr);
            if ( rr !== null && ( rr > 0 || rr < 50 )) {
                spo2Control.setValidators([Validators.min(50), Validators.max(100)]);
            } else  {
                spo2Control.setValidators([Validators.required, Validators.min(50), Validators.max(100)]);

            }
            spo2Control.updateValueAndValidity();
        });
    this.batsForm.get('spo2').valueChanges.pipe(distinctUntilChanged()).subscribe(
        (spo2: number) => {
            console.log(spo2);
            if (spo2 !== null && ( spo2 > 50 || spo2 < 101 )) {
                rrControl.setValidators([Validators.min(0), Validators.max(60)]);
            } else  {
                rrControl.setValidators([Validators.required, Validators.min(0), Validators.max(60)]);

            }
            rrControl.updateValueAndValidity();
        });

  }

  submitForm() {
      console.log('Form submitted');
      this.isSubmitted = true;
      this.spinner = true;
      console.log(this.batsForm.value);
    }


}
