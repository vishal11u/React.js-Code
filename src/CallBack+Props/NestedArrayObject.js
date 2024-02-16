import React from 'react'

function NestedArrayObject() {
    const students = [
        {
            id: 1,
            name: "John Doe",
            age: 20,
            courses: ["Math", "Physics", "Chemistry"],
            grades: {
                math: 85,
                physics: 78,
                chemistry: 90
            }
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 21,
            courses: ["Biology", "History", "English"],
            grades: {
                biology: 92,
                history: 85,
                english: 88
            }
        },
        {
            id: 3,
            name: "Michael Johnson",
            age: 19,
            courses: ["Computer Science", "Art", "Geography"],
            grades: {
                computerScience: 95,
                art: 80,
                geography: 75
            }
        },
        {
            id: 4,
            name: "Emily Davis",
            age: 20,
            courses: ["Economics", "Music", "Physical Education"],
            grades: {
                economics: 88,
                music: 82,
                physicalEducation: 90
            }
        },
        {
            id: 5,
            name: "David Brown",
            age: 22,
            courses: ["Psychology", "Sociology", "Anthropology"],
            grades: {
                psychology: 90,
                sociology: 85,
                anthropology: 78
            }
        },
        {
            id: 6,
            name: "Sarah Wilson",
            age: 20,
            courses: ["Chemistry", "Physics", "Math"],
            grades: {
                chemistry: 88,
                physics: 92,
                math: 85
            }
        },
        {
            id: 7,
            name: "Daniel Martinez",
            age: 21,
            courses: ["English", "History", "Biology"],
            grades: {
                english: 85,
                history: 90,
                biology: 92
            }
        },
        {
            id: 8,
            name: "Olivia Taylor",
            age: 19,
            courses: ["Geography", "Art", "Computer Science"],
            grades: {
                geography: 78,
                art: 85,
                computerScience: 95
            }
        },
        {
            id: 9,
            name: "Ethan Thomas",
            age: 20,
            courses: ["Physical Education", "Music", "Economics"],
            grades: {
                physicalEducation: 90,
                music: 88,
                economics: 82
            }
        },
        {
            id: 10,
            name: "Sophia Rodriguez",
            age: 22,
            courses: ["Anthropology", "Sociology", "Psychology"],
            grades: {
                anthropology: 78,
                sociology: 85,
                psychology: 90
            }
        }
    ];

    return (
        <div className="container mx-auto bg-gray-300 py-5 px-16">
            <table className="table-auto w-full bg-white shadow-lg">
                <thead>
                    <tr className='bg-gray-800 text-white'>
                        <th className="px-4 py-2 border font-medium">ID</th>
                        <th className="px-4 py-2 border font-medium">Name</th>
                        <th className="px-4 py-2 border font-medium">Age</th>
                        <th className="px-4 py-2 border font-medium">Courses</th>
                        <th className="px-4 py-2 border font-medium">Grades</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td className="border px-4 py-2 text-center">{student.id}</td>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2 text-center">{student.age}</td>
                            <td className="border px-4 py-2 text-center">{student.courses.join(",")}</td>
                            <td className="border px-4 py-2">
                                {Object.entries(student.grades).map(([subject, grade]) => (
                                    <p key={subject}>{subject}: {grade}</p>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NestedArrayObject;
