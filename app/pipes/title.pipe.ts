import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "title"
})
export class TitlePipe implements PipeTransform {

    transform(value: string) {
        if(!value) return "";

        switch(value.toUpperCase()){
            case "M":
            case "MALE":
                return "Mr.";
            case "F":
            case "FEMALE": 
                return "Ms.";
            default:
                return "";
        }
    }

}