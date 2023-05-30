import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id:number): Foods{
    return this.getAll().find(food=> food.id == id)!
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter(food => food.tags?.includes(tag));
  }
getAllTag():Tag[]{
  return [
     { name: 'All', count:8 },
     { name: 'FastFood', count:8 },
     { name: 'Soup', count:1 },
     { name: 'Pizza', count:3 },
     { name: 'Fries', count:1 },
     { name: 'Fries and sandwiches', count:1 },
     { name: 'Snacks', count:1 },
     { name: 'Hamburger', count:1 },
     
  ] 
}
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Soup',
        price: 2,
        cookTime: '10-15',
        favorite: false,
        origins: ['Poland'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Soup'],
      },
      {
        id: 2,
        name: 'Pizza with Cheese',
        price: 10,
        cookTime: '20-60',
        favorite: false,
        origins: ['Italy'],
        star: 3.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 3,
        name: 'Pizza spicy',
        price: 10,
        cookTime: '20-60',
        favorite: false,
        origins: ['Italy'],
        star: 4,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 4,
        name: 'Fries',
        price: 3,
        cookTime: '15-20',
        favorite: false,
        origins: ['Belgium', 'USA'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fries'],
      },
      {
        id: 5,
        name: 'Fries and sandwiches',
        price: 7,
        cookTime: '15-20',
        favorite: false,
        origins: ['Poland'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['FastFood', 'Fries and sandwiches'],
      },
      {
        id: 6,
        name: 'Snacks',
        price: 3,
        cookTime: '5-10',
        favorite: false,
        origins: ['Poland'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Snacks'],
      },
      {
        id: 7,
        name: 'Hamburger',
        price: 6,
        cookTime: '20-40',
        favorite: false,
        origins: ['USA'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 8,
        name: 'Pizza with Vegetables',
        price: 10,
        cookTime: '20-60',
        favorite: false,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'Pizza'],
      },
    ];
  }
}
