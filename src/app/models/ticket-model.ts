export class TicketModel {
    constructor(
      public title: string,
      public description: string,
      public status: string,
      public startDate: Date,
      public finalDate: Date,
      public client: string,  
    ){}
}
