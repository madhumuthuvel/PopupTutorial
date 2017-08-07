import { PopupTutorialPage } from './app.po';

describe('popup-tutorial App', () => {
  let page: PopupTutorialPage;

  beforeEach(() => {
    page = new PopupTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
