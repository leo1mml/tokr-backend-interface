// Get visible students

export default (students,  text) => {
  return students.filter((student) => {
    const textMatch = student.name.toLowerCase().includes(text.toLowerCase()) ||
        student.cpf.toLowerCase().includes(text.toLowerCase()) ||
        student.email.toLowerCase().includes(text.toLowerCase()) ||
        student.instruments.toString().toLowerCase().includes(text.toLowerCase())

    return textMatch;
  })
};