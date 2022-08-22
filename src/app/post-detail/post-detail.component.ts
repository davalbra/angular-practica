import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  public respuesta: any = [];
  public comentarios: any = [];
  public comentarioText: string = '';
  public form!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private RestService: RestService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((parMap: any) => {
      const { params } = parMap;
      console.log(parseInt(params.variable) - 50125);
      console.log(parMap);
      let rutaid = parseInt(params.variable) - 50125;
      this.cargarData(rutaid + '');
    });
    this.form = this.formBuilder.group({
      textAreaComentario: [''],
    });
  }
  cargarData(id: string) {
    this.RestService.get(
      `https://productos-375bf-default-rtdb.firebaseio.com/collection/${id}.json`
    ).subscribe((respuesta) => {
      this.respuesta = respuesta;
    });
  }
  public enviarData() {
    this.RestService.post(`http://localhost:3000/comments`, this.form.value);
  }
}
