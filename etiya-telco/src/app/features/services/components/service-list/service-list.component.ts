import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services!: Service[];

  constructor(private servicesService: ServicesService,private router:Router,private messageService:MessageService) { }

  ngOnInit() {
     this.getServices()

  }

  getServices(){
    this.servicesService.getAll().subscribe(data => this.services = data);
  }
  
  deleteServices(id:number){
    if(confirm("Are you sure want to delete?")){
      this.servicesService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getServices();
        }, 1000);
      })
    } 
  }



  selectedServiceId(selectedService: Service):void{
     this.router.navigateByUrl(`service/${selectedService.id}`);
  }

}