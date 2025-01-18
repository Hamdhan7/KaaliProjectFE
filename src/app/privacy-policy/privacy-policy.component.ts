import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
    imports: [
        MatCard,
        MatCardTitle,
        MatCardContent,
        FooterComponent
    ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
