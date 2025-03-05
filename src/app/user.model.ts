export class UserModel {
    name: string;
    age: number;
    city: string;
    country: string;
    photo: string;
  
    constructor(name: string = '', age: number = 0, city: string = '', country: string = '', photo: string = '') {
      this.name = name;
      this.age = age;
      this.city = city;
      this.country = country;
      this.photo = photo;
    }
  }