import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center abc">
          <form>
              <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" 
                     className="form-control" 
                     id="email" 
                     aria-describedby="emailHelp" 
                     placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">Name</label>
                  <input type="text" 
                      className="form-control" 
                      id="text" 
                      placeholder="Name"
                  />
              </div>
              <div className="form-group text-left">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" 
                      className="form-control" 
                      id="confirmPassword" 
                      placeholder="Password"
                  />
              </div>
              <button 
                  type="submit" 
                  className="btn btn-primary"
              >
                  Register
              </button>
          </form>
      </div>
  );
}

export default App;
