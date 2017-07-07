import { MyReduxPage } from './app.po';

describe('my-redux App', () => {
  let page: MyReduxPage;

  beforeEach(() => {
    page = new MyReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
