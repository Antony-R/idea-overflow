import { Component, OnInit } from '@angular/core';
import { IdeaService } from 'src/app/services/idea.service';
import { Idea } from 'src/app/models/idea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-idea',
  templateUrl: './add-idea.component.html',
  styleUrls: ['./add-idea.component.css']
})
export class AddIdeaComponent implements OnInit {

  idea: Idea = {
    title: '',
    content: '',
    postedDate: undefined,
    category: 'general',
    emailId: 'Not interested in sharing info !',
    upiId: 'Not interested in sharing info !'
  }

  constructor(private ideaService: IdeaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.idea)
    this.idea.postedDate = new Date();
    this.ideaService.addIdea(this.idea);
    alert('Posted Successfully :)');
    this.router.navigateByUrl('');
    this.idea = {
      title: '',
      content: '',
      postedDate: undefined,
      category: 'general',
      emailId: 'Not interested in sharing info !',
      upiId: 'Not interested in sharing info !'
    }
  }

}
