const initiatePlugins = require('./src/initiatePlugins');
const pullPlugin = require('./src/pull');
const uploadPlugin = require('./src/upload');
const disable = require('./src/disable');

const command = process.argv[2];

if (command === 'fetch') {
  initiatePlugins();
} else if (command === 'pull') {
  const pluginKey = process.argv[3];
  if (pluginKey) {
    pullPlugin(pluginKey);
  } else {
    console.log('Please specify a plugin key');
  }
}  else if (command === 'upload') {
  const pluginKey = process.argv[3];
  if (pluginKey) {
    uploadPlugin(pluginKey);
  } else {
    console.log('Please specify a plugin key');
  }
}  else if (command === 'disable') {
  const pluginKey = process.argv[3];
  if (pluginKey) {
    disable(pluginKey);
  } else {
    console.log('Please specify a plugin key');
  }
}  else {
  console.log(`Invalid command: ${command}`);
}
