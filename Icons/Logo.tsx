function IconLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 20 180 65" width="80" height="30">
      <defs>
        <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#999"></stop>
          <stop offset="100%" stopColor="#000"></stop>
        </linearGradient>
      </defs>
      <text x="20" y="70" fontSize="60" fontFamily="Arial Black, sans-serif" fill="url(#grayGrad)">Ярми</text>
    </svg>
  );
}

export default IconLogo;
