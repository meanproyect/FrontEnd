import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }
  uploadPhot(_id: string, files: Array<File>){
    return new Promise(function(resolve, reject){
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i =0; i<files.length; i++){
        formData.append('photo', files[i], files[i].name);
        }
        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if(xhr.status == 200) resolve (JSON.parse(xhr.response));
          };
      }
      xhr.open('POST', 'http://localhost:3789/ClientPlusTI/uploadPhoto/'+_id +'/upload');
      xhr.send(formData)
    })
  }
}
