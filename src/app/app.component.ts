import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentComponent } from './component/assignment/assignment.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AssignmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment1';
}
