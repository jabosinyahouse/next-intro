import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDTO, FindStudentResponseDTO, StudentResponseDTO, UpdateStudentDTO } from './dto/student.dto';
import { v4 as uuid } from 'uuid'
import { FindTeacherResponseDTO } from 'src/teacher/dto/teacher.dto';
@Injectable()
export class StudentService {
    private students = students

    getStudents(): FindStudentResponseDTO[] {
        return this.students
    }

    getStudentById(studentId: string) {
        return this.students.find(student => {
            return student.id === studentId
        })
    }

    createStudent(payload: CreateStudentDTO): StudentResponseDTO {
        let newStudent = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent)
        return newStudent
    }

    updateStudent(payload: UpdateStudentDTO, studentId: string) {
        let updatedStudent: StudentResponseDTO

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                if (payload.name === null) {
                    updatedStudent = {
                        id: student.id,
                        name: student.name,
                        teacher: payload.teacher
                    }
                    return updatedStudent

                } else if (payload.teacher === null) {
                    updatedStudent = {
                        id: student.id,
                        name: student.name,
                        teacher: payload.teacher
                    }
                    return updatedStudent

                }
            } else return student
        })

        this.students = updatedStudentList
        return updatedStudent
    }

    getStudentsByTeacherId(teacherId: string): FindStudentResponseDTO[] {
        // Filter out the student that doesn't have this(input) teacherId
        return this.students.filter(student => {
            return student.teacher
        })
    }

    updateStudentByTeacher(teacherId: string, studentId: string): StudentResponseDTO {
        let updatedStudent: StudentResponseDTO

        const updatedStudentList = this.students.map(student => {
            if (student.id === studentId) {
                updatedStudent = {
                    // spread out this current student from students
                    ...student,
                    teacher: teacherId
                }

                return updatedStudent
            } else return student
        })

        this.students = updatedStudentList

        return updatedStudent
    }
}

