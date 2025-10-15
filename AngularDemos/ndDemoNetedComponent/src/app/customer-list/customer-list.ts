import { Component } from '@angular/core';
import { Customer } from './Models/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList {
  customers: Customer[] = [
    {customerId: 1, name : 'James', address: '', city: 'Pune', state: 'Maharashtra', country: 'India'}, 
    { "customerId": 2, "name": "Priya", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 3, "name": "Rahul", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 4, "name": "Anjali", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 5, "name": "Amit", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 6, "name": "Sneha", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 7, "name": "Vikram", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 8, "name": "Neha", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" },
    { "customerId": 9, "name": "Karan", "address": "", "city": "Pune", "state": "Maharashtra", "country": "India" }
  ];
}
