// CONFIGURATION
import React from "react";
import { render, screen, fireEvent } from "../../../test-utils/customRender";
import userEvent from '@testing-library/user-event'

// COMPONENTS
import { LoginForm } from "./LoginForm";

const props = {
    user: {},
    handleChange: jest.fn(),
    errors: {},
    handleClick: jest.fn()
};

test('render without errors', async () => {
    render(<LoginForm {...props} />);
    expect(await screen.findByText('Inicia Sesión')).toBeTruthy();
});

test('render the inputs and button', async () => {
    render(<LoginForm {...props} />);
    expect(await screen.findByLabelText('Email')).toBeTruthy();
    expect(await screen.findByLabelText('Contraseña')).toBeTruthy();
    expect(await screen.findByText('Iniciar Sesión')).toBeTruthy();
});

describe('checks if working the inputs and button', () => {

    test('should works the email writting', async () => {
        render(<LoginForm {...props} />);
        const emailInput = screen.getByLabelText('Email');
        expect(await emailInput.value).toEqual('');      

        fireEvent.change(emailInput, { target: { value: 'antonio@hotmail.com' } });
        expect(await emailInput.value).toEqual('antonio@hotmail.com');
        expect(props.handleChange).toHaveBeenCalledTimes(1);
    });

    test('should works the password writting', async () => {
        render(<LoginForm {...props} />);
        const passwordInput = screen.getByLabelText('Contraseña');
        expect(await passwordInput.value).toEqual('');      

        fireEvent.change(passwordInput, { target: { value: '12345' } });
        expect(await passwordInput.value).toEqual('12345');
        expect(props.handleChange).toHaveBeenCalledTimes(1);
    });

    test('should works the button click', async () => {
        render(<LoginForm {...props} />);
        const button = screen.getByText('Iniciar Sesión');

        userEvent.click(button);
        expect(props.handleClick).toHaveBeenCalledTimes(1);
    });

});
