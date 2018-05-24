import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "filterBy"
})
export class FilterPipe implements PipeTransform {

    transform(arr: Array<any>, token:string, fields: Array<string>) {
        if(!arr || (arr instanceof Array ==false)) return arr;
        
        // if token is undefined/null or empty string
        if(!token) return arr;

        let result = arr.filter(c=>this.isTokenFound(token, c, fields));

        return result;
    }

    isTokenFound(token, obj, fields): boolean {
        var re = new RegExp(token, "i");
        if(fields && fields instanceof Array){
            for(let i=0; i<fields.length; i++){
                let fld = fields[i];
                if(re.test(obj[fld])){
                    return true;
                }
            }
        }
        else{
            for(let prop in obj){
                if(re.test(obj[prop])){
                    return true;
                }
            }
        }
        return false;    
    }

}