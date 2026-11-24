import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('[1] addProduct', async ({ page }) => {
  const model = new CartPage(page);
  await model.addProduct('Red Lipstick');
  // TODO: подготовьте данные и добавьте проверки по условию.
});

test('[2] open', async ({ page }) => {
  const model = new CartPage(page);
  await model.open();
  // TODO: подготовьте данные и добавьте проверки по условию.
});

test('[3] removeProduct', async ({ page }) => {
  const model = new CartPage(page);
  await model.removeProduct('Red Lipstick');
  // TODO: подготовьте данные и добавьте проверки по условию.
});

test('[4] clear', async ({ page }) => {
  const model = new CartPage(page);
  await model.clear();
  // TODO: подготовьте данные и добавьте проверки по условию.
});

