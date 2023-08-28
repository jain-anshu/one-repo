import { ShoppingList } from "../../ShoppingList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load ShoppingList component", () => {
    render(<ShoppingList />);
    const h = screen.getByRole("heading")
    expect(h).toHaveTextContent("Following items are running low/Finished");

});
