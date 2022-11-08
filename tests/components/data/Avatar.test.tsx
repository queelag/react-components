import { render } from '@testing-library/react'
import React from 'react'
import { describe, it } from 'vitest'
import { QAvatar } from '../../../src'

describe('Avatar', () => {
  it('renders', () => {
    render(<QAvatar />)
    console.log(document.body.innerHTML)
  })
})
