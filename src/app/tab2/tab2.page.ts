import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  formulario!: FormGroup;
  
  constructor( private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      temario:['', [Validators.required, Validators.minLength(3)]],
      titulo: [ '', [Validators.required, Validators.minLength(3)]],
      apunte: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }
  onSubmit(){
    if (this.formulario.valid) {
       const { fecha, nombre,temario, titulo,apunte } = this.formulario.value;
       console.log('fecha:', fecha);
       console.log('nombre:', nombre);
       console.log('temario:', temario);
       console.log('titulo:', titulo);
       console.log('apunte:', apunte);
      // Aquí puedes implementar la lógica para iniciar sesión
      
    } else {
      console.log('Formulario inválido');
    }
  }
}
