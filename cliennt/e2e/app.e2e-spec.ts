import { TeamManagmentPage } from './app.po';

describe('team-managment App', function() {
  let page: TeamManagmentPage;

  beforeEach(() => {
    page = new TeamManagmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
