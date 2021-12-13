import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  // tslint:disable-next-line:typedef
  getAllUser() {
    this.adminService.getAll().subscribe(res => {
      console.log(res);
      this.users = res.data;
    });
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: any) {
    this.adminService.deleteUser(id).subscribe(res => {
      console.log(res);
      this.getAllUser();
    });
  }
}
