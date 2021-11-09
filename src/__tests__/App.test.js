import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';

import { ContextComponent } from '../context/Context';
import App from '../App';
import Users from '../components/users/Users';
// import validUsers from '../__mocks__/validUsers.json'

const validUsers = jest.mock('../__mocks__/validUsers.json')

beforeEach(() => {
  jest.restoreAllMocks()
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(validUsers)
  }))
})

test('testFetch', async () => {

})
// test('testFetch', async () => {
//   const { getByTestId, debug } = render(<ContextComponent><App><Users /></App></ContextComponent>)
//   const users = await waitFor(() => getByTestId('users'))

//   console.log("AFTER")
//   console.log(debug())
//   expect(users).anything({
//     name: expect.any(String),
//     username: expect.any(String)
//   })
//   console.log(debug())
// })


// test('if loading is visible', async () => {
//   const { getByTestId, getByText } = render(<ContextComponent><App><SearchBar /></App></ContextComponent>)
//   const input = getByTestId('search-bar')

//   fireEvent.change(input, { target: { value: '' } })
//   const validText = getByText(/Loading.../)

//   expect(validText).toBeInTheDocument()
// })
// expect.objectContaining({
//   x: expect.any(Number),
//   y: expect.any(Number),
// }),