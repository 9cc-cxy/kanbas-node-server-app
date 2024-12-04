import * as enrollmentsDao from "../Enrollments/dao.js";

export default function UserRoutes(app) {

  const createEnrollment = async (req, res) => {
    const { courseId, userId } = req.params;
    const newEnrollments = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollments);
  };

  const deleteEnrollment = async (req, res) => {
    const { courseId, userId } = req.params;
    const status = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  };

  app.post("/api/enrollments/:courseId/:userId", createEnrollment);
  app.delete("/api/enrollments/:courseId/:userId", deleteEnrollment);
}
