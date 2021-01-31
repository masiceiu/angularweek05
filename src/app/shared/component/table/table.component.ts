import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DistrictInfo} from '../../interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() theadClass = '';
  @Input() showActionColumn = true;
  @Input() districtList: DistrictInfo[] = [];
  @Output() rowRemoveByIndex = new EventEmitter<number>();
  @Output() rowRemoveBySelected = new EventEmitter<DistrictInfo[]>();

  // @Input() showCaption = true;
  constructor() {
    // -- theadClass
    // bg-primary, bg-success, bg-info, bg-warning, bg-danger, bg-secondary, bg-dark and bg-light
  }

  ngOnInit(): void {
  }
  public deleteRowByIndex(index: number): void{
    // if (index > 0){
      // const removedItems = this.districtList.splice(index, 1);
      this.rowRemoveByIndex.emit(index);
    // }
  }
  public deleteRowBySelected(): void{
    if (this.districtList.length > 0){
      // const removedItems = this.districtList.splice(index, 1);
      // console.log(removedItems);
      // this.rowRemoveBySelected.emit(removedItems);
    }
  }
}
