import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { Banner } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  banner: Banner[];

  carouselIndex: number;

  @ViewChild(NzCarouselComponent, { static: true }) private NzCarouselComponent: NzCarouselComponent;

  constructor(private homeService: HomeService) {
    this.homeService.getBanners().subscribe(res => {
      console.log(res);
      this.banner = res;
    })
  }

  ngOnInit() {
  }


  beforeChange({ to }) {
    this.carouselIndex = to;
  }

  onChangeSlide(type: string) {
    console.log(type);
    this.NzCarouselComponent[type]();
  }
}
