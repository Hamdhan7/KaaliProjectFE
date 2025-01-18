import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {FooterComponent} from "./footer/footer.component";
import {LoadingComponent} from "./loading/loading.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, MatSlideToggleModule, NavBarComponent, FooterComponent, LoadingComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'DarkxForgeAngular';

  isLoading = true;  // Starts with loading
  showMainContent = false; // Main content visibility flag

  ngOnInit() {
    // Simulate loading delay and fade-out effect
    setTimeout(() => {
      this.isLoading = false; // Stop the loading animation
      this.showMainContent = true; // Show the main content
    }, 2300); // Adjust time according to your animation length
  }

}
