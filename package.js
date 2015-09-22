Package.describe({
  summary: 'CSS to make Select2 fit in with Bootstrap 3',
  name: 'metabus:select2-bootstrap3-css',
  git: 'https://github.com/zimme/meteor-select2-bootstrap3-css.git',
  version: '1.4.6',
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.3');

  api.use([
    'mizzao:bootstrap-3@3.2.0',
    'natestrauser:select2@4.0.0',
    'nemo64:bootstrap@3.3.4_1',
    'simison:bootstrap3-less@0.3.0',
    'twbs:bootstrap@3.3.4',
  ], 'client', {weak: true});

  api.addFiles('select2-bootstrap-css/select2-bootstrap.css', 'client');
});
