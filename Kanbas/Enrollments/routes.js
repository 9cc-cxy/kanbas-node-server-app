import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {

  const createEnrollment = (req, res) => {
    const { courseId, userId } = req.params;
    const newEnrollments = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollments);
  };

  const deleteEnrollment = (req, res) => {
    const { courseId, userId } = req.params;
    const status = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  };

  app.post("/api/enrollments/:courseId/:userId", createEnrollment);
  app.delete("/api/enrollments/:courseId/:userId", deleteEnrollment);
}
