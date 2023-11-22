import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel ={
    cover:'https://ichef.bbci.co.uk/news/976/cpsprodpb/C798/production/_131269015_gettyimages-1125955705.jpg',
    album:'Tupac',
    name: 'Old School',
    url:'',
    _id:'1'
  }
   constructor (){}
   ngOnInit():void{

   }
}
