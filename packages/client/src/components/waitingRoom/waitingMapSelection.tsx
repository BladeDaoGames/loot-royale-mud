import React, { useState } from 'react';
import { Button } from '..';

interface MapSelectionProps {
  onApply: () => void;
}

const MapSelection = ({ onApply }: MapSelectionProps) => {
  const [maxPlayers, setMaxPlayers] = useState<number>(6); // State to handle max players input

  return (
    <div className="flex flex-col items-center bg-white-beige-200/50 w-4/12">
      <div className="text-beige-100 text-5xl pl-6 pt-4 w-full text-left">
        Select Map
      </div>

      {/* Map container */}
      <div className="flex flex-col justify-center items-center border border-beige-100 rounded-md shadow-right-bottom-medium w-11/12 h-11/12 bg-beige-200/2">
        <img className="w-9/12 py-4" src="/images/default_map.png" alt="Map" />
        <div className="flex justify-center items-center gap-10">
          <img src="/images/polygon_arrow_left.png" alt="Previous Map" />
          <div className="text-4xl -mb-1 tracking-wider text-beige-100">
            Ninja Village (10x10)
          </div>
          <img src="/images/polygon_arrow_right.png" alt="Next Map" />
        </div>
        <div className="text-center text-beige-100 font-thin border border-beige-100 bg-white-beige-50 w-10/12 h-8/12 text-3xl rounded-md shadow-md mt-2 mb-6 leading-very-tight py-1.5">
          Drenched in Secrecy, a ninja village emerges from misty mountains, veiled in shadows and whispered legends.
        </div>
      </div>

      {/* Max player box */}
      <div className="w-11/12 py-2 border border-beige-100 text-beige-100 text-4xl flex justify-center gap-10 mt-4 rounded-md shadow-right-bottom-medium">
        <div>Max Player</div>
        <input
          type="number"
          id="numberInput"
          min="0"
          max="999"
          step="0.1"
          value={maxPlayers}
          onChange={(e) => setMaxPlayers(Number(e.target.value))}
          className="border border-beige-100 text-3xl text-right w-28 bg-white-beige-50"
        />
      </div>

      {/* Apply button */}
      <Button
        onClick={onApply}
        className="w-48 bg-beige-100 border-1 pt-2 rounded-lg text-5xl text-white shadow-right-bottom-medium mt-4 flex justify-center"
      >
        Apply
      </Button>
    </div>
  );
};

export default MapSelection;
