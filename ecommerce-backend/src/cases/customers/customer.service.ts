import { Repository } from "typeorm";
import { Customer } from "./customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable() //permite a injeção no controller
export class CustomerService {

    constructor(
      @InjectRepository(Customer)
      private repository: Repository<Customer>
    ) {}

    //service/provider retorna uma promise
    findAll(): Promise<Customer[]> {
      return this.repository.find();
    }

    findByID(id: string):Promise<Customer | null> {
      return this.repository.findOneBy({id: id});
    }

    Save(customer: Customer): Promise<Customer> {
    //PERSISTE, não insiro, nem altero, pode ser os dois
      return this.repository.save(customer);
    }

    async Remove(id: string): Promise<void> {
      await this.repository.delete({id});
    }

}