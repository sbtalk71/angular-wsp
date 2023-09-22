import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("userName should be 'shantanu",()=>{
    expect(service.userName).toBe('shantanu')
    
  });

  it("greet() should return 'Hello shantanu",()=>{
    console.log(service.userName)
    expect(service.greet()).toBe('Hello shantanu');
  });
});
