import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    // Move to new controller (Student(that associated with this)Teacher)
    // @Get('/:teacherId/students')
    // getStudents() {
    //     return "Teacher Id"
    // }

    // @Put('/:teacherId/students/:studentId')
    // updateStudentTeacher() {}
    @Get()
    getStudents() {
        return "Get associated students of this teacher"
    }

    @Get('/:studentId')
    updateStudentTeacher() {
        return "Get associated student of this teacher with ID"
    }
}
