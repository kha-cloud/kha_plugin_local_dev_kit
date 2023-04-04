const fs = require('fs');
const path = require('path');
const axios = require('axios');
const commentJson = require('comment-json');

const pluginsFilePath = path.join(__dirname, '..', 'plugins.jsonc');
if(!fs.existsSync(pluginsFilePath)) {
  console.log('\x1b[31m\x1b[1m');
  console.log("The 'plugins.jsonc' file is missing. Please create it and add your plugins.");
  console.log('\x1b[0m');
  process.exit(1);
}
const pluginsContent = fs.readFileSync(pluginsFilePath, 'utf8');
const plugins = commentJson.parse(pluginsContent);

const pluginsFolder = path.join(__dirname, '..', 'plugins');

const initiatePlugins = async () => {
  for (let i = 0; i < plugins.length; i++) {
    const plugin = plugins[i];
    
    const pluginFolder = path.join(pluginsFolder, plugin.key);

    if (fs.existsSync(pluginFolder)) {
      console.log(`Skipping ${plugin.key} (${plugin.id}) - folder already exists`);
      continue;
    }

    try {

      const requestOptions = {
        url: `${plugin.api}/api/plugins/${plugin.id}`,
        headers: {
          _token: plugin.token
        }
      };
      const pluginInfo = await axios.get(requestOptions.url, { headers: requestOptions.headers });
      // console.log(pluginInfo.data);
      const { name, key, description, pluginVersion, adminUi, triggers, controllers, apis, data } = pluginInfo.data;
      
      console.log(`Initiating ${name} (${key})...`);

      fs.mkdirSync(pluginFolder);
      fs.mkdirSync(path.join(pluginFolder, 'adminUi'));
      fs.writeFileSync(path.join(pluginFolder, 'adminUi', 'config.jsonc'), JSON.stringify(apis, null, 2));
      fs.mkdirSync(path.join(pluginFolder, 'adminUi', 'pages'));

      fs.mkdirSync(path.join(pluginFolder, 'controllers'));
      
      fs.mkdirSync(path.join(pluginFolder, 'config'));
      fs.writeFileSync(path.join(pluginFolder, 'config', 'apis.jsonc'), JSON.stringify(apis, null, 2));
      fs.writeFileSync(path.join(pluginFolder, 'config', 'triggers.jsonc'), JSON.stringify(triggers, null, 2));
      
      fs.mkdirSync(path.join(pluginFolder, 'config', 'database'));
      fs.writeFileSync(path.join(pluginFolder, 'config', 'database', 'schema.jsonc'), '[]');
      fs.writeFileSync(path.join(pluginFolder, 'config', 'database', 'seed.jsonc'), '[]');
      
      fs.mkdirSync(path.join(pluginFolder, 'config', 'settings'));
      fs.writeFileSync(path.join(pluginFolder, 'config', 'settings', 'schema.jsonc'), '[]');
      fs.writeFileSync(path.join(pluginFolder, 'config', 'settings', 'data.jsonc'), '[]');

      console.log(`\tInitiated ${name} (${key})`);
    } catch (error) {
      console.log(`Failed to initiate ${plugin.name} (${plugin.id}) - ${error}`);
    }
  }

  if (plugins.length === 0) {
    console.log('No plugin to initiate');
  }
};

module.exports = initiatePlugins;
