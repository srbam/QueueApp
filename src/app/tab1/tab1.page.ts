import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import axios from 'axios';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}

  takevalues() {
    const p0 = document.getElementById('ele0');
    const p1 = document.getElementById('ele1');
    const p2 = document.getElementById('ele2');
    const p3 = document.getElementById('ele3');
    const p4 = document.getElementById('ele4');
    const p5 = document.getElementById('ele5');

    if (p0) {
      axios
        .get('http://localhost:3000/nextpassword')
        .then((response) => {
          const data = response.data;
          p0.textContent = data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (p1) {
      axios
        .get('http://localhost:3000/nextpassword')
        .then((response) => {
          const data = response.data;
          p1.textContent = data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (p2) {
      axios
        .get('http://localhost:3000/nextpassword')
        .then((response) => {
          const data = response.data;
          p2.textContent = data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (p3) {
      axios
        .get('http://localhost:3000/nextpassword')
        .then((response) => {
          const data = response.data;
          p3.textContent = data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (p4) {
      axios
        .get('http://localhost:3000/nextpassword')
        .then((response) => {
          const data = response.data;
          p4.textContent = data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (p5) {
      axios
        .get('http://localhost:3000/nextpassword')
        .then((response) => {
          const data = response.data;
          p5.textContent = data;
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }
}
