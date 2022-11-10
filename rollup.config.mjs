import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  external: [
    '@queelag/core',
    '@queelag/react',
    '@queelag/web',
    '@queelag/web-components/elements/aria/aria.accordion.element.js',
    '@queelag/web-components/elements/aria/aria.alert.element.js',
    '@queelag/web-components/elements/aria/aria.alert.dialog.element.js',
    '@queelag/web-components/elements/aria/aria.breadcrumb.element.js',
    '@queelag/web-components/elements/aria/aria.button.element.js',
    '@queelag/web-components/elements/aria/aria.carousel.element.js',
    '@queelag/web-components/elements/aria/aria.check.box.element.js',
    '@queelag/web-components/elements/aria/aria.combo.box.element.js',
    '@queelag/web-components/elements/aria/aria.dialog.element.js',
    '@queelag/web-components/elements/aria/aria.disclosure.element.js',
    '@queelag/web-components/elements/aria/aria.feed.element.js',
    '@queelag/web-components/elements/aria/aria.link.element.js',
    '@queelag/web-components/elements/aria/aria.list.box.element.js',
    '@queelag/web-components/elements/aria/aria.menu.element.js',
    '@queelag/web-components/elements/aria/aria.meter.element.js',
    '@queelag/web-components/elements/aria/aria.radio.group.element.js',
    '@queelag/web-components/elements/aria/aria.slider.element.js',
    '@queelag/web-components/elements/aria/aria.switch.element.js',
    '@queelag/web-components/elements/aria/aria.tabs.element.js',
    '@queelag/web-components/elements/aria/aria.tooltip.element.js',
    '@queelag/web-components/elements/data/avatar.element.js',
    '@queelag/web-components/elements/data/badge.element.js',
    '@queelag/web-components/elements/data/carousel.element.js',
    '@queelag/web-components/elements/data/chip.element.js',
    '@queelag/web-components/elements/data/feed.element.js',
    '@queelag/web-components/elements/data/icon.element.js',
    '@queelag/web-components/elements/data/image.element.js',
    '@queelag/web-components/elements/data/list.element.js',
    '@queelag/web-components/elements/data/tooltip.element.js',
    '@queelag/web-components/elements/input/button.element.js',
    '@queelag/web-components/elements/input/button.group.element.js',
    '@queelag/web-components/elements/input/check.box.element.js',
    '@queelag/web-components/elements/input/form.element.js',
    '@queelag/web-components/elements/input/input.element.js',
    '@queelag/web-components/elements/input/input.file.element.js',
    '@queelag/web-components/elements/input/radio.group.element.js',
    '@queelag/web-components/elements/input/select.element.js',
    '@queelag/web-components/elements/input/slider.element.js',
    '@queelag/web-components/elements/input/switch.element.js',
    '@queelag/web-components/elements/input/text.area.element.js',
    '@queelag/web-components/elements/layout/divider.element.js',
    '@queelag/web-components/elements/navigation/breadcrumb.element.js',
    '@queelag/web-components/elements/navigation/menu.element.js',
    '@queelag/web-components/elements/navigation/navigation.bar.element.js',
    '@queelag/web-components/elements/navigation/navigation.rail.element.js',
    '@queelag/web-components/elements/navigation/tabs.element.js',
    '@queelag/web-components/elements/surface/accordion.element.js',
    '@queelag/web-components/elements/surface/disclosure.element.js',
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
