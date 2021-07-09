import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteRequest } from 'src/app/models/delete-request';
import { DeleteRequestService } from 'src/app/services/delete-request.service';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.css']
})
export class DeleteRequestComponent implements OnInit {

  deleteRequest: DeleteRequest = {id: '', reason: ''}

  constructor(private deleteRequestService: DeleteRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.deleteRequest.id != ''){
      this.deleteRequestService.addDeleteRequest(this.deleteRequest);
      alert('Sent Successfully :)');
      this.router.navigateByUrl('');
    }
    this.deleteRequest = {id: '', reason: ''};
  }

}
