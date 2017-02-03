import { AppBullyPage } from './app.po';

describe('app-bully App', function() {
  let page: AppBullyPage;

  beforeEach(() => {
    page = new AppBullyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
