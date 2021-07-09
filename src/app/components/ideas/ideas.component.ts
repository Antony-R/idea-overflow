import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { IdeaService } from 'src/app/services/idea.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  ideas: Idea[] = [];
  globalIdeas: Idea[] = [];
  viewDetails: boolean = false;
  currentIdea: Idea | null = null;
  message: string = 'No ideas in the list :(';

  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.ideaService.getIdeas().subscribe(ideas => {
      //console.log(ideas);
      this.ideas = ideas;
      this.globalIdeas = ideas;
    }, error => {
      this.message = 'Some error occured :(';
    });
  }

  toggle(event: Event, idea: Idea){
    if (this.currentIdea?.id == idea.id) {
      this.viewDetails = false;
      this.currentIdea = null;
    }
    else {
      this.viewDetails = true;
      this.currentIdea = idea;
    }
  }

  getAllIdeas(){
   this.ideas = this.globalIdeas;
  }
  
  getStoryIdeas(){
    this.ideas = this.globalIdeas.filter(idea => idea.category == 'story');
  }

  getProjectIdeas(){
    this.ideas = this.globalIdeas.filter(idea => idea.category == 'project');
  }

  getGeneralIdeas(){
    this.ideas = this.globalIdeas.filter(idea => idea.category == 'general');
  }

}
