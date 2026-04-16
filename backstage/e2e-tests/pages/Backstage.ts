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
    return this.page.locator('header, .bui-Header, .bui-HeaderPage');
  }

  get tabs() {
    return this.page.locator('div[class*=BackstageHeaderTabs-tabsWrapper]');
  }

  get content() {
    return this.page.locator('article, .bui-Header + *, .bui-HeaderPage + *');
  }

  sidebarItem(name: string) {
    return this.sidebar.getByRole('link', { name, exact: true });
  }
}
