const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;

  return (
    <footer className="footer">
      We&apos;re currently{" "}
      {hour >= openHour && hour <= closedHour ? "open" : "closed"}
    </footer>
  );
};

export { Footer };
