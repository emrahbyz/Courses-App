function Course({ id, content, title, price, deleteCourses }) {
  return (
    <div className="card">
      <h2 className="cardTitle">{title}</h2>
      <h3 className="cardPrice"> {price} TL </h3>
      <p> {content} </p>

      <button className="deleteBtn" onClick={() => deleteCourses(id)}>
        Bu kursu sil
      </button>
    </div>
  );
}

export default Course;
