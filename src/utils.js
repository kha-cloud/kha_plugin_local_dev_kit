const fs = require('fs');
const path = require('path');
const axios = require('axios');
const commentJson = require('comment-json');

const getPlugin = (pluginKey) => {
  const pluginsFilePath = path.join(__dirname, '..', 'plugins.jsonc');
  if(!fs.existsSync(pluginsFilePath)) {
    console.log('\x1b[31m\x1b[1m');
    console.log("The 'plugins.jsonc' file is missing. Please create it and add your plugins.");
    console.log('\x1b[0m');
    process.exit(1);
  }
  const pluginsContent = fs.readFileSync(pluginsFilePath, 'utf8');
  const plugins = commentJson.parse(pluginsContent);

  const plugin = plugins.find(p => p.key === pluginKey);
  if (!plugin) {
    throw new Error(`Plugin with key "${pluginKey}" not found`);
  }
  return plugin;
};

const getPluginInfo = async (pluginKey) => {
  // const pluginsContent = fs.readFileSync(path.join(__dirname, '..', 'plugins.jsonc'), 'utf8');
  // const plugins = commentJson.parse(pluginsContent);

  // const plugin = plugins.find(p => p.key === pluginKey);
  // if (!plugin) {
  //   throw new Error(`Plugin with key "${pluginKey}" not found`);
  // }
  const plugin = getPlugin(pluginKey);

  const requestOptions = {
    url: `${plugin.api}/api/plugins/${plugin.id}`,
    headers: {
      _token: plugin.token
    }
  };

  try {
    const pluginInfo = await axios.get(requestOptions.url, { headers: requestOptions.headers });
    return pluginInfo.data;
  } catch (error) {
    console.log('\x1b[31m\x1b[1m');
    console.log("One of those errors have occured:");
    console.log("   1. The plugin key is incorrect");
    console.log("   2. The API Token is incorrect");
    console.log("   3. The Internet connection is not working");
    console.log("");
    console.log('\x1b[0m');
    process.exit(1);
  }
};

module.exports = {
  getPluginInfo,
  getPlugin,
};