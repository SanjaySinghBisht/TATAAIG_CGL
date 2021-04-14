import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-old-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit {
  modalRef: BsModalRef;
  config = { class: "theme-modal" };
  openMenu = false;
  closeMenu = false;
  hidenav: boolean = false;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  menuOpen() {
    this.openMenu = !this.openMenu;
    this.hidenav = false;
  }
  menuClose() {
    this.hidenav = true
    this.closeMenu = !this.closeMenu
    setTimeout(() => {
      this.openMenu = !this.openMenu
      this.closeMenu = !this.closeMenu
    }, 200);
  }

  ngOnInit(): void {
    this.hideShowNav();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.hideShowNav();
    if(window.innerWidth < 1000){
      this.openMenu=false;
    }
  }
  
  hideShowNav(){
    if (window.innerWidth > 1000) {
      this.hidenav = false;
    } else {
      this.hidenav = true;
    }
  }
}
