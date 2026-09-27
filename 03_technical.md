Technical Implementation
HTML

Sử dụng HTML5 semantic elements:

<header>

<nav>

<main>

<section>

<footer>

Mỗi section quan trọng nên có id để Navbar có thể điều hướng bằng anchor.

Ví dụ:

<a href="#home">Trang chủ</a>
<a href="#overview">Tổng quan</a>
<a href="#features">Tiện ích</a>
<a href="#contact">Liên hệ</a>

Bootstrap

Sử dụng Bootstrap 5 thông qua CDN.

Không tải Bootstrap về local.

Sử dụng Bootstrap cho:

Navbar

Container

Grid

Button

Card

Responsive utilities

Spacing utilities

CSS

Có thể tạo:

style.css


CSS custom dùng để:

Thiết lập màu thương hiệu

Typography

Hero styling

Image styling

Card hover

CTA

Footer

Các chi tiết visual riêng của landing page

Màu chính:

--primary-color: #2d2d86;
--background-color: #f2f2f2;


Không lạm dụng màu sắc.

JavaScript

Có thể tạo:

script.js


Chỉ sử dụng Vanilla JavaScript.

JavaScript có thể xử lý:

Smooth scrolling

Navbar behavior

CTA interaction

Hiển thị thông báo đơn giản khi người dùng click CTA

Hiệu ứng nhẹ khi scroll nếu cần

Không tạo logic backend.

Không gửi dữ liệu tới server.

Không yêu cầu API.

Accessibility

Phải đảm bảo:

Hình ảnh có alt

Button có text rõ ràng

Link có nội dung mô tả

Có semantic HTML

Contrast giữa chữ và nền đủ rõ

Có thể sử dụng bằng keyboard

Performance

Không sử dụng thư viện JavaScript không cần thiết.

Không sử dụng animation nặng.

Hình ảnh cần responsive.

Sử dụng loading="lazy" cho hình ảnh nằm ngoài viewport ban đầu.

Hero image có thể load bình thường để tránh ảnh hưởng trải nghiệm ban đầu.

SEO cơ bản

Trong <head> của index.html cần có:

charset

viewport

<title>

meta description

Ví dụ:

<title>Vinhomes Grand Park - Không gian sống đẳng cấp</title>


Meta description phải mô tả ngắn gọn nội dung landing page.

Quy tắc code

Code phải:

Sạch

Dễ đọc

Có indentation nhất quán

Có comment ở những phần quan trọng

Không chứa code backend

Không chứa secret/API key

Không chứa thông tin cá nhân

Không sử dụng dữ liệu giả như thông tin chính thức của dự án