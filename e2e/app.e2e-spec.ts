import { QuaeroAssignmentPage } from './app.po';

describe('quaero-assignment App', () => {
  let page: QuaeroAssignmentPage;

  beforeEach(() => {
    page = new QuaeroAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
