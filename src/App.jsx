import Courses from "./Courses";
import Loading from "./Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {courses.length === 0 ? (
            <div className="refreshText">
              <h2>Bütün kursları sildiniz</h2>
              <div>
                <button
                  onClick={() => {
                    fetchCourses();
                  }}
                  className="refreshButton"
                >
                  Kurslarımı yenile
                </button>
              </div>
            </div>
          ) : (
            <Courses courses={courses} deleteCours={removeCourse} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
