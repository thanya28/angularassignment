import { Customer } from "./customer";

export class Order {
    id: number =0;
    OrderId: number =0;
    OrderDate:  Date = new Date();
    CustomerId: number =0;
    OrderItemId: number =0;

    //object oriented model
    customer:Customer = new Customer();
}
