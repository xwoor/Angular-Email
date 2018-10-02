export class Email {
    constructor(
      // Entradas que voy a enviar por email
      public name: string,
      public email: string,
      public asunto:string,
      public mensaje:string
    ) { }
  
  }