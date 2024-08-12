import { createElementComponent } from '@aracna/react'
import { defineCustomElement } from '@aracna/web'
import { AracnaBaseElement } from '@aracna/web-components/elements/core/base-element'
import { render } from '@testing-library/react'
import type { PropertyDeclarations } from 'lit'
import React, { ReactElement } from 'react'
import { describe, it } from 'vitest'
import { useObservableElementComponent } from '../../src/hooks/use-observable-element-component'

class TestObservableElement extends AracnaBaseElement {
  attribute?: string
  state?: string

  static properties: PropertyDeclarations = {
    attribute: { type: String },
    state: { type: String, state: true }
  }
}

defineCustomElement('test-element', TestObservableElement)

declare global {
  interface HTMLElementTagNameMap {
    'test-observable': TestObservableElement
  }
}

const TestObservableComponent = createElementComponent('test-observable', TestObservableElement)

describe('useObservableElementComponent', () => {
  it('tracks no changes', async () => {
    let Component: () => ReactElement

    Component = () => {
      const { element, ref } = useObservableElementComponent<'test-observable'>()

      return <TestObservableComponent ref={ref} />
    }

    render(<Component />)
  })
})
