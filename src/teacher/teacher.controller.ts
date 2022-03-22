import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return "All Teachers..."
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ) {
        return `Get Teacher Id: ${teacherId}`
    }

    // Move to new controller (Student(that associated with this)Teacher)
    // @Get('/:teacherId/students')
    // getStudents() {
    //     return "Teacher Id"
    // }

    // @Put('/:teacherId/students/:studentId')
    // updateStudentTeacher() {}
}
