import { OffPipe } from './off.pipe';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('OffPipe', () => {
  
  describe('unit test', () => {
    it('create an instance', () => {
      const pipe = new OffPipe();
      expect(pipe).toBeTruthy();
    });

    it('method test', () => {
      const pipe = new OffPipe();
      expect(pipe.transform(1000, 50)).toBe(500);
      expect(pipe.transform(100, 10)).toBe(90);
    });
  });


  describe('behavioral test', () => {
    @Component({
      template: `price: {{ price | off: percentageDiscount }}`
    })

    class TestComponent {
      price = 4000;
      percentageDiscount = 25;
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let el: HTMLElement;

    beforeEach(() => {
      TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting()
      ).configureTestingModule({
        declarations: [
          OffPipe,
          TestComponent
        ]
      })

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('component test', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain('price: 3000');
    });
  });

});
