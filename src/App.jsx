import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("#ffffff"); // Default background color

  // Extended list of colors
  const colors = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
    { name: "Yellow", value: "#ffff00" },
    
  ];
  
  return (
    <>
   <div
      className="App"
      style={{
        backgroundColor: bgColor,
        width:"200%",
        marginLeft:"350px",
        width:"auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <h1>Change The Background</h1>
      <div style={{  display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setBgColor(color.value)}
            style={{
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              backgroundColor: color.value,
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>

    </>
  )
}

export default App
