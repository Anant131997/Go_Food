import { render } from "@testing-library/react"
import Body from "../Body";
import Mock_Data from "../mocks/allRestaurantList.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data);
        }
    })
})

it('should load the Body component along with the search button', async() => {
    await act( async () => render(<Body/>))
}) 