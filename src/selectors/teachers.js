// Get visible students

export default (teachers, { text }) => {
    return teachers.filter((teacher) => {
      const textMatch = teacher.name.toLowerCase().includes(text.toLowerCase()) ||
          teacher.cpf.toLowerCase().includes(text.toLowerCase()) ||
          teacher.email.toLowerCase().includes(text.toLowerCase()) ||
          teacher.instruments.toString().toLowerCase().includes(text.toLowerCase())
  
      return textMatch;
    })
  };