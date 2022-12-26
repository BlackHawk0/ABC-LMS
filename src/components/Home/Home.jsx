import React from 'react'
function Home() {
  return (
    <div>
      <div className='row'>
          <div
            className="bg-image"
            style={{backgroundImage: "url('https://img.freepik.com/free-photo/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying_273609-26983.jpg?w=1380&t=st=1670580150~exp=1670580750~hmac=6258aa1eb938815c411506f5785de084fab3b643b793cd5eb20d705f4165362e')",
            height: '100vh', width:"100%" }}>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <div className="h-100">
              <h1 style={{fontWeight:'bold', fontFamily:'cursive', color:'white', fontSize:'30px', marginTop:'300px', display:'inherit', marginLeft:'200px'}}> OUR LEARNING MANAGEMENT SYSTEM</h1>
              <div style={{fontWeight:'normal', fontFamily:'cursive', color:'white', fontSize:'20px', marginTop:'20px', display:'inherit', marginLeft:'200px'}} className='paragraph'>
              <p>Welcome to our school learning management system, Your classroom away from school! 
               </p>
              </div>
              </div>
            </div>
          </div>
          <div>
          <div style={{backgroundColor:'#5a8992'}} className="row row-cols-1 row-cols-md-4 g-4">
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#1EB2A6'}} className="card-title">ADMIN</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
              As the Super User, Our Admin is the School's Record Keeper. Admin is Responsible for registering, editing and deleting Teacher Profiles, Student Profiles, and Parent Profiles. All registrations must go through our admin first
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Administrator: Steve Jobs</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#1EB2A6'}} className="card-title">TEACHER</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">Our teachers will be responsible for classroom Management. They will be Assigning their Students Assignments and assessments and also grade them accordingly.</p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Head of teachers: Maya Angelou</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#1EB2A6'}} className="card-title">STUDENT</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
              With the Many Courses offered by Edupo School, our students will be partaking one course at a time and upon registration, they will have access to their given assessments, assignments and grades via the student's portal.
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Student President: Elon Musk</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-150px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#1EB2A6'}} className="card-title">PARENT</h5>
              <p style={{fontWeight:'normal', fontFamily:'cursive', fontSize:'18px'}} className="card-text">
              Edupo encourages transparency. Parents with students enrolled at edupo School will also be directly involved by being given an opportunity to log in and view their children's progress.
              </p>
            </div>
            <div className="card-footer">
              <small style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'16px'}} className="text-muted">Parent Representative: Diana Rose</small>
            </div>
          </div>
        </div>
      </div>
          </div>
      </div>
    </div>
  )
}
export default Home