import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDTO } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers(): FindTeacherResponseDTO {
        return "All Teachers..."
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId') teacherId: string
    ): FindTeacherResponseDTO {
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
