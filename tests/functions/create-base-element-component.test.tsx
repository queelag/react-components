import { ElementComponent, ElementComponentProps } from '@aracna/react'
import { AracnaBaseElementAttributes, AracnaBaseElementEventMap } from '@aracna/web-components'
import { AracnaBaseElement } from '@aracna/web-components/elements/core/base-element'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import React, { ReactNode, useEffect, useState } from 'react'
import { Mock, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { createBaseElementComponent } from '../../src/functions/create-base-element-component'

declare global {
  interface HTMLElementTagNameMap {
    'test-base': TestElement
  }
}

class TestElement extends AracnaBaseElement {}

type TestElementProps = ElementComponentProps<TestElement, AracnaBaseElementAttributes, AracnaBaseElementEventMap>

describe('createBaseElementComponent', () => {
  let Component: ElementComponent<TestElement, TestElementProps>

  beforeAll(() => {
    customElements.define('test-base', TestElement)
  })

  beforeEach(() => {
    Component = createBaseElementComponent('test-base', TestElement, [])
  })

  afterEach(() => {
    cleanup()
  })

  it('works', () => {
    render(<Component data-testid='component' />)
    expect(screen.getByTestId('component')).toBeInstanceOf(HTMLElement)
  })

  it.skip('has working attributes', () => {
    let element: TestElement

    render(
      <Component
        data-testid='component'
        height={1}
        layer={0}
        shape='circle'
        shape-rectangle-radius={1}
        shape-square-radius={1}
        shape-squircle-curvature={1}
        shape-squircle-size={1}
        size={1}
        width={1}
      />
    )

    element = screen.getByTestId('component')
    console.log(element.outerHTML)

    expect(element.getAttribute('height')).toBe('1')
    expect(element.getAttribute('layer')).toBe('0')
    expect(element.getAttribute('shape')).toBe('circle')
    expect(element.getAttribute('shape-rectangle-radius')).toBe('1')
    expect(element.getAttribute('shape-square-radius')).toBe('1')
    expect(element.getAttribute('shape-squircle-curvature')).toBe('1')
    expect(element.getAttribute('shape-squircle-size')).toBe('1')
    expect(element.getAttribute('size')).toBe('1')
    expect(element.getAttribute('width')).toBe('1')

    cleanup()
    render(<Component data-testid='component' height='1px' size='1px' width='1px' />)

    element = screen.getByTestId('component')

    expect(element.getAttribute('height')).toBe('1px')
    expect(element.getAttribute('size')).toBe('1px')
    expect(element.getAttribute('width')).toBe('1px')
  })

  it.skip('has working events', async () => {
    let C: () => ReactNode, onAttributeChange: Mock, onStateChange: Mock

    onAttributeChange = vi.fn()
    onStateChange = vi.fn()

    C = () => {
      const [height, setHeight] = useState(0)

      useEffect(() => {
        setTimeout(() => setHeight(1), 100)
      }, [])

      return <Component data-testid='component' height={height} onAttributeChange={onAttributeChange} onStateChange={onStateChange} />
    }
    render(<C />)

    await waitFor(() => {
      expect(onAttributeChange).toHaveBeenCalledTimes(1)
      expect(onStateChange).toHaveBeenCalledTimes(0)
    })
  })
})
