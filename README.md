# Module 01: Cài đặt môi trường

## 01. Kiến thức cần chuẩn bị trước khi học React JS

```
## HTML - CSS

- Các thẻ html hay dùng
- Selector, thuộc tính thường dùng trong CSS
- Kết hợp xây dựng hoàn chỉnh giao diện bằng HTML-CSS

##Javascript

- Cú pháp: biến, câu lệnh rẽ nhánh, vòng lặp
- Kiểu dữ liệu: (8 kiểu dl) string, number, boolean, null, undefined, BigInt,Symbol
- DOM: Học kỹ và xử lý được case study đơn giản
- ES6:
  - Biến: const, let, scope(phạm vi)
  - Hàm: Arrow function, Rest Parameter, Default Parameter
  - Object/Array: spread, destructuring, enhanced object literal
  - Class
  - Promise / Async Await
  - JS Module: export, import

- Xử lý bất đồng bộ
  - Callback
  - Promise
  - Async Await

- Fetch API
- Authentication - Authorization
- Package Manager: npm, yarn
- Module Bundlẻ: vite, webpack, rollup,...
```

## 02. Tổng quan và hướng dẫn cài ReactJS

```
REACTJS LÀ GÌ?

- React là thư viện của Javascript để xây dựng giao diện người dùng,
được phát triển ban đầu từ Facebook và đóng góp bởi cộng đồng lập trình viên trên TG.
- React có thể sử dụng để viết phần nền cho single-page hoặc ứng dụng di động,
giúp trang lấy và xử lý dữ liệu được tối ưu hơn các phương pháp khác.
- React thích hợp với các ứng dụng lớn, khả năng mở rộng ở tương lai.
- Điểm mạnh dễ thấy nhất có lẽ là phần Component:
  - React chia nhỏ các phần của trang thành từng phần riêng biệt để xử lý,
  gọi là component, giúp dễ quản lý, dễ sử dụng ở nhiều nơi.
  - Mỗi khi dữ liệu được cập nhật mới, thay vì thay đổi cả trang,
  thì React sẽ giúp thay đổi chỉ component liên quan, việc này
  sẽ tối ưu rất nhiều thời gian làm việc với dữ liệu.
  - Đặc biệt là hầu hết các component thường dùng đã được phát triển và
  chia sẻ, chỉ cần cài đặt và sử dụng.

- Điểm "không mạnh" của React có lẽ là ... khó học đối với một số bạn mới
tiếp xúc lần đầu, hoặc với những bạn đã quen với cách viết thư viện khác như Jquery.

```

## 03. React render HTML

```
- Render là quá trình hiển thị nội dung lên trình duyệtteyud cho người dùng nhìn
thấy
- Với React thì nội dung layout bạn viết không phải nằm ở trang HTML, mà được
viết bên trong file JS, file HTML chỉ là cầu nối giúp nội dung JS "liên kết" với
trình duyệt.

```

```
CẤU TRÚC THƯ MỤC PROJECT REACT

- node_modules: chứa nội dung cài đặt, tất cả cài đặt sẽ được lưu ở đây(thư viện)
- public: chứa tất cả file output, là các file sẽ tương tác trực tiếp với trình
duyệt như: HTML, image,...
- src: chứa tất cả các file input, đây là các file mà chúng ta
sẽ code nội dung, thao tác phần lớn ở những file này, gồm
các file JS, CSS,...
```

```
CÁCH REACT RENDER HTML LÊN TRÌNH DUYỆT

Để hiểu rõ hơn về render trong React, ta xem xét nội dung 3 file:
- public/index.html
- src/App.jsx
- src/index.js
```

## 04. JSX

```
JSX (Javascript XML), là cấu trúc XML được viết bên trong cấu trúc JS
(HTML cũng được viết theo cấu trúc XML nhé) do đó có thể hiểu đơn giản hơn
JSX giống như viết HTML bên trong cấu trúc JS

Vậy tại sao cần JSX?
  -> Để render thẻ <h1> ta thấy rõ ràng cách viết JSX ngắn gọn hơn, và
  nó gần giống như cấu trúc HTML quen thuộc
  -> Đây chỉ mới có 1 thẻ <h1>, nếu nội dung là 11 file HTML hoàn chỉnh thì cấu
  trúc bên trái sẽ rất phức tạp.
```

## 05. Component

```
- React chia nhỏ các phần của trang thành các thành phần riêng biệt, gọi là
component, ví dụ như các phần: header, sidebar, navigation, footer,...
- Tính chất của component giống như một arrow function javascript, có thể
tái sử dụng ở nhiều nơi khác nhau.

Cách viết component trong React:
- Viết dưới dạng function
```
