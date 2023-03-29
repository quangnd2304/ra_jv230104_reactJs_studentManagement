import React, { Component } from 'react';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: ""
        }
    }
    handleChange = (event) => {
        this.setState({
            searchData: event.target.value
        })
    }
    handleSearch = (event) => {
        event.preventDefault();
        // B3. Gọi function của cha để truyền dữ liệu
        this.props.searchDataProps(this.state.searchData);
    }
    handSort = (event) => {
        let sortData = event.target.value;
        let arrSort = sortData.split("-");
        this.props.sortDataProps(arrSort[0], arrSort[1]);
    }
    handleCreate = () => {
        this.props.createStudent("CREATE", true);
    }
    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3 ">
                        <button type="button" className="btn btn-primary btn-icon-text" onClick={this.handleCreate}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6 ">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                name='searchData'
                                onChange={this.handleChange}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" name='sortData' onChange={this.handSort}>
                            <option value="">Sắp xếp</option>
                            <option value="studentName-ASC">Tên SV tăng dần</option>
                            <option value="studentName-DESC">Tên SV giảm dần</option>
                            <option value="age-ASC">Tuổi tăng dần</option>
                            <option value="age-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;