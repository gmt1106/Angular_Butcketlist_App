import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from '../models/list';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
})
export class AddListComponent implements OnInit {
  newList: List = {
    title: '',
    category: '',
    description: '',
    _id: '',
  };

  constructor(private listServ: ListService) {}

  ngOnInit(): void {}

  @Output() addList: EventEmitter<List> = new EventEmitter<List>();

  public onSubmit() {
    console.log('this will be added', this.newList);
    this.listServ.addList(this.newList).subscribe((response: any) => {
      console.log(response);
      if (response['success'] && response.success == true) {
        // If success, update the view-list component
        this.addList.emit(this.newList);
      }
    });
  }
}
