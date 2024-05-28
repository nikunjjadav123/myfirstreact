import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <h1 className="text-danger">GeeksforGeeks</h1>
            <div className="bg-info p-5">
                <p className="">
                    This is example for using button with
                    bootstrap styling
                </p>
                <a
                    className="btn btn-danger"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    Bootstrap button
                </a>
            </div>
        </div>
  );
}

export default App;
