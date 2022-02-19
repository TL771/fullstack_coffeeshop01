export class Order {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public drink: string,
    public tempPreference: string,
    public sendText: boolean,
  ){}
}
