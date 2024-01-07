import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Describe is used to group many test cases in one which are having same charasteristics. We can have many describes in one page of test
// case and also can have nested describes (i.e. -> one describe inside another describe).

// Note -> in place of word 'test', we can write word 'it' also. 'it' is just an Alias of word 'test'

describe('Contact page Test Case', () => {
    test('should load contact component', () => { 
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    
    //Nesting the describe
    describe("Checking for button in form of Contact page", () => {
        test('should load button inside Contact component', () => { 
            render(<Contact />);
        
            // const button = screen.getByRole("button");
            const button = screen.getByText("Submit");
        
            expect(button).toBeInTheDocument();
        })
    })
    
    it('should get input inside Contact component', () => {
        render(<Contact />)
    
        const input = screen.getByPlaceholderText("Enter your email id");
    
        expect(input).toBeInTheDocument();
    })
    
    
    it('should load all input boxes inside our Contact component', () => {
        render(<Contact />);
    
        // This step is known as querying.
        const inputBoxes = screen.getAllByRole("textbox");
    
        console.log(inputBoxes.length); // If you not know how many input boxes are there to be expected, then just het length of all input boxes and then expect it.
    
        expect(inputBoxes.length).toBe(4);
    })
})

