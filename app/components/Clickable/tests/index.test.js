/**
 *
 * Tests for Clickable
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from '@utils/testUtils'
import Clickable from '../index'

describe('<Clickable />', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Clickable />)
    expect(baseElement).toMatchSnapshot()
  })

  it('Should contain 1 Clickable component', () => {
    const { getAllByTestId } = renderWithIntl(<Clickable />)
    expect(getAllByTestId('clickable').length).toBe(1)
  })

  it('Should contain render the text according to the textId', () => {
    const { getAllByText } = renderWithIntl(<Clickable textId="repo_list" />)
    expect(getAllByText(/Repository List/).length).toBe(1)
  })

  it('should call the prop onClick when the clickable component is clicked', () => {
    const clickSpy = jest.fn()
    const { getAllByText, queryByText } = renderWithIntl(
      <Clickable onClick={clickSpy} textId="repo_list" />
    )
    expect(getAllByText(/Repository List/).length).toBe(1)
    fireEvent.click(queryByText(/Repository List/))
    expect(clickSpy).toBeCalled()
  })
})
