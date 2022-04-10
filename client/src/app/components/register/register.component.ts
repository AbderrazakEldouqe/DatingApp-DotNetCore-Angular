import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        console.log('res', res);
        this.cancel();
      },
      error: (err) => {
        console.log('err', err);
        this.toastr.error(err.error);
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
