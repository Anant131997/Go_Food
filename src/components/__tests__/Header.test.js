import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it('should render login button in Header component', () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})

it('should render Cart in Header component', () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    // const cart = screen.getByText("Cart - (0 items)");
    const cart = screen.getByText(/Cart/); 

    // -> Anything written in between // is known as Regex. Here /Cart/ is a Regex.

    expect(cart).toBeInTheDocument();
})

it('should change login button to logout button in Header component on click', () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", {name: "Logout"});

    expect(logOutButton).toBeInTheDocument();
})