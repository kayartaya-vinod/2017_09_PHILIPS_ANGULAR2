import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "age"
})
export class AgePipe implements PipeTransform {
    transform(dob: string, flag: number = 1) {
        if (!dob || typeof dob != "string") return dob;

        var dt: Date = new Date(dob);
        var diff: Date = new Date(Date.now() - dt.getTime());

        var y = diff.getFullYear() - 1970;
        var m = diff.getMonth();
        var d = diff.getDate();

        switch(flag){
            case 1:
                return `${y} years.`;
            case 2:
                return `${y} years and ${m} months.`;
            default:
                return `${y} years, ${m} months and ${d} days.`;
        }
    }
}