// src/components/game/Choices.tsx
import React from "react";
import { type Choice } from "@/lib/narrativeStructure"; // Import the Choice type
import Button from "../Button"; // Import the reusable Button component

interface ChoicesProps {
  choices: Choice[]; // Array of choices to display
  onChoiceSelected: (choiceId: string) => void; // Function to call when a choice is clicked
}

const Choices: React.FC<ChoicesProps> = ({ choices, onChoiceSelected }) => {
  return (
    <div className='flex flex-col space-y-3'>
      {" "}
      {/* Tailwind styling */}
      {/* Map over the choices and render a button for each */}
      {choices.map((choice) => (
        <Button
          key={choice.id} // Use choice ID as the unique key
          onClick={() => onChoiceSelected(choice.id)} // Call handler with choice ID
        >
          {choice.text} {/* Display choice text on the button */}
        </Button>
      ))}
    </div>
  );
};

export default Choices;
