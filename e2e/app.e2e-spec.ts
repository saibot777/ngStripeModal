import { NgStripeModalPage } from './app.po';

describe('ng-stripe-modal App', () => {
  let page: NgStripeModalPage;

  beforeEach(() => {
    page = new NgStripeModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
