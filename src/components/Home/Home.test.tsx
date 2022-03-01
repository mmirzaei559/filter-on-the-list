import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import {Home} from "./Home";

describe("Home Component", () => {
    test('rendered search input', async () => {
        const {getByTestId} = render(<Home />);
        const input = getByTestId("searchUsers");
        const inputSearch = screen.getByTestId('searchUsers');
        userEvent.type(inputSearch, 'Leonard');
        await expect(input).toBeTruthy();
        await expect(inputSearch).toHaveValue('Leonard')
    });
})

