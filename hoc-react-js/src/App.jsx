import "./App.css";

function App() {
  /**
   * 1. Render có điều kiện
   * - Dùng lệnh if thông thường
   * - Dùng toán tử 3 ngồi
   *
   * 2. Render với vòng lặp (map)
   */
  const getProduct = (product) => {};
  const products = [
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 12000,
      description: "Mô tả sản phẩm 1",
      status: 1,
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      price: 13000,
      description: "Mô tả sản phẩm 2",
      status: 0,
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      price: 11000,
      description: "Mô tả sản phẩm 3",
      status: 0,
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      price: 16000,
      description: "Mô tả sản phẩm 4",
      status: 1,
    },
  ];

  const productList = products.map((product, index) => {
    return (
      <div key={index}>
        <p>ID: {product.id}</p>
        <p>Tên: {product.name}</p>
        <p>Giá: {product.price}</p>
        <p>Mô tả: {product.description}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      {productList}
    </>
  );
}

export default App;
