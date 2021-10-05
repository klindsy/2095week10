import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {
  title: string = "";
  year: number = 0;
  movieId: string = "";
  moviesDB: any[] = [];

  actorId: string = "";
  fullName: string = "";
  actorsDB: any[] = [];
  
  constructor(private dbService: DatabaseService, private router: Router) { }
  //Get all Movies
  onGetMovies() {
    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
  //Get all Actors
  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  // Selecting a Movie
  onSelectUpdate(item: any) {
    this.title = item.title;
    this.year = item.year;
    this.movieId = item._id;
  }

  // Updating a Movie
  onUpdateMovie() {    
    this.dbService.updateMovie(this.movieId, this.actorId).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }

  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }
}
