export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async search(query) {
    throw new Error('Реализуйте search');
  }

  async selectBrand(brand) {
    throw new Error('Реализуйте selectBrand');
  }

  async openProduct(name) {
    throw new Error('Реализуйте openProduct');
  }

  async nextPage() {
    throw new Error('Реализуйте nextPage');
  }
}

