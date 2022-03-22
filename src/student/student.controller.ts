import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto'
// Stands from *:3000/students
@Controller('students') // Controller Decorator
export class StudentController {
    // get student route
    @Get()
    getAllStudent() {
        return "All Students"
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
        return `Get Student with ID of: ${studentId}`
    }

    @Post()
    createStudent(
        // The post-req's body
        @Body() body: CreateStudentDTO
    ): FindStudentResponseDTO[] {
        console.log(body)
        return `Create Student With The Following Data: ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDTO
    ): StudentResponseDTO {
        return `Update Student With ID of ${studentId} with this data: ${JSON.stringify(body)}`
    }
}