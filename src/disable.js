const path = require('path');
const axios = require('axios');
const { getPluginInfo, getPlugin } = require('./utils');

const disablePlugin = async (pluginKey) => {
  try {
    const pluginInfo = await getPluginInfo(pluginKey);
    const plugin = getPlugin(pluginKey);
    const payload = {
      enabled: false,
    };
    const response = await axios.put(`${plugin.api}/api/plugins/${plugin.id}`, payload, {
      headers: {
        _token: plugin.token
      }
    });
    
    console.log(`Plugin "${pluginKey}" disabled successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = disablePlugin;