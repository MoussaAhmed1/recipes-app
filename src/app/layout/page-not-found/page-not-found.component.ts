import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit {
  message: string | undefined;
  constructor(private activatedRout: ActivatedRoute) {}
  ngOnInit(): void {
    this.message = this.activatedRout.snapshot.data['message'];
    this.activatedRout.data.subscribe((data) => {
      this.message = data['message'];
    });
  }
}
