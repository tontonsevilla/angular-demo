import { AuthService } from './../services/auth.service';
import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  Input
} from '@angular/core';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;

  @Input() set showAuthed(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit() {
    this.authService.isAuthenticate.subscribe(isAuthenticated => {
      if (
        (isAuthenticated && this.condition) ||
        (!isAuthenticated && !this.condition)
      ) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
