import { Routes } from '@angular/router';
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route for home
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },

];
