import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';

import fetch from '../api/fetch';
import { ContextComponent } from '../context/Context';
import App from '../App';
import Users from '../components/users/Users';

const validUsers = jest.mock('../__mocks__/validUsers.json')

// beforeEach(() => {
//   jest.restoreAllMocks()
//   jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
//     json: () => Promise.resolve(validUsers)
//   }))
// })

test('testFetch', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(validUsers)
  }))
  jest.restoreAllMocks()
})