import { DnauthPortalAdminPage } from './app.po';

describe('dnauth-portal-admin App', () => {
  let page: DnauthPortalAdminPage;

  beforeEach(() => {
    page = new DnauthPortalAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
