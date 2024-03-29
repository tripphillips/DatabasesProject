import { OnInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

}

@Component({
  selector: 'app-known-chord-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <td *ngFor="let chord of chords" class="chord-view-cell">
  <svg class="chord-view">
      <rect class = "header" x="0" y= "0" [ngStyle]="{'display':showHeader(chord.max_fret)}"/>
    <g id="frets">
      <rect class = "fret-shadow" x="0" y=20%"/>
      <rect class = "fret-shadow" x="0" y=40%/>
      <rect class = "fret-shadow" x="0" y=60%/>
      <rect class = "fret-shadow" x="0" y=80%/>
      <text x="10" y="14%" font-family="sans-serif" font-size="20px" fill="black"> {{getFretNumber(chord.max_fret,1)}} </text>
      <rect class = "fret" x="0" y= 20%/>
      <text x="10" y="34%" font-family="sans-serif" font-size="20px" fill="black"> {{getFretNumber(chord.max_fret,2)}} </text>
      <rect class = "fret" x="0" y= 40%/>
      <text x="10" y="54%" font-family="sans-serif" font-size="20px" fill="black"> {{getFretNumber(chord.max_fret,3)}} </text>
      <rect class = "fret" x="0" y= 60%/>
      <text x="10" y="74%" font-family="sans-serif" font-size="20px" fill="black"> {{getFretNumber(chord.max_fret,4)}} </text>
      <rect class = "fret" x="0" y= 80%/>
    </g>
    <g id="strings">
      <rect class = "string-shadow" x=10% y="0"/>
      <rect class = "string-shadow" x=25% y="0"/>
      <rect class = "string-shadow" x=40% y="0"/>
      <rect class = "string-shadow" x=55% y="0"/>
      <rect class = "string-shadow" x=70% y="0"/>
      <rect class = "string-shadow" x=85% y="0"/>
      <rect [ngClass]="getStringClass(chord.string6)" x=10% y="0"/>
      <rect [ngClass]="getStringClass(chord.string5)" x=25% y="0"/>
      <rect [ngClass]="getStringClass(chord.string4)" x=40% y="0"/>
      <rect [ngClass]="getStringClass(chord.string3)" x=55% y="0"/>
      <rect [ngClass]="getStringClass(chord.string2)" x=70% y="0"/>
      <rect [ngClass]="getStringClass(chord.string1)" x=85% y="0"/>
    </g>
    <g id="positions">
      <circle class="position" cx=12% cy=20% r="15" [ngStyle]="{'display':getFingerPosition(1,chord.string6,chord.max_fret)}"/>
      <circle class="position" cx=27% cy=20% r="15" [ngStyle]="{'display':getFingerPosition(1,chord.string5,chord.max_fret)}"/>
      <circle class="position" cx=42% cy=20% r="15" [ngStyle]="{'display':getFingerPosition(1,chord.string4,chord.max_fret)}"/>
      <circle class="position" cx=57% cy=20% r="15" [ngStyle]="{'display':getFingerPosition(1,chord.string3,chord.max_fret)}"/>
      <circle class="position" cx=72% cy=20% r="15" [ngStyle]="{'display':getFingerPosition(1,chord.string2,chord.max_fret)}"/>
      <circle class="position" cx=87% cy=20% r="15" [ngStyle]="{'display':getFingerPosition(1,chord.string1,chord.max_fret)}"/>

      <circle class="position" cx=12% cy=40% r="15" [ngStyle]="{'display':getFingerPosition(2,chord.string6,chord.max_fret)}"/>
      <circle class="position" cx=27% cy=40% r="15" [ngStyle]="{'display':getFingerPosition(2,chord.string5,chord.max_fret)}"/>
      <circle class="position" cx=42% cy=40% r="15" [ngStyle]="{'display':getFingerPosition(2,chord.string4,chord.max_fret)}"/>
      <circle class="position" cx=57% cy=40% r="15" [ngStyle]="{'display':getFingerPosition(2,chord.string3,chord.max_fret)}"/>
      <circle class="position" cx=72% cy=40% r="15" [ngStyle]="{'display':getFingerPosition(2,chord.string2,chord.max_fret)}"/>
      <circle class="position" cx=87% cy=40% r="15" [ngStyle]="{'display':getFingerPosition(2,chord.string1,chord.max_fret)}"/>

      <circle class="position" cx=12% cy=60% r="15" [ngStyle]="{'display':getFingerPosition(3,chord.string6,chord.max_fret)}"/>
      <circle class="position" cx=27% cy=60% r="15" [ngStyle]="{'display':getFingerPosition(3,chord.string5,chord.max_fret)}"/>
      <circle class="position" cx=42% cy=60% r="15" [ngStyle]="{'display':getFingerPosition(3,chord.string4,chord.max_fret)}"/>
      <circle class="position" cx=57% cy=60% r="15" [ngStyle]="{'display':getFingerPosition(3,chord.string3,chord.max_fret)}"/>
      <circle class="position" cx=72% cy=60% r="15" [ngStyle]="{'display':getFingerPosition(3,chord.string2,chord.max_fret)}"/>
      <circle class="position" cx=87% cy=60% r="15" [ngStyle]="{'display':getFingerPosition(3,chord.string1,chord.max_fret)}"/>

      <circle class="position" cx=12% cy=80% r="15" [ngStyle]="{'display':getFingerPosition(4,chord.string6,chord.max_fret)}"/>
      <circle class="position" cx=27% cy=80% r="15" [ngStyle]="{'display':getFingerPosition(4,chord.string5,chord.max_fret)}"/>
      <circle class="position" cx=42% cy=80% r="15" [ngStyle]="{'display':getFingerPosition(4,chord.string4,chord.max_fret)}"/>
      <circle class="position" cx=57% cy=80% r="15" [ngStyle]="{'display':getFingerPosition(4,chord.string3,chord.max_fret)}"/>
      <circle class="position" cx=72% cy=80% r="15" [ngStyle]="{'display':getFingerPosition(4,chord.string2,chord.max_fret)}"/>
      <circle class="position" cx=87% cy=80% r="15" [ngStyle]="{'display':getFingerPosition(4,chord.string1,chord.max_fret)}"/>
    </g>
    </svg>
    <label class="chord-name" for="chord-view-cell"> {{chord.chord_name}} </label>
    </td>
    `
})

export class KnownChordComponent implements OnInit {

  apiURL = 'http://localhost:8000/users/';
  constructor(private http: HttpClient, private svc: ApiService) { }
  chords: any = [];
  getChords() {
    const obs = this.http.get(this.apiURL + this.svc.user.id + '/chords');
    obs.subscribe((response) => {
      this.chords = response;
      this.svc.knownChords = response;
      console.log('CHORDS');
      console.log(this.chords);
    });
  }
  ngOnInit() {
    this.getChords();
  }

  // Checks to see if a string is open or closed and selects the correct styling class.
  getStringClass(string) {
    switch (string) {
      case -1:
        return 'muted-string';
      default:
        return 'open-string';
    }
  }

  // Checks to see if a finger position is in use by the chord.
  getFingerPosition(fret, position, max) {
    if (position <= 0) {
      return 'none';
    }
    if (max - 1 === 0) {
      if (fret === position) {
        return 'block';
      } else {
        return 'none';
      }
    }
    if (max - 2 === 0) {
      if (fret === position) {
        return 'block';
      } else {
        return 'none';
      }
    } else if (max - 3 === 0) {
      if (fret === position) {
        return 'block';
      } else {
        return 'none';
      }
    } else {
      if ((fret + (max - 4)) === position) {
        return 'block';
      } else {
        return 'none';
      }
    }
  }

  // Gets the fret number.
  getFretNumber(max, index) {
    if (max - 1 === 0) {
      switch (index) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
          return 3;
      }
    }
    else if (max - 2 === 0) {
      switch (index) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
      }
    } else if (max - 3 === 0) {
      switch (index) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
      }
    } else {
      switch (index) {
        case 1:
          return max - 3;
        case 2:
          return max - 2;
        case 3:
          return max - 1;
        case 4:
          return max;
      }
    }
  }

  // If the max chord - 4 > 0 dont show the header.
  showHeader(max) {
    if (max - 4 <= 0) {
      return 'block';
    } else {
      return 'none';
    }
  }

}

@Component({
  selector: 'app-username',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
    <label class="username">Current User: {{getUser()}}</label>
  `
})
export class UsernameComponent {

  constructor(private http: HttpClient, private svc: ApiService) { }

  getUser() {
    return this.svc.user.username;
  }

}
