import { Component } from '@angular/core';


interface Command { color: string, text: string }
@Component({
  selector: 'app-palete-panel',
  templateUrl: './palete-panel.component.html',
  styleUrl: './palete-panel.component.scss'
})


export class PaletePanelComponent {
  commands:Command[]= [
    {
      text: 'nop',
      color: '#1976D2'
    },
    {
      text: 'add',
      color: '#1976D2'
    },
    {
      text: 'div',
      color: '#1976D2'
    },
    {
      text: 'greater',
      color: '#1976D2'
    },
    {
      text: 'dup',
      color: '#1976D2'
    },
    {
      text: 'in(char)',
      color: '#1976D2'
    },
    {
      text: 'push',
      color: '#1976D2'
    },
    {
      text: 'sub',
      color: '#1976D2'
    },
    {
      text: 'mod',
      color: '#1976D2'
    },
    {
      text: 'pointer',
      color: '#1976D2'
    },
    {
      text: 'roll',
      color: '#1976D2'
    },
    {
      text: 'out(num)',
      color: '#1976D2'
    },
    {
      text: 'pop',
      color: '#1976D2'
    },
    {
      text: 'mul',
      color: '#1976D2'
    },
    {
      text: 'not',
      color: '#1976D2'
    },
    {
      text: 'switch',
      color: '#1976D2'
    },
    {
      text: 'in(num)',
      color: '#1976D2'
    },
    {
      text: 'out(char)',
      color: '#1976D2'
    }
  ] 
}
