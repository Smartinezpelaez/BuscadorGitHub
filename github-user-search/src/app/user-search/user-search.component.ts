import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent {
  username = '';
  userData: any;
  errorMessage = '';

  constructor(private githubService: GithubService) {}

  searchUser() {
    this.githubService.getUser(this.username.toLowerCase()).subscribe(
      (data) => {
        this.userData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.userData = null;
        this.errorMessage = 'No hay usuarios que cumplan con el criterio de búsqueda.';
      }
    );
  }
}
