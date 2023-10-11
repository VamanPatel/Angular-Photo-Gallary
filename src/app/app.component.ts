import { Component } from '@angular/core';
import { Column } from './Shared/Modals/Column.Modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Photo-Keeper';

  tableColumnData: Column[] = [
    {
      headerData: 'id',
      keyName: 'id',
      isSort: true,
      isText: true,
    },
    {
      headerData: 'name',
      isSort: true,
      keyName: 'userName',
      isText: true,
    },
    {
      headerData: 'phone',
      keyName: 'phone',
      isSort: true,
      isText: true,
    },
    {
      headerData: 'age',
      keyName: 'age',
      isSort: true,
      isText: true,
    },
    {
      headerData: 'address',
      keyName: 'address',
      isSort: true,
      isText: true,
    },
    {
      headerData: 'gender',
      keyName: 'genderData',
      isSort: false,
      isDropdown: true,
      dropdownSelectValue: 'genderName',
    },
    {
      headerData: 'action',
      keyName: '',
      isSort: false,
      isButton: true,
      buttonName: 'Submit',
    },
  ];

  sort: boolean = true;
  showPaginator: boolean = true;
  showRowSelect: boolean = false;

  userData = [
    {
      id: 1,
      userName: 'Vaman',
      phone: '2323',
      age: 12,
      address: 'c-2 India',
      isSelected: false,
      genderData: [
        {
          genderName: 'Male',
        },
        {
          genderName: 'Female',
        },
      ],
    },
    {
      id: 2,
      userName: 'Jeet',
      phone: '7172',
      age: 34,
      address: 'c-3 India',
      isSelected: false,
      genderData: [
        {
          genderName: 'Male',
        },
        {
          genderName: 'Female',
        },
      ],
    },
    {
      id: 3,
      userName: 'Mayur',
      phone: '7121',
      age: 39,
      address: 'r-5 India',
      isSelected: false,
      genderData: [
        {
          genderName: 'Male',
        },
        {
          genderName: 'Female',
        },
      ],
    },
    {
      id: 4,
      userName: 'Ravi',
      phone: '1231',
      age: 19,
      address: 'i-4 India',
      isSelected: false,
      genderData: [
        {
          genderName: 'Male',
        },
        {
          genderName: 'Female',
        },
      ],
    },
    {
      id: 5,
      userName: 'Foram',
      phone: '4444',
      age: 10,
      address: 'k-9 India',
      isSelected: false,
      genderData: [
        {
          genderName: 'Male',
        },
        {
          genderName: 'Female',
        },
      ],
    },
    {
      id: 6,
      userName: 'Bosco',
      phone: '7127',
      age: 43,
      address: 'f-0 India',
      isSelected: false,
      genderData: [
        {
          genderName: 'Male',
        },
        {
          genderName: 'Female',
        },
      ],
    },
  ];
}
