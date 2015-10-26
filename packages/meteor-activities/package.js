Package.describe({
  name: 'douhengshan:activities',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Maodou.io activities package, A meteor package that provides activities pages at /activities',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dououFullstack/packages-activites',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // version
  api.versionsFrom('1.2.0.2');
  // package
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);

  //css
  // var clientFiles=[
    // css
    // "css/index.css",
    // img
    // "img/my_image.png"
  // ];
  // api.addFiles("clientFiles","client");
  // api.addFiles("index.css","client");

  // template
  api.use('templating');
  // file
  // ls -l | awk '{print "api.addFiles(\""$9"\", \"client\");"}'
  api.addFiles('activities.js');
  api.addFiles('client/routes.js', 'client');
  api.addFiles("client/activities/activitie_edit.html", "client");
  api.addFiles("client/activities/activitie_edit.js", "client");
  api.addFiles("client/activities/activitie_new.html", "client");
  api.addFiles("client/activities/activitie_new.js", "client");
  api.addFiles("client/activities/activitie_show.html", "client");
  api.addFiles("client/activities/activitie_show.js", "client");
  api.addFiles("client/activities/activitie.html", "client");
  api.addFiles("client/activities/activitie_index.html", "client");
  api.addFiles("client/activities/activitie_index.js", "client");

  api.addFiles("lib/collections.js");

  api.addFiles("server/publications.js", "server");

  api.export('Activities');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('douhengshan:activities');
  api.addFiles('activities-tests.js');
});
