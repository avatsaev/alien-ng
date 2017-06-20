import { AlienNgPage } from './app.po';

describe('alien-ng App', () => {
  let page: AlienNgPage;

  beforeEach(() => {
    page = new AlienNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
