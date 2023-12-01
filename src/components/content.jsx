import Card from "./card";
import { useState } from "react";
import Footer from "./footer";
import "../styles/content.css";
function Content() {
  const [score, setScore] = useState(["", ""]);

  return (
    <div className="content">
      <Footer></Footer>
      <div className="main">
        <Card number="5"></Card>
        <Card number="3"></Card>
        <Card number="1"></Card>
        <Card number="5"></Card>
        <Card number="3"></Card>
        <Card number="1"></Card>
        <Card number="5"></Card>
        <Card number="3"></Card>
        <Card number="1"></Card>
      </div>
    </div>
  );
}

export default Content;
