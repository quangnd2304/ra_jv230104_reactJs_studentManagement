import React, { Component } from 'react';
import Student from './Student';

class ListStudent extends Component {
    getInfoStudent = (student, actionName, toggle) => {
        this.props.getInfo(student, actionName, toggle);
    }
    deleteStudent = (studentId) => {
        this.props.deleteStudent(studentId);
    }
    render() {
        //let students = this.props.students
        let { students } = this.props;
        // render danh sách sinh viên
        let elementListStudent = students.map((st, index) => {
            return <Student key={st.studentId} student={st} stt={index + 1} getInfo={this.getInfoStudent} deleteStudent={this.deleteStudent} />
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementListStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudent;