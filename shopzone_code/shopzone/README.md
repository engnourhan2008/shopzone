# 🛒 ShopZone – Full E-commerce Website

> مشروع التخرج | قسم IT | برمجة الويب | الصف الثالث 2025-2026

---

## 📋 وصف المشروع

**ShopZone** هو متجر إلكتروني متكامل متعدد الأقسام مشابه لـ Amazon و Noon، يتيح للمستخدمين تصفح المنتجات من فئات مختلفة، إضافتها للسلة، وإتمام عملية الشراء.

---

## 🗂️ هيكل المشروع

```
shopzone/
├── index.html                    ← الصفحة الرئيسية
├── css/
│   └── style.css                 ← نظام التصميم الكامل
├── js/
│   └── main.js                   ← JavaScript الرئيسي (بيانات + منطق)
└── pages/
    ├── products.html             ← صفحة المنتجات مع الفلترة
    ├── product-detail.html       ← تفاصيل المنتج
    ├── checkout.html             ← صفحة الدفع
    ├── login.html                ← تسجيل الدخول والتسجيل
    ├── about.html                ← من نحن
    ├── contact.html              ← تواصل معنا
    └── wishlist.html             ← المفضلة
```

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| HTML5 | هيكل الصفحات |
| CSS3 + CSS Variables | التصميم والـ Dark Mode |
| Bootstrap 5 | الـ Responsive Grid والمكونات |
| JavaScript ES6+ | التفاعلية والمنطق |
| localStorage | حفظ السلة، المفضلة، المستخدمين |
| Google Fonts (Cairo) | الخط العربي |
| Font Awesome 6 | الأيقونات |

---

## ✅ المتطلبات المُنجزة

### الصفحات (Minimum Requirements)
- [x] **Home Page** – Navbar, Hero, Categories, Flash Sale, Featured Products
- [x] **Products Page** – Grid layout, Filter sidebar, Sort, Pagination
- [x] **Product Details Page** – Image gallery, Quantity, Add to cart, Related
- [x] **Shopping Cart** – Sidebar cart, Edit qty, Remove, Dynamic total
- [x] **Checkout Page** – Customer form, Payment methods, Order summary, Confirmation
- [x] **About Us Page** – Story, Stats, Values, Team
- [x] **Contact Us Page** – Form, Info, FAQ Accordion
- [x] **Fully Responsive** – Mobile, Tablet, Desktop

### JavaScript Features
- [x] Add/Remove items from cart
- [x] Update quantities dynamically
- [x] Real-time total calculation
- [x] Mobile hamburger menu
- [x] Search with redirect
- [x] Filter products (category, price, rating)
- [x] Sort products
- [x] Pagination
- [x] Wishlist
- [x] User auth (register/login with localStorage)
- [x] Order placement + storage

### Bonus Features (Creativity 10%)
- [x] 🌙 Dark/Light Mode Toggle
- [x] 🔔 Toast Notifications
- [x] 💀 Skeleton Loading
- [x] ⏰ Countdown Timer (Flash Sale)
- [x] ❤️ Wishlist with persistence
- [x] 🎟️ Coupon Code system
- [x] 📱 Share product
- [x] ↑ Scroll to top button
- [x] 📧 Newsletter subscription
- [x] ✅ Form validation with error messages

---

## 🚀 طريقة التشغيل

### محلياً:
```bash
# افتح index.html مباشرة في المتصفح
# أو استخدم Live Server في VS Code
```

### على GitHub Pages:
```bash
git init
git add .
git commit -m "Initial commit - ShopZone E-commerce"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopzone.git
git push -u origin main
# ثم فعّل GitHub Pages من Settings > Pages
```

### على Netlify:
1. اسحب الملفات على netlify.app/drop
2. أو اربط الـ GitHub repository

---

## 📊 معايير التقييم

| المعيار | النسبة | الإنجاز |
|---------|--------|---------|
| Functionality & Code Quality | 40% | ✅ Cart, Auth, Filters, Checkout, localStorage |
| Design & Responsiveness | 30% | ✅ Bootstrap + CSS Variables + Dark Mode |
| Presentation & Documentation | 20% | ✅ README + Documentation |
| Creativity & Advanced Features | 10% | ✅ Toast, Skeleton, Countdown, Wishlist, Coupon |

---

## 👨‍💻 المطور

**اسم الطالب:** _________________
**الفصل:** الصف الثالث – قسم IT
**المادة:** Web Programming
**العام الدراسي:** 2025-2026

---

## 📝 ملاحظات

- لا يوجد backend حقيقي – البيانات محفوظة في `localStorage` وJSON
- المنتجات من Unsplash API (مجانية)
- الموقع يعمل بالكامل بدون إنترنت بعد التحميل الأول
