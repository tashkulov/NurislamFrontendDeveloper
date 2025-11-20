const ScanlineEffect = () => {
  return (
    <>
      {/* Scanlines overlay */}
      <div className="scanlines fixed top-0 left-0 w-full h-full pointer-events-none z-40" />

      {/* CRT flicker effect */}
      <div className="crt-flicker fixed top-0 left-0 w-full h-full pointer-events-none z-40" />

      {/* Vignette effect */}
      <div className="vignette fixed top-0 left-0 w-full h-full pointer-events-none z-40" />
    </>
  );
};

export default ScanlineEffect;
