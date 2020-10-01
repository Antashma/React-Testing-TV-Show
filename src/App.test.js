import React from 'react';
import App from './App';
import {fireEvent, getByDisplayValue, getByTestId, queryAllByRole, render, wait} from '@testing-library/react';
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import {testShowData} from './testData.js'

jest.mock('./api/fetchShow');

 /* test('app renders', () => {
  render(<App />)
})
 */

test('app fetches show data and renders the data', async () => {

  mockFetchShow.mockResolvedValueOnce({data: testShowData})
  const { getByText, getByRole } = render(<App />)
  await wait();
  
  const dropdown =  getByText(/select a season/i)
  const showImg  =  getByRole('img')
  const showHeader = getByRole('heading')
  
})
