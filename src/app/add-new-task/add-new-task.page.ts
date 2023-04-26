import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal', 'home']
  taskName = ''
  taskDate = new Date();
  taskPriority = ''
  taskCategory = ''

  taskObject: any = []

  constructor(public modalCtrl: ModalController){
    this.taskDate = new Date();

  }

  ngOnInit(){
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index:number){
    this.taskCategory = this.categories[index]
  }

  AddTask(){
      this.taskObject = {
      itemName: this.taskName,
      itemDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.taskCategory,
    };
    this.dismiss();
  }
}