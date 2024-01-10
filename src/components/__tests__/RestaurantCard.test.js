import { render,screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import Mock_Data from "../mocks/resMockData.json";
import "@testing-library/jest-dom";

it('should render Restaurant card component with props', () => {
    render(<ResturantCard resInfo = {Mock_Data}/>);

    const resName = screen.getByText("Pizza Hut");

    expect(resName).toBeInTheDocument();
})