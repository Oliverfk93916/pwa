
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Card from './Card'
import { create } from 'react-test-renderer'

it('renders card component', () => {
	expect(shallow(<Card />)).toMatchSnapshot()
})
