import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'angular-taskman';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {

            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            if(this.currentScreenSize == 'Small' || this.currentScreenSize == 'XSmall'){
              this.sidenav.mode = 'over';
		          this.sidenav.close();
            } else {
              this.sidenav.mode = 'side';
		          this.sidenav.open();
            }
          }
        }
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
