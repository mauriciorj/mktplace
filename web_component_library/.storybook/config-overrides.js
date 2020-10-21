const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@white': '#ffffff',
      '@primary-color': '#e90c0c',
      '@primary-color-bright': '#FFB904',
      '@secondary-color-light': '#CCDDE3',
      '@secondary-color-medium': '#1C7690',
      '@alert': '#FF7537',
      '@text-color': '@primary-color',
      '@text-color-light': '@white',
      '@size-base': '10px',
      '@border-color-base': '@primary-color',
      '@body-background': '@secondary-color-light',
      '@layout-header-background': '#e90c0c',
      '@layout-body-background': '#e90c0c',
      '@layout-header-padding': '0',
      '@item-active-bg': '@primary-color',
      '@item-hover-bg': '@primary-color',
    },
  })
)