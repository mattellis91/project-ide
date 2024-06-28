import { Component } from '@angular/core';
import { EditorService } from '../../services/editor.service';


interface Color { hex: string, description: string, action: string | undefined }
@Component({
  selector: 'app-palete-panel',
  templateUrl: './palete-panel.component.html',
  styleUrl: './palete-panel.component.scss'
})

export class PaletePanelComponent {
  selectedColor:string | undefined;
  commands:Color[]= [
    {
      description: 'Light Red',
      hex: '#FFC0C0',
      action: undefined
    },
    {
      description: 'Red',
      hex: '#FF0000',
      action: undefined
    },
    {
      description: 'Dark Red',
      hex: '#C00000',
      action: undefined
    },
    {
      description: 'Light Yellow',
      hex: '#FFFFC0',
      action: undefined
    },
    {
      description: 'Yellow',
      hex: '#FFFF00',
      action: undefined
    },
    {
      description: 'Dark Yellow',
      hex: '#C0C000',
      action: undefined
    },
    {
      description: 'Light Green',
      hex: '#C0FFC0',
      action: undefined
    },
    {
      description: 'Green',
      hex: '#00FF00',
      action: undefined
    },
    {
      description: 'Dark Green',
      hex: '#00C000',
      action: undefined
    },
    {
      description: 'Light Cyan',
      hex: '#C0FFFF',
      action: undefined
    },
    {
      description: 'Cyan',
      hex: '#00FFFF',
      action: undefined
    },
    {
      description: 'Dark Cyan',
      hex: '#00C0C0',
      action: undefined
    },
    {
      description: 'Light Blue',
      hex: '#C0C0FF',
      action: undefined
    },
    {
      description: 'Blue',
      hex: '#0000FF',
      action: undefined
    },
    {
      description: 'Dark Blue',
      hex: '#0000C0',
      action: undefined
    },
    {
      description: 'Light Magenta',
      hex: '#FFC0FF',
      action: undefined
    },
    {
      description: 'Magenta',
      hex: '#FF00FF',
      action: undefined
    },
    {
      description: 'Dark Magenta',
      hex: '#C000C0',
      action: undefined
    },
    {
      description: 'White',
      hex: '#FFFFFF',
      action: undefined
    },
    {
      description: 'Black',
      hex: '#000000',
      action: undefined
    }
  ] 

  constructor(private editorService: EditorService) { }

  setCommandColor(command:Color) {
    console.log(command);
    this.editorService.selectedColor = command.hex;
    this.selectedColor = command.hex;
  }

  ngOnInit() {
    this.selectedColor = this.editorService.selectedColor;
  }
}
