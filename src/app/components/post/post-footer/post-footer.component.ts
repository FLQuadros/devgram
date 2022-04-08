import { Component, Input, OnInit } from '@angular/core';
import * as faker from 'faker'

@Component({
  selector: 'post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.css']
})
export class PostFooterComponent implements OnInit {

  @Input()
  postTime!: string | number
  

  @Input() username!: string

  pulse: boolean = false
  saveChecked: boolean = false
  likeChecked: boolean = false
  randomUserImage: string = `https://i.pravatar.cc/${faker.datatype.number(1000)}`
  randomUsername: string = faker.internet.userName().toLowerCase()
  randomNumber: number = faker.datatype.number(999)
  commentary: string = faker.lorem.sentence()
  comment: string = ''

  constructor() {
    faker.setLocale('pt_BR')
  }

  ngOnInit(): void {
    this.postTimeRandom()
  }

  changeLikeCheckedValue() {
    this.pulse = true
    this.likeChecked = !this.likeChecked
    setTimeout(() => this.pulse = false, 300)
  }

  postTimeRandom() {
    let valor = Math.random()
    if (valor < 0.5) {
      this.postTime = Math.ceil(Math.random()*59)
      if( this.postTime == 1) {
        this.postTime = `${this.postTime} minute ago`
      } else {
        this.postTime = `${this.postTime} minutes ago`
      }
    } else if (valor < 0.8) {
      this.postTime = Math.ceil(Math.random()*23)
      if( this.postTime == 1) {
        this.postTime = `${this.postTime} hour ago`
      } else {
        this.postTime = `${this.postTime} hours ago`
      }  
    } else {
      this.postTime = Math.ceil(Math.random()*30)
      if( this.postTime == 1) {
        this.postTime = `${this.postTime} day ago`
      } else {
        this.postTime = `${this.postTime} days ago`
      }  
    }
  }
  //this.postTime = `${Math.ceil(Math.random()*23)} hours ago`
}
