import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, Input, OnInit, Output, TemplateRef, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 变更检测策略  改为onPush之后只有在Input属性发生改变才会更新组件  有利于提升性能
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @ViewChild('dot', { static: true })
  doRef: TemplateRef<any>;

  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();

  @Input()
  activeIndex: number;
  constructor() { }

  ngOnInit() {
  }

  onChangeSlide(type: 'pre' | 'next') {
    console.log(type);
    this.changeSlide.emit(type);
  }
}
