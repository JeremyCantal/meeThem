import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  private form : FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
  }

  ngOnInit() {
  }

}
