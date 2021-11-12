import { render, screen, waitFor, cleanup } from '@testing-library/react';

import { ContextComponent } from '../context/Context';

import App from '../App';
import Users from '../components/users/Users';

const MockUsers = () => {
    return (
        <ContextComponent>
            <App>
                <Users />
            </App>
        </ContextComponent>
    )
}

beforeEach(() => {
    cleanup()
    render(<MockUsers/>);
})

describe('Users list', () => {
    test('user no 1 is render', async () => {
        // render(<MockUsers/>);
        const UsersElement = await screen.findByTestId(/user-index-0/)
        expect(UsersElement).toBeInTheDocument()
    })

    test('that should render all users', async () => {
        // render(<MockUsers/>)
        const UsersElement = await waitFor(() =>
            screen.getAllByTestId(/user-index/)
        );
        expect(UsersElement.length).toBe(10);
    })
})


