export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async addProduct(name) {
    throw new Error('Реализуйте addProduct');
  }

  async open() {
    throw new Error('Реализуйте open');
  }

  async removeProduct(name) {
    throw new Error('Реализуйте removeProduct');
  }

  async clear() {
    throw new Error('Реализуйте clear');
  }
}

