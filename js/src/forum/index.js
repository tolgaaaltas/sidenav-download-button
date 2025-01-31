import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import Separator from 'flarum/components/Separator';

app.initializers.add('miniflar/sidenav-download-button', () => {
  extend(IndexPage.prototype, 'sidebarItems', function (items) {
    const downloadButton = app.forum.attribute('miniflar-sidenav-download-button.link');
    const addSeperator = app.forum.attribute('miniflar-sidenav-download-button.add_separator');

    if (downloadButton) {
      if (addSeperator) {
        items.add('separator', Separator.component(), app.forum.attribute('miniflar-sidenav-download-button.separator_order'));
      }
      items.add(
        'downloadButton',
        <a class="Button Button--secondary IndexPage-downloadButton" href={downloadButton}>
          <span class="Button-label">
            <i class="fas fa-download Button-icon"></i>
            {app.translator.trans('miniflar-sidenav-download-button.forum.index.download_button')}
          </span>
        </a>,
        app.forum.attribute('miniflar-sidenav-download-button.button_order')
      );
    }
  });
});
