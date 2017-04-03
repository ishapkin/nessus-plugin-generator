import { NessusPluginGeneratotPage } from './app.po';

describe('nessus-plugin-generatot App', () => {
  let page: NessusPluginGeneratotPage;

  beforeEach(() => {
    page = new NessusPluginGeneratotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
