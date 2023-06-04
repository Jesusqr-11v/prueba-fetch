export const Card = ({ img, name, status, species }) => {
  const alt = `Imagen de ${name}`;

  let estado = status.toLowerCase() === "alive" ? "vivo" : "muerto";

  return (
    <>
      <div className="card">
        <div>
          <img src={img} alt={alt} className="image" />
        </div>
        <div className="data">
        <p><strong>{species}</strong></p>
          <h2>{name}</h2>
          <div className="info">
            <div className={estado}></div>
            <p>{status}</p>
          </div>
          
        </div>
      </div>
    </>
  );
};
