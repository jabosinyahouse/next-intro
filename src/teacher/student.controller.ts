import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ) {
        return `Get all students that belong to the teacher with an ID: ${teacherId}`
    }

    @Get('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ) {
        return `Update student id: ${studentId} of the teacher id: ${teacherId}`
    }
}
