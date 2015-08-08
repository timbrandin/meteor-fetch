Package.describe({
  name: 'timbrandin:fetch',
  version: '1.0.0',
  summary: 'Use ES6 / ES2015 fetch in Meteor using whatwg-fetch and node-fetch',
  git: 'https://github.com/timbrandin/meteor-fetch',
  documentation: 'README.md'
});

Npm.depends({
  "node-fetch": "1.3.2",
  "whatwg-fetch": "0.9.0"
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.addFiles('fetch.js', 'server');

  api.addFiles(
    ".npm/package/node_modules/whatwg-fetch/fetch.js",
    "client",
    { bare: true }
  );

  api.export('fetch', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('timbrandin:fetch');
  api.addFiles('fetch-tests.js');
});
