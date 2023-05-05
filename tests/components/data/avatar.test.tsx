import { render } from '@testing-library/react'
import React from 'react'
import { describe, it } from 'vitest'
import { AracnaAvatar } from '../../../src/components/data/avatar'

describe('Avatar', () => {
  it('renders', () => {
    render(<AracnaAvatar />)
    console.log(document.body.innerHTML)
  })
})
