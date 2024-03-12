import db from './db/index'
const studentsData = [
  // Example for one student
  {
    name: 'Sara Johnson',
    email: 'sara.johnson@example.com', // Added email field
    courses: [
      'Biology 101',
      'History of Europe' /* other courses this student is taking */
    ]
  }
  // Add similar entries for other students
]

// Courses data
const coursesData = [
  // Example for one course
  {
    name: 'Biology 101',
    description: 'Introduction to Biology', // Added description
    scores: [
      { studentId: '1001', score: 90, letter: 'A' } // You need to map scores to letter grades
      // Add score entries for other students in this course
    ]
  }
  // Add similar entries for other courses
]

// Insert students data
studentsData.forEach((student) => {
  db.students.insertOne(student)
})

// Insert courses data
coursesData.forEach((course) => {
  db.courses.insertOne(course)
})
