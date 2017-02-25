import { OpProjectPage } from './app.po';

describe('op-project App', function() {
  let page: OpProjectPage;

  beforeEach(() => {
    page = new OpProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
