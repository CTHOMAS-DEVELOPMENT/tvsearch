import { Component, OnInit } from '@angular/core';
import { IEpisode } from './episode';
import { TvDataAccessService } from '../shared/tv-data-access.service';

@Component({
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  

  pageTitle: string = "Episodes List";
  seasonArray:any[] = [];
  IndexArray:any[] = [];
  showImage: boolean = true;
  showSummary: boolean = false;
  _listFilter: string;
  _title:string;
  imageWidth=200;
  imageMargin=2;
  imageRightPadding=50;
  filteredEpisodes: IEpisode[];
  episodes: IEpisode[]=[ ];
  errorMessage="";
  constructor(private _TvDataAccessService: TvDataAccessService ) { 

  }
            
  ngOnInit() {
    this._TvDataAccessService.getEpi()
    .subscribe(allData => {
        this.episodes=allData;
        this.filteredEpisodes= this.episodes;
        this.getSeasonArray();
        this.listFilter=""; 
        this.title=""; 
      },
    error => this.errorMessage=<any>error);
      
  }

  toggleImage():void { this.showImage=!this.showImage; }
  toggleSummary():void { this.showSummary=!this.showSummary; }
  
  
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredEpisodes = this.listFilter ? this.performFilter(this.listFilter, this._title) : this.episodes;
  }
  get title(): string {
    return this._title;
}
set title(value: string) {
    this._title = value;
    this.filteredEpisodes = this.title ? this.performFilter(this.listFilter, this._title) : this.episodes;
}
  performFilter(filterBy: string, title: string): IEpisode[] {
    let season = parseInt(filterBy? filterBy:this.listFilter);   
    let titleIn = (title?title:this.title).toLowerCase();   
    return this.episodes.filter((episode: IEpisode) =>
      {
        if(season && titleIn)
        {
          return (episode.season===season && episode.name.toLowerCase().indexOf(titleIn)!==-1)
        } 
        else
        {
          if(season)
          {
            return (episode.season===season)
          }
          else{
            if(titleIn)
            {
              return (episode.name.toLowerCase().indexOf(titleIn)!==-1)
            }           
          }          
        }

      }
          
    )}
  getSeasonArray(): void {
    let lastIndexValue=0;
    //Go through episodes array
    //(1)Clear tags from the summary attribute
    //(2)Save all season properties from the episode array for the season array 
    this.episodes.forEach(episode => {
      episode.summary=episode.summary.replace("<p>","").replace("</p>","");
      this.seasonArray.push(episode.season);
    });
    //Reduce the season array to an ordered list of unique values 
    this.seasonArray.sort().forEach(element => {
    if(element!==lastIndexValue)
    {
      this.IndexArray.push(element);
      lastIndexValue=element;
    }
    });
    //Reset ordered season list
    this.seasonArray=this.IndexArray;
  }
}
