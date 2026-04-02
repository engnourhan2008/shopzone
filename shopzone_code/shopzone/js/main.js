// ===== SHOPZONE - Main JavaScript =====

// ===== PRODUCTS DATA =====
const products = [
  // Electronics
  { id: 1, name: "سماعات بلوتوث لاسلكية Pro", category: "إلكترونيات", price: 299, oldPrice: 450, rating: 4.5, reviews: 128, discount: 34, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", badge: "الأكثر مبيعاً" },
  { id: 2, name: "ساعة ذكية Sport Series X", category: "إلكترونيات", price: 599, oldPrice: 799, rating: 4.7, reviews: 89, discount: 25, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
  { id: 3, name: "لاب توب Gaming RTX 4060", category: "إلكترونيات", price: 8999, oldPrice: 11000, rating: 4.8, reviews: 45, discount: 18, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop", badge: "جديد" },
  { id: 4, name: "شاشة 27 بوصة 144Hz", category: "إلكترونيات", price: 1800, oldPrice: 2200, rating: 4.6, reviews: 67, discount: 18, img: "https://images.unsplash.com/photo-1527443224154-c4a573d5be74?w=400&h=400&fit=crop" },
  // Fashion
  { id: 5, name: "حذاء رياضي Air Boost", category: "ملابس وأزياء", price: 450, oldPrice: 650, rating: 4.4, reviews: 203, discount: 31, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" },
  { id: 6, name: "جاكيت شتوي كلاسيك", category: "ملابس وأزياء", price: 350, oldPrice: 480, rating: 4.3, reviews: 156, discount: 27, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" },
  { id: 7, name: "حقيبة جلد أصلي فاخرة", category: "ملابس وأزياء", price: 799, oldPrice: 1100, rating: 4.6, reviews: 78, discount: 27, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", badge: "فاخر" },
  { id: 8, name: "نظارة شمسية UV400", category: "ملابس وأزياء", price: 189, oldPrice: 280, rating: 4.2, reviews: 312, discount: 32, img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop" },
  // Books
  { id: 9, name: "فن اللامبالاة - مارك مانسون", category: "كتب", price: 89, oldPrice: 120, rating: 4.7, reviews: 445, discount: 26, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop" },
  { id: 10, name: "قوة العادات - تشارلز دوهيغ", category: "كتب", price: 79, oldPrice: 100, rating: 4.6, reviews: 389, discount: 21, img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop" },
  // Home
  { id: 11, name: "مكنسة روبوت ذكية WiFi", category: "المنزل", price: 1299, oldPrice: 1800, rating: 4.5, reviews: 92, discount: 28, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
  { id: 12, name: "مجموعة أواني طهي 10 قطع", category: "المنزل", price: 599, oldPrice: 850, rating: 4.4, reviews: 167, discount: 30, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop", badge: "عرض خاص" },
  // Beauty
  { id: 13, name: "مجموعة عناية بالبشرة Premium", category: "الجمال", price: 349, oldPrice: 500, rating: 4.7, reviews: 234, discount: 30, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop" },
  { id: 14, name: "عطر فرنسي أصلي 100ml", category: "الجمال", price: 449, oldPrice: 600, rating: 4.8, reviews: 189, discount: 25, img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop" },
  // Sports
  { id: 15, name: "دراجة رياضية Mountain Pro", category: "رياضة", price: 2800, oldPrice: 3500, rating: 4.5, reviews: 56, discount: 20, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
  { id: 16, name: "مضرب تنس كربون Ultra", category: "رياضة", price: 650, oldPrice: 900, rating: 4.4, reviews: 78, discount: 28, img: "https://images.unsplash.com/photo-1617083934320-6b89d92e4b0e?w=400&h=400&fit=crop" },
];

const categories = [
  { name: "الكل", icon: "🏪" },
  { name: "إلكترونيات", icon: "💻" },
  { name: "ملابس وأزياء", icon: "👗" },
  { name: "كتب", icon: "📚" },
  { name: "المنزل", icon: "🏠" },
  { name: "الجمال", icon: "✨" },
  { name: "رياضة", icon: "⚽" },
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('shopzone_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopzone_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('shopzone_user')) || null;

// ===== SAVE CART =====
function saveCart() {
  localStorage.setItem('shopzone_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('shopzone_wishlist', JSON.stringify(wishlist));
}

// ===== ADD TO CART =====
function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }

  saveCart();
  showToast(`✅ تم إضافة "${product.name}" للسلة`, 'success');
  
  // Animate button
  const btn = document.querySelector(`[data-id="${productId}"].btn-add-cart`);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="fas fa-shopping-cart"></i> أضف للسلة';
    }, 2000);
  }
}

// ===== REMOVE FROM CART =====
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCartItems();
  showToast('🗑️ تم حذف المنتج من السلة');
}

// ===== UPDATE QUANTITY =====
function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartItems();
}

// ===== CART TOTAL =====
function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

// ===== UPDATE CART UI =====
function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ===== RENDER CART ITEMS =====
function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 40px 20px;">
        <div class="empty-icon">🛒</div>
        <h6>السلة فارغة</h6>
        <p style="font-size:0.85rem; color:var(--text-muted)">أضف منتجات للبدء في التسوق</p>
      </div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/70'">
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-price">${item.price.toLocaleString()} جنيه</div>
          <div class="qty-control">
            <button onclick="updateQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="item-remove" onclick="removeFromCart(${item.id})">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `).join('');
  }

  if (totalEl) {
    totalEl.textContent = getCartTotal().toLocaleString() + ' جنيه';
  }
  updateCartUI();
}

// ===== CART SIDEBAR =====
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

// ===== WISHLIST =====
function toggleWishlist(productId, btn) {
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
    if (btn) btn.classList.add('active');
    if (btn) btn.innerHTML = '<i class="fas fa-heart"></i>';
    showToast('❤️ تمت الإضافة للمفضلة', 'success');
  } else {
    wishlist.splice(idx, 1);
    if (btn) btn.classList.remove('active');
    if (btn) btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('💔 تم الحذف من المفضلة');
  }
  saveWishlist();
}

// ===== TOAST =====
function showToast(msg, type = '') {
  let container = document.querySelector('.toast-container-custom');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container-custom';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-msg ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// ===== RENDER PRODUCT CARD =====
function renderProductCard(p) {
  const isWishlisted = wishlist.includes(p.id);
  return `
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="product-card">
        ${p.discount ? `<span class="badge-discount">-${p.discount}%</span>` : ''}
        ${p.badge ? `<span class="badge-discount" style="background:var(--primary);top:40px">${p.badge}</span>` : ''}
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)">
          <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="img-wrap" onclick="location.href='pages/product-detail.html?id=${p.id}'" style="cursor:pointer">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=صورة'">
        </div>
        <div class="card-body">
          <div class="prod-category">${p.category}</div>
          <div class="prod-name" onclick="location.href='pages/product-detail.html?id=${p.id}'" style="cursor:pointer">${p.name}</div>
          <div class="stars">
            ${renderStars(p.rating)}
            <span>(${p.reviews})</span>
          </div>
          <div class="price-wrap">
            <span class="price">${p.price.toLocaleString()} جنيه</span>
            ${p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="btn-add-cart" data-id="${p.id}" onclick="addToCart(${p.id})">
            <i class="fas fa-shopping-cart"></i> أضف للسلة
          </button>
        </div>
      </div>
    </div>`;
}

// ===== RENDER STARS =====
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '<i class="fas fa-star"></i>';
    else if (i - 0.5 <= rating) stars += '<i class="fas fa-star-half-alt"></i>';
    else stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

// ===== SKELETON LOADING =====
function renderSkeletons(container, count = 8) {
  container.innerHTML = Array(count).fill(`
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="skeleton-card">
        <div class="skeleton skeleton-img"></div>
        <div class="skeleton skeleton-text" style="height:14px; margin-bottom:8px;"></div>
        <div class="skeleton skeleton-text sm" style="height:14px; width:60%;"></div>
        <div class="skeleton skeleton-text" style="height:20px; margin-top:8px;"></div>
        <div class="skeleton skeleton-text" style="height:36px; margin-top:10px; border-radius:8px;"></div>
      </div>
    </div>`).join('');
}

// ===== DARK MODE =====
function initDarkMode() {
  const isDark = localStorage.getItem('shopzone_dark') === 'true';
  if (isDark) document.body.classList.add('dark');
  updateDarkToggle(isDark);
}

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('shopzone_dark', isDark);
  updateDarkToggle(isDark);
}

function updateDarkToggle(isDark) {
  document.querySelectorAll('.dark-toggle').forEach(btn => {
    btn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i> فاتح'
      : '<i class="fas fa-moon"></i> داكن';
  });
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== SEARCH =====
let searchQuery = '';

function handleSearch(query) {
  searchQuery = query.toLowerCase().trim();
  if (searchQuery && window.location.pathname.includes('index')) {
    window.location.href = `pages/products.html?search=${encodeURIComponent(searchQuery)}`;
  } else if (searchQuery) {
    filterAndRenderProducts();
  }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== COUNTDOWN TIMER =====
function startCountdown(endDate) {
  function update() {
    const diff = endDate - Date.now();
    if (diff <= 0) return;

    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const fmt = n => String(n).padStart(2, '0');

    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (hoursEl) hoursEl.textContent = fmt(h);
    if (minsEl) minsEl.textContent = fmt(m);
    if (secsEl) secsEl.textContent = fmt(s);
  }

  update();
  setInterval(update, 1000);
}

// ===== AUTH HELPERS =====
function updateNavAuth() {
  const authBtn = document.getElementById('authBtn');
  const userMenu = document.getElementById('userMenu');
  if (!authBtn) return;

  if (currentUser) {
    authBtn.style.display = 'none';
    if (userMenu) {
      userMenu.style.display = 'flex';
      userMenu.querySelector('.user-name').textContent = currentUser.name.split(' ')[0];
    }
  } else {
    authBtn.style.display = 'block';
    if (userMenu) userMenu.style.display = 'none';
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('shopzone_user');
  showToast('👋 تم تسجيل الخروج');
  setTimeout(() => location.reload(), 1000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  updateCartUI();
  initScrollTop();
  updateNavAuth();

  // Cart events
  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Search
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.btn-search');

  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch(searchInput.value);
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const val = document.querySelector('.search-input')?.value || '';
      handleSearch(val);
    });
  }

  // Pre-fill search from URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    searchQuery = searchParam.toLowerCase();
  }
});
