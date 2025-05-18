// src/components/game/NarrativeDisplay.tsx
import React from "react";

interface NarrativeDisplayProps {
  text: string; // The story text to display
  imageUrl?: string; // Optional URL for the background image
}

const NarrativeDisplay: React.FC<NarrativeDisplayProps> = ({
  text,
  imageUrl,
}) => {
  return (
    <div className='mb-6 p-4 bg-white rounded-lg shadow-md'>
      {" "}
      {/* Tailwind styling */}
      {imageUrl && (
        // Display image if provided
        // TODO: Use Next.js Image component
        <img
          src={imageUrl}
          alt='Scene illustration'
          className='w-full h-auto rounded-md mb-4 object-cover'
        />
      )}
      {/* Display narrative text */}
      {/* You might want to parse Markdown here if your text includes it */}
      <p className='text-gray-800 whitespace-pre-wrap'>{text}</p>{" "}
      {/* whitespace-pre-wrap to respect newlines */}
    </div>
  );
};

export default NarrativeDisplay;
