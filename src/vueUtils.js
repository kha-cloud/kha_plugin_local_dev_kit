const { parse, compileTemplate } = require('@vue/compiler-sfc');

const compileVue = (content, options = {}) => {
  const { descriptor } = parse(content);

  const compiledTemplate = compileTemplate({
    source: descriptor.template.content,
    filename: options.filename || 'component.vue',
    compilerOptions: {
      isFunctional: options.isFunctional || true,
      scopeId: options.scoped ? `data-v-${hash(content)}` : undefined,
    },
  });

  const compiledScript = descriptor.script ? descriptor.script.content : '';

  const compiledStyles = descriptor.styles
    ? descriptor.styles.map((style) => style.content).join('\n')
    : '';

    console.log({
      template: compiledTemplate.code,
      script: compiledScript,
      styles: compiledStyles,
    });

  const output = {
    compiled: {
      template: compiledTemplate.code,
      script: compiledScript,
      styles: compiledStyles,
    },
    original: content,
  };

  return output;
};

module.exports = {
  compileVue,
};
