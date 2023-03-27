const fs = require('fs');
const path = require('path');
const axios = require('axios');
const commentJson = require('comment-json');

const getPlugin = (pluginKey) => {
  const pluginsContent = fs.readFileSync(path.join(__dirname, '..', 'plugins.jsonc'), 'utf8');
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
    throw new Error(`Failed to fetch plugin info for "${pluginKey}" - ${error}`);
  }
};

module.exports = {
  getPluginInfo,
  getPlugin,
};