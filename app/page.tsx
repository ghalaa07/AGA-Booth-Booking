"use client";

import { useState } from "react";

export default function Home() {
  const [selectedBooth, setSelectedBooth] = useState("");
  
 const sectionA = ["A1", "A2", "A3", "A4", "A5"];
const sectionB = ["B1", "B2", "B3", "B4", "B5"];
const sectionC = ["C1", "C2", "C3", "C4", "C5"];
const sectionD = ["D1", "D2", "D3", "D4", "D5"];

const booths = [
  ...sectionA,
  ...sectionB,
  ...sectionC,
  ...sectionD,
];

  const [bookedBooths, setBookedBooths] = useState([
    "B5",
    "C3",
    "D2",
  ]);

  const bookedCount = bookedBooths.length;
  const availableCount = booths.length - bookedCount;
return (

 <div>
 <h1
  style={{
    fontSize: "36px",
    marginBottom: "10px",
  }}
>
  AGA Reservation System
</h1>

    <p
  style={{
    color: "#c5c2c2",
    marginBottom: "20px",
  }}
>
  Interactive booth booking platform
</p>

      <p>You selected: {selectedBooth}</p>
  <div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      backgroundColor: "#1f2937",
      padding: "32px",
      borderRadius: "10px",
      fontWeight: "bold",
      minWidth: "180px",
    }}
  >
    <h3>Booked Booths</h3>
    <p>{bookedCount}</p>
  </div>

  <div
    style={{
      backgroundColor: "#1f2937",
      padding: "32px",
      borderRadius: "10px",
      fontWeight: "bold",
      minWidth: "180px",
    }}
  >
    <h3>Available Booths</h3>
    <p>{availableCount}</p>
  </div>
</div>

{selectedBooth && (
   <div>
    <h2>{selectedBooth} Details</h2>
    <p>📏Size: 3m x 3m</p>
    <p>💰Price: $500</p>

    
  <button
    onClick={() => {
    setBookedBooths([
          ...bookedBooths,
                selectedBooth
              ]);
              setSelectedBooth("");
            }}

   style={{
      padding: "10px 20px",
      backgroundColor: "#5588f7",
      color: "white",
       border: "none",
      borderRadius: "8px",
      cursor: "pointer",
        marginTop: "10px",
        fontWeight: "bold",
            }}
        
          >
            Book Booth
          </button>
        </div>

      )}
     <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 180px)",
          gap: "20px",
        }}

      >
 {booths.map((booth) => (

     <div
     key={booth}
    onClick={() => {
    if (bookedBooths.includes(booth)) {

        return;
              }

              setSelectedBooth(booth);
            }}
   style={{
     width: "180px",
     height: "120px",
     backgroundColor: bookedBooths.includes(booth)
            ? "#ee2424"
     : booth === selectedBooth
            ? "#248146"
            : "#545355",
             border:
             booth === selectedBooth
             ?"4px solid gold"
             : "2px solid black",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
             borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)", 
            }}
          >
      {booth}
 </div>
 ))}
 </div>
  </div>
  );
}