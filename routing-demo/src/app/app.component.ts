import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessagesService } from './core';
import { Router, NavigationEnd } from '@angular/router';
import { SpinnerService } from './core';
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    public messagesService: MessagesService,
    private router: Router,
    public spinnerService: SpinnerService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.setPageTitles();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }

  onDisplayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages']}}]);
    this.messagesService.isDisplayed = true;
  }

  private setPageTitles(): void {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.routerState.root),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      switchMap(route => route.data)
   )
   .subscribe(
     data => this.titleService.setTitle(data['title'])
   );
  }
 }

