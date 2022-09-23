import { render } from "@testing-library/react";
import Header from "../components/Header";

test("Title App",()=>{
    render(<Header/>);
    const title = screen.getByText("React Meetups");
    expect(title).toBeInTheDocument();
});
