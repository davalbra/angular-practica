import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private RestService: RestService) {}
  public listdeVideos: any = [];

  ngOnInit(): void {
    this.cargarData();
    // this.listdeVideos = [
    //   {
    //     title: 'Video 1',
    //     subtitle: 'Subtitdsdle video 1',
    //     img: 'https://i.ytimg.com/an_webp/18brXPgIZYE/mqdefault_6s.webp?du=3000&sqp=COjBiJgG&rs=AOn4CLDtlG-J97nbHJSJkpNUznJCwgCL4g',
    //   },
    //   {
    //     title: 'Video 2',
    //     subtitle: 'Subtitle video 2',
    //     img: 'https://i.ytimg.com/an_webp/Q3Ys5xi1_7A/mqdefault_6s.webp?du=3000&sqp=CMC2iJgG&rs=AOn4CLD5aHWYPZDqK_qr5TU-Ro3g06bBFQ',
    //   },
    //   {
    //     title: 'Video 3',
    //     subtitle: 'Subtitle video 3',
    //     img: 'https://i.ytimg.com/vi/92Sm5OYPu-s/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDy63aWpjwtcBkXTV3h6mu5b7vEYA',
    //   },
    // ];
  }
  public cargarData() {
    this.RestService.get(
      'https://productos-375bf-default-rtdb.firebaseio.com/collection.json'
    ).subscribe((respuesta: any) => {
      console.log('Property', respuesta[0]);
      for (let i = 0; i < 20; i++) {
        this.listdeVideos[i] = respuesta[i];
      }
    });
  }
}
