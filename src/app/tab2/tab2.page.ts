import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {
  page: string = '';

  consultarCep() {
      console.log('123');
  }

  constructor(private router: Router) { 

  }


  redirectToOtherPage() {
  this.router.navigate(['./tab3']);
}
}