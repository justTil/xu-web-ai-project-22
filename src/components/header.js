export default function Header() {
  return (
    <div style={{
      clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
      background: "#00695c",
      width: "100%",
      height: "50vh",
      textAlign: "center",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: "65px"
    }}>
      <h1 style={{marginBottom: "0px"}}>Welcome to <span style={{color: "#e91e63"}}>ARNIE</span></h1>
      <h3>Experience <span style={{color: "#e91e63"}}>AI</span> the fun way!</h3>
    </div>
  );
}