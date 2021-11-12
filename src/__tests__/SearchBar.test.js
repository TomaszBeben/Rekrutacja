import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';

import { ContextComponent } from '../context/Context';
import App from '../App';
import SearchBar from '../components/searchBar/SearchBar';

const MockSearchBar = () => {
    return (
        <ContextComponent>
            <App>
                <SearchBar />
            </App>
        </ContextComponent>
    )
}

describe('Search bar is working', () => {
    test('if search bar returns correct value', async () => {
        const { getByTestId, getByText } = render(<MockSearchBar />);
        const input = getByTestId('search-bar');

        fireEvent.change(input, { target: { value: 'lea' } });
        const validText = await waitFor(() =>
            getByText(/Leanne Graham/)
        );
        expect(validText).toBeInTheDocument();
    })

    test('if loading is visible', async () => {
        const { getByTestId, getByText } = render(<MockSearchBar />)
        const input = getByTestId('search-bar')

        fireEvent.change(input, { target: { value: '' } })
        const validText = getByText(/Loading.../)

        expect(validText).toBeInTheDocument()
    })
    cleanup()
})
