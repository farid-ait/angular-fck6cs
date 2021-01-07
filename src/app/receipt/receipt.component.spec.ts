import { TestBed, async } from "@angular/core/testing";
import { ReceiptComponent } from "./receipt.component";

describe("ReceiptComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptComponent]
    }).compileComponents();
  }));

  it("should render 'items' in a h2 tag", () => {
    const fixture = TestBed.createComponent(ReceiptComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain("Items");
  });

  it("should render '6.66' in  taxes", () => {
    const fixture = TestBed.createComponent(ReceiptComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#taxes").textContent).toContain("6.66");
  });

  it("should render '74.64' in total", () => {
    const fixture = TestBed.createComponent(ReceiptComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#total").textContent).toContain("74.64");
  });
});
