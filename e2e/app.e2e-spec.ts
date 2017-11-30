import { CreappticPage } from './app.po';

describe('creapptic App', () => {
  let page: CreappticPage;

  beforeEach(() => {
    page = new CreappticPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
