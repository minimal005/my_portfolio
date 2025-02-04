/* eslint-disable react/prop-types */
export const Section = ({ title, children }) => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1 title-color">{title}</h2>
        {children}
      </div>
    </main>
  );
};
