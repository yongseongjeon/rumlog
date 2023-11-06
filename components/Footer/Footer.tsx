function Footer() {
  const curYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center h-16 p-8 text-gray-400">
      <p>© {curYear} Rumka. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
