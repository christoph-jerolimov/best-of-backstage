import type { Page } from '@playwright/test';

export class Backstage {
  constructor(public readonly page: Page) {}

  async login(url = '/') {
    await this.page.goto(url);

    // TODO: ensure we are on the login page?
    await this.page.getByRole('button', { name: 'Enter' }).click();

    await this.page.waitForURL(url);
  }

  get sidebar() {
    return this.page.locator('nav');
  }

  get header() {
    return this.page.locator('header, .bui-HeaderPage');
  }

  get content() {
    return this.page.locator('article, .bui-HeaderPage + *');
  }

  sidebarItem(name: string) {
    return this.sidebar.getByRole('link', { name });
  }
}
