import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-location-master',
  templateUrl: './location-master.component.html',
  styleUrls: ['./location-master.component.css']
})
export class LocationMasterComponent  implements OnInit {
  constructor(private userService: UserService, private snackBar: MatSnackBar) {}
  locations: Locations[] = [];
  successMessage = '';


  // Role form model
  newLocation: Locations = {
    id:0,
    location_name: '',
    locations_alias: ''
  };

  ngOnInit(): void {
    this.locationList();
  }

  locationList(){
    this.userService.getLocations().subscribe((data: Locations[]) => {
      console.log(data)
      this.locations = data
    });
  }

  // Function to add role to the list
  addLocation() {
    if (this.newLocation.location_name && this.newLocation.locations_alias) {
      // this.roles.push({ ...this.newRole });
      // Reset form
      // this.newRole = { roleName: '', roleAlias: '' };

      this.userService.addLocation(this.newLocation).subscribe( data => {
        this.snackBar.open('Location created successfully!', 'Close', {
          duration: 3000,
        });
        this.newLocation = {id:0 ,location_name: '', locations_alias: '' };
        this.locationList();
      },  
      error => console.log(error));

    } else {
      alert('Please enter both Location Name and Location Alias');
    }
  }
  // Function to remove role from the list
  removeLocation(id: number) {
    // this.roles.splice(index, 1);
    this.userService.deleteLocation(id).subscribe(data =>{
      console.log(data);
      this.snackBar.open('Location deleted successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        // verticalPosition: 'top',
      });
    this.locationList();
    });
  }

  editLocation(id : number) {
    this.userService.editLocation(id).subscribe(data =>{
      console.log(data);
      this.newLocation = data;
    });
  }
}

export interface Locations {
  id:number;
  location_name: string;
  locations_alias: string;
}
