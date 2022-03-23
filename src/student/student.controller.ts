import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto'
import { StudentService } from './student.service'
// Stands from *:3000/students
@Controller('students') // Controller Decorator
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    // get student route
    @Get()
    getAllStudent(): FindStudentResponseDTO[] {
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudentById(
        // @Param() params: { studentId: string }
        @Param('studentId') studentId: string
    ): FindStudentResponseDTO {
        // Destructure or use above (@Param dec) to specify what we actually want
        // const {studentId } = params
        // console.log(params)
        // console.log(studentId)
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(
        // The post-req's body
        @Body() body: CreateStudentDTO
    ): StudentResponseDTO {
        console.log(body)
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDTO
    ): StudentResponseDTO {
        return this.studentService.updateStudent(body, studentId)
    }
}