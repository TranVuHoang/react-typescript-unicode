import "./App.css";

function App() {
  return (
    <div className="block">
      <h2 className="sub-title" id="sub-title">
        Khoá học ReactJS
      </h2>
      <h1 className="title" id="title">
        Unicode Academy
      </h1>
      <p className="text">
        <a
          href="https://unicode.vn"
          className="text--link"
          target="_blank"
          rel="noopener noreferrer"
          title="Đăng ký khoá học"
        >
          Đăng ký ngay
        </a>
      </p>
    </div>
  );
}

export default App;
