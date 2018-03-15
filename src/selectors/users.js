// Get visible students

export default (students,  text, status = '') => {
  return students.filter((student) => {
    const textMatch = student.name.toLowerCase().includes(text.toLowerCase()) ||
        student.cpf.toLowerCase().includes(text.toLowerCase()) ||
        student.email.toLowerCase().includes(text.toLowerCase()) ||
        student.instruments.toString().toLowerCase().includes(text.toLowerCase())
    let statusMatch = true
    if(status !== ''){
      statusMatch = status === student.status
    }
    return textMatch && statusMatch;
  })
};