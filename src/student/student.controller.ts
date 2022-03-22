import { Controller, Get, Post, Put } from '@nestjs/common'

// Stands from *:3000/students
@Controller('students') // Controller Decorator
export class StudentController {
    // get student route
    @Get('/:studentId')
    getStudentById() {
        return "Get Student By ID"
    }

    @Get()
    getAllStudent() {
        return "All Students"
    }

    @Post()
    createStudent() {
        return "Create Student"
    }

    @Put('/:studentId')
    updateStudent() {
        return "Update student by ID"
    }
}