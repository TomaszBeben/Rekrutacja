import { render, screen, waitFor } from '@testing-library/react';
import Users from '../components/users/Users';
import { ContextComponent } from '../context/Context';
import App from '../App';

describe('Users list', () => {
    test('that should render all users', async () => {
        render(<ContextComponent><App><Users /></App></ContextComponent>)
        const UsersElement = await waitFor(() =>
            screen.getAllByTestId(/user-index/)
        );
        expect(UsersElement.length).toBe(10);
    })
})


