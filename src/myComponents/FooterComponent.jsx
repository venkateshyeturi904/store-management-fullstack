import React from 'react';

export default function FooterComponent() {
  let footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    background: "#343a40", // You can adjust the background color as needed
    color: "#fff", // You can adjust the text color as needed
    padding: "10px 0",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <p>
        Copyright &copy; storemanagementsystem.com
      </p>
    </footer>
  );
}
