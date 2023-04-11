const path = require('path');
const axios = require('axios');
const { getPluginInfo, getPlugin } = require('./utils');

const disablePlugin = async (pluginKey) => {
  try {
    const pluginInfo = await getPluginInfo(pluginKey);
    const plugin = getPlugin(pluginKey);
    const response = await axios.delete(`${plugin.api}/api/plugins/${plugin.id}`, {
      headers: {
        _token: plugin.token
      }
    });
    
    console.log(`Plugin "${pluginKey}" deleted successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = disablePlugin;