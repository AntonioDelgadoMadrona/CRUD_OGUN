// CONFIGURATION
import { render, screen } from "../../test-utils/customRender";

// COMPONENTS
import { Login } from "./Login";

const props = {
    loginAction: jest.fn(),
};

test('render without errors', async () => {
    render(<Login {...props} />);
    expect(await screen.findByText('Todas las películas y series que desees, y mucho más.')).toBeTruthy();
});