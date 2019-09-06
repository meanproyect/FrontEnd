export class TicketModel {
    constructor(
      public title: string,
      public description: string,
      public status: string,
      public client:string,
      public image: string,
      public startDate: Date,
    ){}
}
