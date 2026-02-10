import type { Page } from '@playwright/test';

export class Backstage {
  constructor(public readonly page: Page) {
  }

  async login() {
    await this.page.goto('/');
    // TODO: ensure we are on the login page?
    await this.page.getByRole('button', { name: 'Enter' }).click();
  }

  get nav() {
    return this.page.locator('nav');
  }

  get header() {
    return this.page.locator('header, .bui-HeaderPage');
  }

  get content() {
    return this.page.locator('article, .bui-HeaderPage + *');
  }

  navLink(name: string) {
    return this.page.locator('nav').getByRole('link', { name });
  }
}
