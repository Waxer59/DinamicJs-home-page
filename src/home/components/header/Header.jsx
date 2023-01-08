import "./styles/HeaderStyles.css";

export const Header = () => {
  return (
    <header className="header">
      <video className="header-video" autoPlay muted loop>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </header>
  );
};
