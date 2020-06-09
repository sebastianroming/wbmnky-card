'use strict'

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const data = {
  name: chalk.white('Sebastian Roming'),
  note: 'Frontend developer from Germany, in love with JavaScript and TypeScript.\nSoftware craftsman, open source enthusiast.',
  handle: chalk.white('webmonkey'),
  work: chalk.white('Cloud Application Developer at Schwäbische Werkzeugmaschinen GmbH'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('sebastianroming'),
  github: chalk.gray('https://github.com/') + chalk.green('sebastianroming'),
  linkedin: chalk.grey('https://linkedin.com/in/') + chalk.blue('sebastianroming'),
  web: chalk.cyan('https://webmonkey.io'),
  mail: chalk.cyan('sebastian@webmonkey.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('wbmnky'),
};

const _label = (labelText, labelValue) => chalk.white.bold(`${labelText}:  `) + labelValue;

const output = `${data.name} / ${data.handle}\n\n` +
  `${data.note}\n\n` +
  `${_label('       Work', data.work)}\n\n` +
  `${_label('     GitHub', data.github)}\n` +
  `${_label('    Twitter', data.twitter)}\n` +
  `${_label('   LinkedIn', data.linkedin)}\n` +
  `${_label('        Web', data.web)}\n` +
  `${_label('       Mail', data.mail)}\n\n` +
  `${_label('       Card', data.npx)}\n\n` +
  `${chalk.red.bold('#kthxbye')}`;

fs.writeFileSync(path.join(__dirname, 'bin/card'), chalk.cyan(boxen(output, options)));
