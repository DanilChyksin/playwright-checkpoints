import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.addProduct('Red Lipstick');
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.open();
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.removeProduct('Red Lipstick');
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CartPage(page);
  // BEGIN
  await model.clear();
  // END
});

