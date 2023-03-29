import React, { Component } from 'react';

class Student extends Component {
    handleUpdate = (studentUpdate) => {
        this.props.getInfo(studentUpdate, "EDIT", true);
    }
    handleDelete = (studentId) => {
        this.props.deleteStudent(studentId);
    }
    render() {
        let { student, stt } = this.props;
        console.log(student.sex);
        let sex;
        if (typeof (student.sex) != "boolean") {
            sex = (student.sex === "true");
        } else {
            sex = student.sex;
        }

        return (
            <tr>
                <td>{stt}</td>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.age}</td>
                <td>{sex ? "Nam" : "Nữ"}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={() => this.handleUpdate(student)}
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={() => this.handleDelete(student.studentId)}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Student;