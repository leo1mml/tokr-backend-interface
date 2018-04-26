import {createStringFromDateBR} from './../helpers/DateHelper'

export default (classes,  text, teachers=[], students=[]) => {
    return classes.filter((lecture = {_teacherId: 'undefined', _studentId: 'undefined'}) => {
      let hasTeacherName = true
      const teacherForClass = teachers.find((teacher) => lecture._teacherId === teacher._id)
      if(teacherForClass){
        hasTeacherName = teacherForClass.name.toLowerCase().includes(text.toLowerCase())
        console.log(hasTeacherName);
      }
      let hasStudentName = true
      const studentForClass = students.find((student) => lecture._studentId === student._id)
      if(studentForClass){
        hasStudentName = studentForClass.name.toLowerCase().includes(text.toLowerCase())
      }
      const textMatch = ((lecture.instrument? lecture.instrument.toLowerCase().includes(text.toLowerCase()) : false) ||
      (lecture.date? createStringFromDateBR(lecture.date).includes(text.toLowerCase()) : false) ||
      hasTeacherName ||
      hasStudentName)
      return textMatch;
    })
  };