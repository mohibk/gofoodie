const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className="footer">
      &copy; {currentYear} Mohib Khan. All Rights Reserved.
    </div>
  );
};

export default Footer;
