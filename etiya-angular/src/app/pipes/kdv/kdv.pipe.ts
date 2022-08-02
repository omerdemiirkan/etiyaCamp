import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv', //uniq ismi
})
export class KdvPipe implements PipeTransform {
  transform(value: number, kdvValue: number): number {
    //value: pipe uyguladıgımız veri
    //retrun yeni degiştirdigimiz veri
    return value + value * kdvValue;
  }
}
