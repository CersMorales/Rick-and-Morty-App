import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;
p: string|number|undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getCharacters(this.currentPage)
      .subscribe((response: any) => {
        this.characters = response.results;
      });
  }

  nextPage() {
    this.currentPage++;
    this.loadCharacters();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
  filterText: string = '';

get filteredCharacters(): any[] {
  return this.characters.filter(character =>
    character.name.toLowerCase().includes(this.filterText.toLowerCase())
  );
}
}