import { NgModule, Component, Directive, OnInit, ElementRef, Input } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


@Directive({
    selector: "[highlight]"
})
class HighlightDirective implements OnInit{

    @Input()
    private highlight: string;

    constructor(private el: ElementRef){
    }

    ngOnInit(): void {
        this.el.nativeElement.style.backgroundColor = this.highlight || "lime";
    }
}











@Component({
    selector: "app",
    templateUrl: "./app-template.html"
})
class AppComponent {
    private highlightColor: string = "lightblue";
}

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HighlightDirective ],
    bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);