import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  todoList =[{
    itemName: 'Coding',
    itemDueDate: new Date('2021-10-13'),
    itemPriority: 'high',
    itemCategory: 'Word',
  },
  {
    itemName: 'Design',
    itemDueDate: new Date('2022-09-13'),
    itemPriority: 'low',
    itemCategory: 'Work',
  },{
    itemName: 'Shopping',
    itemDueDate: new Date('2022-10-13'),
    itemPriority: 'middle',
    itemCategory: 'Personal',
  },
]

  today: number = Date.now()

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
  const modal = await this.modalCtrl.create({
    component: AddNewTaskPage
  })
  modal.onDidDismiss().then(newTaskObj => {
    if (newTaskObj.data) {
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data);
    }
  });
  return await modal.present()
  }
  delete(index:number){
    this.todoList.splice(index ,1)
  }
}
