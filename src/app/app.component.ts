import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  images = [
    { src: 'assets/pottery1.webp', title: 'piece1', key: 'project1' },
    { src: 'assets/pottery2.webp', title: 'piece2', key: 'project2' },
    // Add more images as needed
  ];
}