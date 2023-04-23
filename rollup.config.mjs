import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  external: [
    '@aracna/core',
    '@aracna/react',
    '@aracna/web',
    '@aracna/web-components/elements/aria/aria.accordion.element.js',
    '@aracna/web-components/elements/aria/aria.alert.element.js',
    '@aracna/web-components/elements/aria/aria.alert.dialog.element.js',
    '@aracna/web-components/elements/aria/aria.breadcrumb.element.js',
    '@aracna/web-components/elements/aria/aria.button.element.js',
    '@aracna/web-components/elements/aria/aria.carousel.element.js',
    '@aracna/web-components/elements/aria/aria.check.box.element.js',
    '@aracna/web-components/elements/aria/aria.combo.box.element.js',
    '@aracna/web-components/elements/aria/aria.dialog.element.js',
    '@aracna/web-components/elements/aria/aria.disclosure.element.js',
    '@aracna/web-components/elements/aria/aria.feed.element.js',
    '@aracna/web-components/elements/aria/aria.link.element.js',
    '@aracna/web-components/elements/aria/aria.list.box.element.js',
    '@aracna/web-components/elements/aria/aria.menu.element.js',
    '@aracna/web-components/elements/aria/aria.meter.element.js',
    '@aracna/web-components/elements/aria/aria.radio.group.element.js',
    '@aracna/web-components/elements/aria/aria.slider.element.js',
    '@aracna/web-components/elements/aria/aria.switch.element.js',
    '@aracna/web-components/elements/aria/aria.tabs.element.js',
    '@aracna/web-components/elements/aria/aria.tooltip.element.js',
    '@aracna/web-components/elements/data/avatar.element.js',
    '@aracna/web-components/elements/data/badge.element.js',
    '@aracna/web-components/elements/data/carousel.element.js',
    '@aracna/web-components/elements/data/chip.element.js',
    '@aracna/web-components/elements/data/feed.element.js',
    '@aracna/web-components/elements/data/icon.element.js',
    '@aracna/web-components/elements/data/image.element.js',
    '@aracna/web-components/elements/data/list.element.js',
    '@aracna/web-components/elements/data/tooltip.element.js',
    '@aracna/web-components/elements/feedback/alert.element.js',
    '@aracna/web-components/elements/feedback/alert.dialog.element.js',
    '@aracna/web-components/elements/feedback/dialog.element.js',
    '@aracna/web-components/elements/feedback/meter.element.js',
    '@aracna/web-components/elements/input/button.element.js',
    '@aracna/web-components/elements/input/button.group.element.js',
    '@aracna/web-components/elements/input/check.box.element.js',
    '@aracna/web-components/elements/input/form.element.js',
    '@aracna/web-components/elements/input/input.element.js',
    '@aracna/web-components/elements/input/input.file.element.js',
    '@aracna/web-components/elements/input/radio.group.element.js',
    '@aracna/web-components/elements/input/select.element.js',
    '@aracna/web-components/elements/input/slider.element.js',
    '@aracna/web-components/elements/input/switch.element.js',
    '@aracna/web-components/elements/input/text.area.element.js',
    '@aracna/web-components/elements/layout/divider.element.js',
    '@aracna/web-components/elements/navigation/breadcrumb.element.js',
    '@aracna/web-components/elements/navigation/menu.element.js',
    '@aracna/web-components/elements/navigation/navigation.bar.element.js',
    '@aracna/web-components/elements/navigation/navigation.rail.element.js',
    '@aracna/web-components/elements/navigation/tabs.element.js',
    '@aracna/web-components/elements/surface/accordion.element.js',
    '@aracna/web-components/elements/surface/disclosure.element.js',
    'react'
  ],
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    {
      dir: 'dist',
      preserveModules: true,
      preserveModulesRoot: 'src',
      format: 'esm'
    }
  ],
  plugins: [strip({ include: ['src/**/*.ts'], functions: ['[A-Z][a-z]+Logger.(verbose|debug|info)'] }), terser(), typescript()]
})
