import "./App.css";

function App() {
  const firstProvince = 1;

  const myAlert = () => {
    alert("Xin chào!");
  };

  const message = "Welcome my course.";

  return (
    <>
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
      <div
        className="element"
        style={{ color: "red", fontWeight: "bold" }}
        onClick={() => myAlert()}
      >
        <p>{message}</p>
      </div>

      <label htmlFor="username">Username </label>
      <input
        type="text"
        id="username"
        name="username"
        defaultValue="hoangan.web"
      />

      <div className="">
        <select name="" id="">
          <option value="0">Chọn tỉnh / thành phố</option>
          <option value={firstProvince}>Hà Nội</option>
          <option value="2">Hồ Chí Minh</option>
        </select>
      </div>
      <br />
      <button onClick={myAlert}>Click me</button>
    </>
  );
}

export default App;
