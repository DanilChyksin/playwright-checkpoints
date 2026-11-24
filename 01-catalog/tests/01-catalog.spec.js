import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('[1] search', async ({ page }) => {
  const model = new CatalogPage(page);
  await model.search('Red Lipstick');
  // TODO: подготовьте данные и добавьте проверки по условию.
});

test('[2] selectBrand', async ({ page }) => {
  const model = new CatalogPage(page);
  await model.selectBrand('Essence');
  // TODO: подготовьте данные и добавьте проверки по условию.
});

test('[3] openProduct', async ({ page }) => {
  const model = new CatalogPage(page);
  await model.openProduct('Red Lipstick');
  // TODO: подготовьте данные и добавьте проверки по условию.
});

test('[4] nextPage', async ({ page }) => {
  const model = new CatalogPage(page);
  await model.nextPage();
  // TODO: подготовьте данные и добавьте проверки по условию.
});

