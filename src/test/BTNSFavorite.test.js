import { render, screen } from "@testing-library/react";
import Card from "./components/Card";
import FavoriteCard from "./components/FavoriteCard";


test("Should render add favorite button",()=>{
    render(<Card/>);
    expect(screen.getByRole("button", {name: /Add to Favorite/i})).toBeInTheDocument();
});

test("Should render remove favorite button",()=>{
    render(<FavoriteCard/>);
    expect(screen.getByRole("button", {name: /Remove from Favorite/i})).toBeInTheDocument();
});