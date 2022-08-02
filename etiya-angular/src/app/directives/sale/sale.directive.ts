import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective implements OnInit {

  @Input() onSaleColor:string="yellow"
  @Input() onSaleText:string="On Sale"
  @Input() inOnSale:boolean=true

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    
  }

  ngOnInit():void{
    if(!this.inOnSale) return
    this.changeBackgroundColor("green")
    this.addSaleText()
   
  }
  
  @HostListener("mouseenter") onMouseEnter(){
    if(!this.inOnSale) return
    this.changeBackgroundColor(this.onSaleColor)
    
  }

  @HostListener("mouseleave") onMouseLeave(){
    if(!this.inOnSale) return
    this.changeBackgroundColor("green")
  }

  changeBackgroundColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor=color
  }
  addSaleText(){
    const saleTextElement:HTMLElement=this.renderer.createElement("span")
    saleTextElement.innerText=this.onSaleText

    this.renderer.appendChild(this.elementRef.nativeElement,saleTextElement)
  }
}
