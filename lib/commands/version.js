'use strict';

var Command = require('../models/command');

module.exports = Command.extend({
  name: 'version',
  description: 'outputs cli version',
  works: 'everywhere',

  availableOptions: [
    { name: 'verbose', type: Boolean, default: false }
  ],

  aliases: ['v', 'version', '-v', '--version'],
  run: function(options) {
    var versions = process.versions;
    versions['npm'] = require('npm').version;

    var alwaysPrint = ['node','npm'];

    for(var module in versions) {
      if(options.verbose || alwaysPrint.indexOf(module) > -1) {
        this.printVersion(module, versions[module]);
      }
    }
  },
  printVersion: function(module, version) {
    this.ui.writeLine(module + ': ' + version);
  }
});
