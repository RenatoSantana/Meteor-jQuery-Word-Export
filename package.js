Package.describe({
  name: "jQuery-Word-Export",
  summary: "meteorite package based on https://github.com/markswindoll/jQuery-Word-Export",
  version: "1.0.0",
  git: "https://github.com/froala/meteor-froala/"
});

api.use([
    "jquery",
 
  ], "client");

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/FileSaver.js',
        'lib/jquery.wordexport.js'
    ], 'client');
});