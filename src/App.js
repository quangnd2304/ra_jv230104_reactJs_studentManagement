import React, { Component } from 'react';
import Control from './components/Control';
import ListStudent from './components/ListStudent';
import Form from './components/Form';
// Chuyển App từ function Component --> class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Công Phượng", age: 26, sex: true, birthDate: "1997-05-19", birthPlace: "NA", address: "số 1 Nghệ An" },
        { studentId: "SV002", studentName: "Nguyễn Thị Hiền", age: 28, sex: false, birthDate: "1995-03-31", birthPlace: "HN", address: "số 1 Nguyễn Tuấn Tài" },
        { studentId: "SV003", studentName: "Phạm Quang Đạt", age: 20, sex: true, birthDate: "2003-08-26", birthPlace: "HCM", address: "số 1 Lý Tự Trọng" }
      ],
      searchData: "",
      sortDir: "",
      sortBy: ""
    }
  }
  // B1: tạo function ở lớp cha
  getSearchData = (searchData) => {
    this.setState({
      searchData: searchData
    })
  }
  getSortData = (sortDir, sortBy) => {
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy
    })
  }
  render() {
    // Lọc dữ liệu sinh viên ở this.state.student để hiển thị kết quả tìm kiếm
    let studentsShow = [];
    if (this.state.searchData == "") {
      studentsShow = [...this.state.students];
    } else {
      //Search
      studentsShow = this.state.students.filter((student) => {
        if (student.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          return student;
        }
      })
    }
    //Sắp xếp dữ liệu
    if (this.state.sortDir == "studentName") {
      //Sắp xếp theo tên sinh viên
      if (this.state.sortBy == "ASC") {
        // tăng dần
        studentsShow.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0);
      } else {
        // giảm dần
        studentsShow.sort((a, b) => (a.studentName > b.studentName) ? -1 : (a.studentName < b.studentName) ? 1 : 0);
      }
    } else {
      // Sắp xếp theo tuổi sinh viên
      if (this.state.sortBy == "ASC") {
        // tăng dần
        studentsShow.sort((a, b) => a.age - b.age);
      } else {
        // giảm dần
        studentsShow.sort((a, b) => b.age - a.age);
      }
    }
    return (
      //Đoạn html --> jsx
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* CONTROL - START */}
            {/* B2. truyền function xuống con theo props */}
            <Control searchDataProps={this.getSearchData} sortDataProps={this.getSortData} />
            {/* CONTROL - END */}
            {/* LISTSTUDENT - START */}
            <ListStudent students={studentsShow} />
            {/* LISTSTUDENT - END */}
          </div>
        </div>
        {/* FORM - START */}
        <Form />
        {/* FORM - END */}
      </div>
    );
  }
}

export default App;
