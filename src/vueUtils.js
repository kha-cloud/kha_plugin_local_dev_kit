const { parse, compileTemplate } = require('@vue/compiler-sfc');
const babel = require('@babel/core');
const { exec } = require('child_process');
const fs = require("fs");
const path = require("path");

function deleteEntryJsFile(pluginKey) {
  const componentsDir = path.join(__dirname, "..", "plugins", pluginKey, "adminUi", "pages");
  const entryJsFile = path.join(componentsDir, "entry.js");
  if (fs.existsSync(entryJsFile)) {
    fs.unlinkSync(entryJsFile);
  }
}

function createEntryJsFile(pluginKey) {
  const componentsDir = path.join(__dirname, "..", "plugins", pluginKey, "adminUi", "pages");

  var components = [];

  fs.readdirSync(componentsDir).forEach((file) => {
    if (file.endsWith(".vue")) {
      // delete file extension before adding to components array
      components.push(file.slice(0, -4));
      // const component = require(path.join(componentsDir, file)).default;
      // Components[component.name] = component;
      // console.log(`Component ${component.name} is ready`);
    }
  });

  const content = `
  import Vue from "vue";
  ${components.map((cp) => `import ${cp} from "./${cp}.vue";`).join("\n")}

  console.log("=============================================");
  console.log("=============================================");
  console.log("           ${pluginKey} plugin loaded");
  console.log("=============================================");
  console.log("=============================================");

  const Components = {
    ${components.map((cp) => `${cp}: ${cp}`).join(",\n")}
  };

  Object.keys(Components).forEach(name=>{
    $nuxt.$vue_instance_for_plugins.component('${pluginKey}-'+Components[name].name,Components[name])
    console.log("Component "+'${pluginKey}-'+Components[name].name+" is ready");
  })

  $nuxt.$store.dispatch('plugins/pluginLoaded', { key: '${pluginKey}' });

  export default Components;
  `;

  fs.writeFileSync(path.join(componentsDir, "entry.js"), content);
}

async function buildPlugin(pluginKey) {
  return new Promise((resolve, reject) => {
    const command = `npx vue-cli-service build --target lib --name ${pluginKey} plugins/${pluginKey}/adminUi/pages/entry.js`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error.message);
        reject("Compilation error");
        console.log("=========================================================");
        console.log("=========================================================");
        console.log("");
        console.log("To reproduce the error, please run the following command:");
        console.log("");
        console.log(command);
        console.log("");
        console.log("=========================================================");
        console.log("=========================================================");
        return;
      }
      if (stderr) {
      }
      resolve(stdout.trim());
    });
  });
}

function readCompiledFiles(pluginKey) {
  const componentsDir = path.join(__dirname, "..", "dist");
  const jsFile = path.join(componentsDir, `${pluginKey}.umd.min.js`);
  const cssFile = path.join(componentsDir, `${pluginKey}.css`);

  const jsContent = fs.readFileSync(jsFile, "utf8");
  var cssContent = "";
  try {
    cssContent = fs.readFileSync(cssFile, "utf8");
  } catch (error) {
  }

  return {
    script: jsContent,
    style: cssContent,
  };
}

const compileVue = async (pluginKey, options = {}) => {
  // console.log("Creating entry.js file...");
  createEntryJsFile(pluginKey);
  // console.log("Building plugin...");
  await buildPlugin(pluginKey);
  // console.log("Deleting entry.js file...");
  deleteEntryJsFile(pluginKey);
  // console.log("Reading compiled files...");
  const compiled = readCompiledFiles(pluginKey);
  return compiled;
  // console.log(compiled);
  // process.exit(0);
  // await 
  const xoutput = {
    compiled: {
      // code,
      // styles: compiledStyles,
    },
    original: content,
  };

  return xoutput;
  //---------------------------------------------------------------------------
  const { descriptor } = parse(content);

  const compiledTemplate = compileTemplate({
    source: descriptor.template.content,
    filename: options.filename || 'component.vue',
    compilerOptions: {
      isFunctional: options.isFunctional || true,
      scopeId: options.scoped ? `data-v-${hash(content)}` : undefined,
    },
  });

  var editedCompiledTemplate = compiledTemplate.code.replace("export function render", "function render");

  const compiledScript = descriptor.script ? descriptor.script.content : `export default {
    data() {
      return {}
    }
  }`;

  const compiledStyles = descriptor.styles
    ? descriptor.styles.map((style) => style.content).join('\n')
    : '';

  var code = compiledScript;
  
  // Remove all comments from compiledScript
  code = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
  
  var lastBraceIndex = code.lastIndexOf("}");
  if (lastBraceIndex !== -1) {
    // Check if there is already a comma before the last brace, with optional whitespace characters in between
    var lastComma = code.slice(0, lastBraceIndex).replace(/\s*$/g, '').slice(-1) == ",";
    code = 
    editedCompiledTemplate // Injected code here
    + code.slice(0, lastBraceIndex) + (lastComma ? "" : ", ") +
    "template: `" + descriptor.template.content + "`" // Injected code here
    // "render," // Injected code here
    + code.slice(lastBraceIndex);
  }

  // console.log(code);
  // process.exit(0);

  // Define the Babel options for the transformation
  const babelOptions = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-transform-modules-commonjs']
  };
  // Transform the script using Babel
  // code = babel.transformSync(code, babelOptions).code;

  // console.log(code);
  // process.exit(0);
  const output = {
    compiled: {
      code,
      styles: compiledStyles,
    },
    original: content,
  };

  return output;
};

module.exports = {
  compileVue,
};
