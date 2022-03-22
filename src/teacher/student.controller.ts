import { Controller, Get, Param } from '@nestjs/common';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDTO[] {
        return `Get all students that belong to the teacher with an ID: ${teacherId}`
    }

    @Get('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDTO {
        return `Update student id: ${studentId} of the teacher id: ${teacherId}`
    }
}
