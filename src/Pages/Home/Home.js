import './Home.css';

const HomePage = ({ studentList }) => {
    return (
        <div className='page-container'>
            <h2>Students Details</h2>
            <div className='list-container'>
                {studentList.map((student, index) =>
                    <div key={index} className='card-container'>
                        <h4>{student.name}</h4>
                        <label>{student.rollNo}</label>
                        <p>{student.branch}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage;