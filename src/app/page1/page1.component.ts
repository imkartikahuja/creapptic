import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';
import {Router} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public modalRef: BsModalRef;
  modalText:string = "";
  public subscriptions: Subscription[] = [];
  modalClosed = 0;

  constructor(private modalService: BsModalService,private router:Router) {}

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.subscriptions.push(this.modalService.onHidden.subscribe((reason: string) => {
      this.modalClosed = 1;
      this.unsubscribe();
    }));


    this.modalRef = this.modalService.show(template);
  }

  public unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
  onLoadPage(){
    this.router.navigate(['/page2']);
  }

}
