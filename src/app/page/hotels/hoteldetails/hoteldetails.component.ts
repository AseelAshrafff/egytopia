import { Component, OnInit} from '@angular/core';
import { HotelsService } from '../../../services/hotel/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { Ihotel } from '../../../interfaces/ihotel';
import { RoomService } from '../../../services/Room/room.service';
import { IReservation } from '../../../IReservation';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrl: './hoteldetails.component.css'
})
export class HoteldetailsComponent implements OnInit {



constructor(
  private _activatedRoute: ActivatedRoute, 
  private _hotelservice:HotelsService, 
  private  roomService: RoomService,
  private toastrService:ToastrService
  ){}

hotelDetails:any={};
roomListDetails:any[]=[];
rating: number = 2;
stars: number[] = [1, 2, 3, 4, 5];
bookingRoomForm:FormGroup;
selctedRoom:any;

ngOnInit(): void {
this.bookingRoomForm = new FormGroup({
  from: new FormControl('',[Validators.required]),
  to: new FormControl('',[Validators.required]),
  roomId: new FormControl('',[Validators.required]),
});

  this._activatedRoute.paramMap.subscribe({
    next:(params)=>{
    let HotelId:any = params.get('id');



    this._hotelservice.GetHotelDetails(HotelId).subscribe({
    next:(response)=>{
      console.log(response)
    this.hotelDetails=response;
    } ,
    complete:()=>{
      console.log(this.hotelDetails);
      this.roomService.getRooms(this.hotelDetails.hotel.id).subscribe({
        next:(response)=>{
          this.roomListDetails=response??[];
    
      }});
    } 
    })
    }
  });
 
}
setSelectedRoom(item:any){
this.selctedRoom=item;
}

BookSubmit(){
  this.bookingRoomForm.get('roomId')?.setValue(this.selctedRoom.id);
  if(!this.bookingRoomForm.valid){
    console.log(this.bookingRoomForm)
    alert("Please fill all the required fields")
    return;
  }

  this.roomService.bookRoom(this.bookingRoomForm.value).subscribe({
    next:(response)=>{
      console.log(response)
    },
    complete:()=>{
      alert("Room Booked Successfully");
      this.bookingRoomForm.reset();
      this.selctedRoom=null;
    }
    
  })


}



}
