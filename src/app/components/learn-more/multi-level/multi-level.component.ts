import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MultiLevelAnimationService } from '../../../services/multi-level-animation/multi-level-animation.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'cpo-multi-level',
  standalone: true,
  imports: [],
  templateUrl: './multi-level.component.html',
  styleUrl: './multi-level.component.scss'
})
export class MultiLevelComponent implements OnInit{
  @ViewChild('mltLevelEl', { static: true }) mltLevelEl!: ElementRef;
  @ViewChild('sphereEl', { static: true }) sphereEl!: ElementRef;
  constructor(private multiLevel: MultiLevelAnimationService) {}
  ngOnInit(): void {
    this.multiLevel.initMultiLevelAnim(this.mltLevelEl.nativeElement);
    this.multiLevel.initSphereAnim(this.sphereEl.nativeElement);
    
  }
}
