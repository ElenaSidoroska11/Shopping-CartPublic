export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description= '', price= 0, imageUrl= 'https://cdn.euroncap.com/media/56960/volkswagen-up.png?mode=crop&width=359&height=235') {
    this.id = id,
      this.name = name,
      this.description = description,
      this.price = price,
      this.imageUrl = imageUrl;
  }
}
