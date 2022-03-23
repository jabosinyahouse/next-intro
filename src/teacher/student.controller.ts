import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentResponseDTO, StudentResponseDTO } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) { }
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDTO[] {
        return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDTO {
        return this.studentService.updateStudentByTeacher(teacherId, studentId)
    }
}
