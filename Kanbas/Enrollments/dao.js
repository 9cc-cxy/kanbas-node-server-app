import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollments = { _id: Date.now(), user: userId, course: courseId };
  if (
    !enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === courseId
    )
  ) {
    Database.enrollments = [...Database.enrollments, newEnrollments];
  }
  return newEnrollments;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
}
