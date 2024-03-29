import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Observable, of } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {
  constructor(private ts: TaskService) {}

  //Classic subscribe Pattern
  tasks: Task[];

  //Declarative Approach using async pipe
  tasks$: Observable<Task[]> = this.ts.getTasks();
  completed$: Observable<Task> = this.tasks$.pipe(
    flatMap((tasks: Task[]) => tasks),
    filter(t => t.completed)
  );

  ngOnInit() {
    this.getDataClassic();
  }

  getDataClassic() {
    this.ts.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
}
