import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  transform(value: String, args?: any): any {

    if(value == 'E' && args == 'ESP'){
      return 'Electronico';
      }
      else if (value == 'A' && args == 'ENG'){
        return 'Groserry';
      }
      else if (value == 'E' && args == 'ENG'){
        return 'Electonic';
      }
      else if (value == 'A' && args == 'ESP'){
        return 'Abarrotes';
    }
    return null;
  }

}
