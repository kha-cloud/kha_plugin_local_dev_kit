const fs = require('fs');
const path = require('path');
const axios = require('axios');
const commentJson = require('comment-json');
const { compileVue } = require('./vueUtils');
const { getPluginInfo, getPlugin } = require('./utils');

const pluginsFolder = path.join(__dirname, '..', 'plugins');

const getPluginFolder = (pluginKey) => {
  return path.join(pluginsFolder, pluginKey);
};

const getPluginInfo2 = (pluginKey) => {
  const pluginFolder = getPluginFolder(pluginKey);
  const pluginFile = path.join(pluginFolder, 'plugin.jsonc');
  const pluginContent = fs.readFileSync(pluginFile, 'utf8');
  const pluginInfo = commentJson.parse(pluginContent);
  return pluginInfo;
};

const getAdminUiConfig = (pluginKey) => {
  const pluginFolder = getPluginFolder(pluginKey);
  const configFile = path.join(pluginFolder, 'adminUi', 'config.jsonc');
  const configContent = fs.readFileSync(configFile, 'utf8');
  const config = commentJson.parse(configContent);
  return config;
};

const getPages = (pluginKey) => {
  const pluginFolder = getPluginFolder(pluginKey);
  const pagesFolder = path.join(pluginFolder, 'adminUi', 'pages');
  const pageFiles = fs.readdirSync(pagesFolder);
  const pages = pageFiles.map(pageFile => {
    const pageContent = fs.readFileSync(path.join(pagesFolder, pageFile), 'utf8');
    const pageKey = path.parse(pageFile).name;
    const vueComponent = compileVue(pageContent, { id: (`${pluginKey}-${pageKey}-`+Math.random().toString(36)), filename: `${pageKey}.vue` });
    const page = {
      key: pageKey,
      vueComponent,
    };
    return page;
  });
  return pages;
};


const uploadPlugin = async (pluginKey) => {
  try {
    const pluginInfo = getPluginInfo2(pluginKey);
    const plugin = getPlugin(pluginKey);
    const adminUiConfig = getAdminUiConfig(pluginKey);
    const pages = getPages(pluginKey);
    const payload = {
      ...pluginInfo,
      adminUi: {
        ...adminUiConfig,
        pages
      }
    };
    const response = await axios.put(`${plugin.api}/api/plugins/${plugin.id}`, payload, {
      headers: {
        _token: plugin.token
      }
    });
    console.log(`Plugin "${pluginKey}" uploaded successfully`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = uploadPlugin;
