import 'react-native'
import React from 'react'
import Header from '../src/components/Header'
import { render } from '@testing-library/react-native'

it('renders the title', () => {
  const { getByText } = render(<Header />)
  const title = getByText(/wtfdyw/i)
  expect(title).toBeInTheDocument
})

it('renders the subtitle', () => {
  const { getByText } = render(<Header />)
  const subtitle = getByText(/what the food do you want/i)
  expect(subtitle).toBeInTheDocument
})