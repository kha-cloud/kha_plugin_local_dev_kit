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
  var pluginInfo = commentJson.parse(pluginContent);
  delete pluginInfo.enabled;
  delete pluginInfo.installed;
  return pluginInfo;
};

const getApis = (pluginKey) => {
  const pluginFolder = getPluginFolder(pluginKey);
  const apisFile = path.join(pluginFolder, 'config', 'apis.jsonc');
  const apisContent = fs.readFileSync(apisFile, 'utf8');
  const apis = commentJson.parse(apisContent);
  return apis;
};

const getAdminUiConfig = (pluginKey) => {
  const pluginFolder = getPluginFolder(pluginKey);
  const configFile = path.join(pluginFolder, 'adminUi', 'config.jsonc');
  const configContent = fs.readFileSync(configFile, 'utf8');
  const config = commentJson.parse(configContent);
  return config;
};

const getData = (pluginKey) => {
  // Get database data (dbSchema)
  // Get database seed (dbSeed)
  const pluginFolder = getPluginFolder(pluginKey);
  const dbSchemaFile = path.join(pluginFolder, 'config', 'database', 'schema.jsonc');
  const dbSeedFile = path.join(pluginFolder, 'config', 'database', 'seed.jsonc');
  const dbSchemaContent = fs.readFileSync(dbSchemaFile, 'utf8');
  const dbSeedContent = fs.readFileSync(dbSeedFile, 'utf8');
  const dbSchema = commentJson.parse(dbSchemaContent);
  const dbSeed = commentJson.parse(dbSeedContent);
  return {
    dbSchema,
    dbSeed,
  };
};

const getPages = async (pluginKey) => {
  const pluginFolder = getPluginFolder(pluginKey);
  const pagesFolder = path.join(pluginFolder, 'adminUi', 'pages');
  const pageFiles = fs.readdirSync(pagesFolder);
  const pages = pageFiles.map(pageFile => {
    const pageContent = fs.readFileSync(path.join(pagesFolder, pageFile), 'utf8');
    const pageKey = path.parse(pageFile).name;
    const page = {
      key: pageKey,
      code: pageContent,
    };
    return page;
  });
  // const pluginScript = await compileVue(pluginKey);//, { pluginKey, id: (`${pluginKey}-${pageKey}-`+Math.random().toString(36)), filename: `${pageKey}.vue` });
  return pages;
};


const uploadPlugin = async (pluginKey) => {
  try {
    const pluginInfo = getPluginInfo2(pluginKey);
    const plugin = getPlugin(pluginKey);
    const adminUiConfig = getAdminUiConfig(pluginKey);
    const pages = await getPages(pluginKey);
    const apis = getApis(pluginKey);
    const data = getData(pluginKey);
    const payload = {
      ...pluginInfo,
      adminUi: {
        ...adminUiConfig,
        pages
      },
      apis,
      data,
      compiled: await compileVue(pluginKey),
    };
    const response = await axios.put(`${plugin.api}/api/plugins/${plugin.id}`, payload, {
      headers: {
        _token: plugin.token
      }
    });
    console.log(`Plugin "${pluginKey}" uploaded successfully`);
  } catch (error) {
    console.log('\x1b[31m\x1b[1m');
    console.log("One of those errors have occured:");
    console.log("   1. The plugin ID is incorrect");
    console.log("   2. The API Token is incorrect");
    console.log("   3. The Internet connection is not working");
    console.log("");
    console.log('\x1b[0m');
    process.exit(1);
    console.log(error);
  }
};

module.exports = uploadPlugin;
