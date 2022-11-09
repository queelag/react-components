import strip from '@rollup/plugin-strip'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  external: [
    '@queelag/core',
    '@queelag/react',
    '@queelag/web',
    '@queelag/web-components/elements/aria/aria.accordion.element',
    '@queelag/web-components/elements/aria/aria.alert.element',
    '@queelag/web-components/elements/aria/aria.alert.dialog.element',
    '@queelag/web-components/elements/aria/aria.breadcrumb.element',
    '@queelag/web-components/elements/aria/aria.button.element',
    '@queelag/web-components/elements/aria/aria.carousel.element',
    '@queelag/web-components/elements/aria/aria.check.box.element',
    '@queelag/web-components/elements/aria/aria.combo.box.element',
    '@queelag/web-components/elements/aria/aria.dialog.element',
    '@queelag/web-components/elements/aria/aria.disclosure.element',
    '@queelag/web-components/elements/aria/aria.feed.element',
    '@queelag/web-components/elements/aria/aria.link.element',
    '@queelag/web-components/elements/aria/aria.list.box.element',
    '@queelag/web-components/elements/aria/aria.menu.element',
    '@queelag/web-components/elements/aria/aria.meter.element',
    '@queelag/web-components/elements/aria/aria.radio.group.element',
    '@queelag/web-components/elements/aria/aria.slider.element',
    '@queelag/web-components/elements/aria/aria.switch.element',
    '@queelag/web-components/elements/aria/aria.tabs.element',
    '@queelag/web-components/elements/aria/aria.tooltip.element',
    '@queelag/web-components/elements/data/avatar.element',
    '@queelag/web-components/elements/data/badge.element',
    '@queelag/web-components/elements/data/carousel.element',
    '@queelag/web-components/elements/data/chip.element',
    '@queelag/web-components/elements/data/feed.element',
    '@queelag/web-components/elements/data/icon.element',
    '@queelag/web-components/elements/data/image.element',
    '@queelag/web-components/elements/data/list.element',
    '@queelag/web-components/elements/data/tooltip.element',
    '@queelag/web-components/elements/input/button.element',
    '@queelag/web-components/elements/input/button.group.element',
    '@queelag/web-components/elements/input/check.box.element',
    '@queelag/web-components/elements/input/form.element',
    '@queelag/web-components/elements/input/input.element',
    '@queelag/web-components/elements/input/input.file.element',
    '@queelag/web-components/elements/input/radio.group.element',
    '@queelag/web-components/elements/input/select.element',
    '@queelag/web-components/elements/input/slider.element',
    '@queelag/web-components/elements/input/switch.element',
    '@queelag/web-components/elements/input/text.area.element',
    '@queelag/web-components/elements/layout/divider.element',
    '@queelag/web-components/elements/navigation/breadcrumb.element',
    '@queelag/web-components/elements/navigation/menu.element',
    '@queelag/web-components/elements/navigation/navigation.bar.element',
    '@queelag/web-components/elements/navigation/navigation.rail.element',
    '@queelag/web-components/elements/navigation/tabs.element',
    '@queelag/web-components/elements/surface/accordion.element',
    '@queelag/web-components/elements/surface/disclosure.element',
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
