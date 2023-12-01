import "../styles/footer.css";

function Footer({ score, highscore }) {
  return (
    <div className="footer">
      <h1>Current score {score}</h1>
      <h1>Highest score {highscore}</h1>
    </div>
  );
}
export default Footer;
