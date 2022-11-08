import { render } from '@testing-library/react'
import React from 'react'
import { describe, it } from 'vitest'
import { Avatar } from '../../../src'

describe('Avatar', () => {
  it('renders', () => {
    console.log(Avatar)

    render(<Avatar />)

    console.log(document.body.innerHTML)
  })
})
