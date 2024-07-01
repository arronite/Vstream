export const Container = ({ children, gradient }) => {
  return (
    <div className={` mx-01 my-16 px ${gradient ? "slight-gradient" : ""}`}>
      {children}
    </div>
  );
};
