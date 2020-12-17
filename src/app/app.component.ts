import { Component } from '@angular/core';

enum Cars {
  Honda = 'Honda',
  BMW = 'BMW',
  MercedesBenz = 'MercedesBenz'
}

enum Students {
  Mark = 'Mark',
  Jenny = 'Jenny',
  Richard = 'Richard'
}

enum LogLevels {
  Trace,
  Debug,
  Info,
  Warning,
  Error
}

enum Environment {
  SYSTEMINFO = 'WINDOWS_NT',
  NODE_ENV = 'DEVELOPMENT'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-showcase';
  cases = [
    { name: 'Cars', options: Cars, selected: Cars.BMW },
    { name: 'Students', options: Students, selected: Students.Richard },
    { name: 'LogLevels', options: LogLevels, selected: LogLevels.Info },
    { name: 'Environment', options: Environment, selected: Environment.NODE_ENV },
  ];
}
