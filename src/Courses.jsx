import Course from "./Course";
function Courses({ courses, deleteCours }) {
  return (
    <div className="mainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course key={course.id} {...course} deleteCourses={deleteCours} />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
