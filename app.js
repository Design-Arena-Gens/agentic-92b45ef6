const state = {
  language: "en",
  currentView: "dashboard",
};

const navItems = [
  {
    id: "dashboard",
    icon: "ri-dashboard-line",
    label: { en: "Dashboard", fr: "Tableau de bord" },
  },
  {
    id: "sales",
    icon: "ri-shopping-cart-2-line",
    label: { en: "Sales", fr: "Ventes" },
  },
  {
    id: "stock",
    icon: "ri-archive-2-line",
    label: { en: "Stock", fr: "Stock" },
  },
  {
    id: "suppliers",
    icon: "ri-truck-line",
    label: { en: "Suppliers", fr: "Fournisseurs" },
  },
  {
    id: "reports",
    icon: "ri-bar-chart-box-line",
    label: { en: "Reports", fr: "Rapports" },
  },
  {
    id: "settings",
    icon: "ri-settings-3-line",
    label: { en: "Settings", fr: "Paramètres" },
  },
];

const translations = {
  app_name: { en: "BookWise", fr: "BookWise" },
  status_online: { en: "Online", fr: "En ligne" },
  user_name: { en: "Alex Martin", fr: "Alex Martin" },
  user_role: { en: "Store Manager", fr: "Gestionnaire" },
  summary_revenue_label: { en: "Today's Revenue", fr: "Revenus du jour" },
  summary_orders_label: { en: "Orders", fr: "Commandes" },
  summary_inventory_label: { en: "Stock Alerts", fr: "Alertes de stock" },
  summary_customers_label: { en: "New Members", fr: "Nouveaux membres" },
  sales_overview_title: { en: "Sales Overview", fr: "Vue d'ensemble des ventes" },
  sales_overview_period: { en: "Last 7 days", fr: "7 derniers jours" },
  top_products_title: { en: "Top Products", fr: "Meilleurs produits" },
  view_all: { en: "View all", fr: "Voir tout" },
  product: { en: "Product", fr: "Produit" },
  category: { en: "Category", fr: "Catégorie" },
  units_sold: { en: "Units", fr: "Unités" },
  revenue: { en: "Revenue", fr: "Revenus" },
  tasks_title: { en: "Today's Tasks", fr: "Tâches du jour" },
  add: { en: "Add", fr: "Ajouter" },
  notifications_title: { en: "Notifications", fr: "Notifications" },
  mark_all_read: { en: "Mark as read", fr: "Tout marquer lu" },
  sales_title: { en: "Point of Sale", fr: "Point de vente" },
  sales_subtitle: {
    en: "Process purchases and manage cart items",
    fr: "Traitez les achats et gérez le panier",
  },
  open_pos: { en: "Open POS", fr: "Ouvrir la caisse" },
  recent_transactions: { en: "Recent transactions", fr: "Transactions récentes" },
  export: { en: "Export", fr: "Exporter" },
  order_id: { en: "Order ID", fr: "Commande" },
  customer: { en: "Customer", fr: "Client" },
  items: { en: "Items", fr: "Articles" },
  total: { en: "Total", fr: "Total" },
  time: { en: "Time", fr: "Heure" },
  sales_metrics: { en: "Sales metrics", fr: "Indicateurs de vente" },
  stock_title: { en: "Inventory", fr: "Inventaire" },
  stock_subtitle: {
    en: "Monitor stock levels and reorder points",
    fr: "Surveillez les niveaux de stock et les seuils de réapprovisionnement",
  },
  new_purchase_order: { en: "New purchase order", fr: "Nouvel achat" },
  sku: { en: "SKU", fr: "SKU" },
  stock: { en: "Stock", fr: "Stock" },
  reorder_point: { en: "Reorder", fr: "Réappro" },
  supplier: { en: "Supplier", fr: "Fournisseur" },
  suppliers_title: { en: "Suppliers", fr: "Fournisseurs" },
  suppliers_subtitle: {
    en: "Manage vendor relationships and contracts",
    fr: "Gérez les fournisseurs et les contrats",
  },
  add_supplier: { en: "Add supplier", fr: "Ajouter un fournisseur" },
  preferred_suppliers: {
    en: "Preferred suppliers",
    fr: "Fournisseurs privilégiés",
  },
  upcoming_deliveries: { en: "Upcoming deliveries", fr: "Livraisons à venir" },
  reports_title: { en: "Reports", fr: "Rapports" },
  reports_subtitle: {
    en: "Visualize performance and trends",
    fr: "Visualisez les performances et les tendances",
  },
  generate_report: { en: "Generate report", fr: "Générer un rapport" },
  revenue_breakdown: { en: "Revenue breakdown", fr: "Répartition des revenus" },
  report_filters: { en: "Filters", fr: "Filtres" },
  pos_modal_title: { en: "Point of Sale", fr: "Point de vente" },
  full_name: { en: "Full name", fr: "Nom complet" },
  email: { en: "Email", fr: "Courriel" },
  preferred_language: {
    en: "Preferred language",
    fr: "Langue préférée",
  },
  save_changes: { en: "Save changes", fr: "Enregistrer" },
  store_settings: { en: "Store", fr: "Magasin" },
  profile_settings: { en: "Profile", fr: "Profil" },
  store_name: { en: "Store name", fr: "Nom du magasin" },
  currency: { en: "Currency", fr: "Devise" },
  enable_notifications: {
    en: "Enable notifications",
    fr: "Activer les notifications",
  },
  enable_notifications_desc: {
    en: "Receive alerts for low stock and new orders",
    fr: "Recevez des alertes de stock et de nouvelles commandes",
  },
  settings_title: { en: "Settings", fr: "Paramètres" },
  settings_subtitle: {
    en: "Configure the BookWise workspace",
    fr: "Configurez l'espace de travail BookWise",
  },
};

const dashboardData = {
  salesTrend: [42, 52, 48, 63, 57, 68, 74],
  salesLegend: [
    { color: "#6366f1", label: { en: "Books", fr: "Livres" } },
    { color: "#f43f5e", label: { en: "Supplies", fr: "Fournitures" } },
  ],
  topProducts: [
    {
      product: { en: "The Alchemist", fr: "L'Alchimiste" },
      category: { en: "Fiction", fr: "Fiction" },
      units: 86,
      revenue: "$1,548",
    },
    {
      product: { en: "Bescherelle", fr: "Bescherelle" },
      category: { en: "Reference", fr: "Reference" },
      units: 64,
      revenue: "$1,024",
    },
    {
      product: { en: "Study Planner", fr: "Agenda d'etudes" },
      category: { en: "Stationery", fr: "Papeterie" },
      units: 112,
      revenue: "$896",
    },
    {
      product: { en: "Le Petit Prince", fr: "Le Petit Prince" },
      category: { en: "Children", fr: "Jeunesse" },
      units: 72,
      revenue: "$1,152",
    },
  ],
  tasks: [
    {
      title: { en: "Confirm supplier delivery", fr: "Confirmer la livraison" },
      subtitle: { en: "Gallimard - 2:00 PM", fr: "Gallimard - 14h00" },
    },
    {
      title: { en: "Refresh POS displays", fr: "Mettre a jour la vitrine" },
      subtitle: { en: "Highlight bilingual best sellers", fr: "Mettre en avant les succes bilingues" },
    },
    {
      title: { en: "Inventory count", fr: "Inventaire" },
      subtitle: { en: "Art supplies section", fr: "Rayon fournitures artistiques" },
    },
  ],
  notifications: [
    {
      type: "warning",
      title: {
        en: "Low stock - Notebooks",
        fr: "Stock faible - Cahiers",
      },
      subtitle: { en: "12 units remaining", fr: "12 unites restantes" },
    },
    {
      type: "success",
      title: {
        en: "New loyalty member",
        fr: "Nouveau membre fidelite",
      },
      subtitle: { en: "Marie Dupont joined", fr: "Marie Dupont inscrite" },
    },
    {
      type: "danger",
      title: {
        en: "Payment dispute",
        fr: "Litige de paiement",
      },
      subtitle: { en: "Order #2031", fr: "Commande #2031" },
    },
  ],
};

const salesData = {
  transactions: [
    {
      id: "#2035",
      customer: "Samir B.",
      items: 4,
      total: "$92.50",
      time: { en: "10 min ago", fr: "Il y a 10 min" },
    },
    {
      id: "#2034",
      customer: "Emma R.",
      items: 2,
      total: "$38.00",
      time: { en: "24 min ago", fr: "Il y a 24 min" },
    },
    {
      id: "#2033",
      customer: "Theo L.",
      items: 6,
      total: "$128.40",
      time: { en: "1 hour ago", fr: "Il y a 1 heure" },
    },
    {
      id: "#2032",
      customer: "Claire M.",
      items: 3,
      total: "$54.90",
      time: { en: "2 hours ago", fr: "Il y a 2 heures" },
    },
  ],
  metrics: [
    {
      icon: "ri-coin-line",
      value: "$4.5k",
      label: { en: "Today revenue", fr: "Revenus du jour" },
      delta: { en: "+12% vs yesterday", fr: "+12% vs hier" },
    },
    {
      icon: "ri-ticket-2-line",
      value: "128",
      label: { en: "Orders", fr: "Commandes" },
      delta: { en: "Avg 3.4 items", fr: "Moy 3.4 articles" },
    },
    {
      icon: "ri-user-voice-line",
      value: "46%",
      label: { en: "French sales mix", fr: "Ventes en francais" },
      delta: { en: "Bilingual staff active", fr: "Equipe bilingue active" },
    },
  ],
};

const stockData = [
  {
    sku: "BK-4321",
    name: { en: "Bilingual Dictionary", fr: "Dictionnaire bilingue" },
    stock: 18,
    reorder: 12,
    supplier: { en: "Larousse", fr: "Larousse" },
  },
  {
    sku: "ST-1488",
    name: { en: "Premium Notebook", fr: "Cahier premium" },
    stock: 9,
    reorder: 20,
    supplier: { en: "PaperCo", fr: "PaperCo" },
  },
  {
    sku: "BK-2981",
    name: { en: "French Grammar Guide", fr: "Guide de grammaire" },
    stock: 34,
    reorder: 15,
    supplier: { en: "Gallimard", fr: "Gallimard" },
  },
  {
    sku: "AC-5320",
    name: { en: "Fine Art Brushes", fr: "Pinceaux artistiques" },
    stock: 12,
    reorder: 18,
    supplier: { en: "Arto", fr: "Arto" },
  },
];

const supplierData = {
  suppliers: [
    {
      name: "Gallimard",
      contact: "contact@gallimard.fr",
      phone: "+33 1 53 10 12 12",
      focus: { en: "French literature", fr: "Litterature francaise" },
      logo: "https://dummyimage.com/60x60/6366f1/ffffff&text=G",
    },
    {
      name: "Penguin",
      contact: "partners@penguin.com",
      phone: "+1 212 907 7000",
      focus: { en: "English bestsellers", fr: "Best-sellers anglais" },
      logo: "https://dummyimage.com/60x60/f43f5e/ffffff&text=P",
    },
    {
      name: "Libraire Quebec",
      contact: "service@libraireqc.ca",
      phone: "+1 514 555 8844",
      focus: { en: "Quebec authors", fr: "Auteurs quebecois" },
      logo: "https://dummyimage.com/60x60/22c55e/ffffff&text=LQ",
    },
  ],
  deliveries: [
    {
      title: { en: "French classics restock", fr: "Classiques francais" },
      eta: { en: "Tomorrow 10:00", fr: "Demain 10h00" },
    },
    {
      title: { en: "Stationery bulk order", fr: "Papeterie lot" },
      eta: { en: "Friday 14:30", fr: "Vendredi 14h30" },
    },
    {
      title: { en: "Author signing setup", fr: "Seance de dedicace" },
      eta: { en: "Saturday 09:00", fr: "Samedi 09h00" },
    },
  ],
};

const reportData = {
  revenue: [
    { month: "Jan", value: 58 },
    { month: "Feb", value: 64 },
    { month: "Mar", value: 72 },
    { month: "Apr", value: 81 },
    { month: "May", value: 88 },
    { month: "Jun", value: 94 },
  ],
  filters: [
    {
      label: { en: "Period", fr: "Periode" },
      options: [
        { value: "month", text: { en: "Last month", fr: "Dernier mois" } },
        { value: "quarter", text: { en: "Quarter", fr: "Trimestre" } },
        { value: "year", text: { en: "Year", fr: "Annee" } },
      ],
    },
    {
      label: { en: "Category", fr: "Categorie" },
      options: [
        { value: "all", text: { en: "All", fr: "Toutes" } },
        { value: "books", text: { en: "Books", fr: "Livres" } },
        { value: "supplies", text: { en: "Supplies", fr: "Fournitures" } },
      ],
    },
  ],
};

const posCatalog = [
  {
    name: { en: "Notebook A5", fr: "Cahier A5" },
    category: { en: "Stationery", fr: "Papeterie" },
    price: 8.5,
  },
  {
    name: { en: "Literature Tote", fr: "Sac litterature" },
    category: { en: "Accessories", fr: "Accessoires" },
    price: 14.0,
  },
  {
    name: { en: "Card Game", fr: "Jeu de cartes" },
    category: { en: "Games", fr: "Jeux" },
    price: 12.75,
  },
  {
    name: { en: "Novel Bundle", fr: "Coffret romans" },
    category: { en: "Books", fr: "Livres" },
    price: 28,
  },
  {
    name: { en: "Highlighters", fr: "Surligneurs" },
    category: { en: "Stationery", fr: "Papeterie" },
    price: 6.9,
  },
  {
    name: { en: "Planner 2024", fr: "Agenda 2024" },
    category: { en: "Stationery", fr: "Papeterie" },
    price: 19.5,
  },
];

const elements = {
  nav: document.getElementById("sidebarNav"),
  breadcrumb: document.getElementById("breadcrumb"),
  viewContainer: document.getElementById("viewContainer"),
  languageSwitch: document.getElementById("languageSwitch"),
  sidebarYear: document.getElementById("sidebarYear"),
  menuToggle: document.getElementById("menuToggle"),
  sidebar: document.querySelector(".sidebar"),
  posModal: document.getElementById("posModal"),
};

elements.sidebarYear.textContent = new Date().getFullYear();

function applyTranslations(scope = document) {
  scope.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const dictionary = translations[key];
    if (dictionary) {
      node.textContent = dictionary[state.language] || dictionary.en;
    }
  });
}

function buildNav() {
  elements.nav.innerHTML = "";
  navItems.forEach((item) => {
    const link = document.createElement("button");
    link.className = "nav-item";
    link.type = "button";
    link.dataset.view = item.id;
    link.innerHTML = `<i class="${item.icon}"></i><span>${item.label[state.language]}</span>`;
    if (item.id === state.currentView) {
      link.classList.add("is-active");
    }
    link.addEventListener("click", () => {
      state.currentView = item.id;
      renderView();
      buildNav();
    });
    elements.nav.appendChild(link);
  });
}

function setBreadcrumb() {
  const item = navItems.find((nav) => nav.id === state.currentView);
  if (item) {
    elements.breadcrumb.textContent = `${state.language === "fr" ? "Accueil" : "Home"} / ${
      item.label[state.language]
    }`;
  }
}

function renderDashboard(view) {
  const template = document.getElementById("dashboardTemplate");
  view.appendChild(template.content.cloneNode(true));

  createSalesChart();
  renderSalesLegend();
  renderTopProducts();
  renderTasks();
  renderNotifications();
}

function createSalesChart() {
  const values = dashboardData.salesTrend;
  const max = Math.max(...values) + 10;
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = ((max - value) / max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  const svg = `<svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.8"></stop>
        <stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
    <polyline points="${points}" fill="none" stroke="#6366f1" stroke-width="3" stroke-linecap="round" />
    <polygon points="${points} 100,100 0,100" fill="url(#gradient)" opacity="0.35" />
  </svg>`;

  const target = document.getElementById("salesChart");
  target.innerHTML = svg;
}

function renderSalesLegend() {
  const legend = document.getElementById("salesLegend");
  legend.innerHTML = "";
  dashboardData.salesLegend.forEach((item) => {
    const span = document.createElement("span");
    span.style.color = item.color;
    span.textContent = item.label[state.language];
    legend.appendChild(span);
  });
}

function renderTopProducts() {
  const container = document.getElementById("topProductsTable");
  container.innerHTML = "";
  dashboardData.topProducts.forEach((product) => {
    const row = document.createElement("div");
    row.className = "table__row";
    row.innerHTML = `
      <span>${product.product[state.language]}</span>
      <span>${product.category[state.language]}</span>
      <span>${product.units}</span>
      <span>${product.revenue}</span>
    `;
    container.appendChild(row);
  });
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  dashboardData.tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task-item";
    item.innerHTML = `
      <div>
        <strong>${task.title[state.language]}</strong>
        <span>${task.subtitle[state.language]}</span>
      </div>
      <button class="ghost-button" type="button">${state.language === "fr" ? "Terminer" : "Done"}</button>
    `;
    list.appendChild(item);
  });
}

function renderNotifications() {
  const list = document.getElementById("notificationList");
  list.innerHTML = "";
  dashboardData.notifications.forEach((notif) => {
    const item = document.createElement("li");
    item.className = `notification-item notification-item--${notif.type}`;
    item.innerHTML = `
      <div>
        <strong>${notif.title[state.language]}</strong>
        <span>${notif.subtitle[state.language]}</span>
      </div>
      <i class="ri-arrow-right-up-line"></i>
    `;
    list.appendChild(item);
  });
}

function renderSales(view) {
  const template = document.getElementById("salesTemplate");
  view.appendChild(template.content.cloneNode(true));

  const table = document.getElementById("recentTransactions");
  table.innerHTML = "";
  salesData.transactions.forEach((transaction) => {
    const row = document.createElement("div");
    row.className = "table__row";
    row.innerHTML = `
      <span>${transaction.id}</span>
      <span>${transaction.customer}</span>
      <span>${transaction.items}</span>
      <span>${transaction.total}</span>
      <span>${transaction.time[state.language]}</span>
    `;
    table.appendChild(row);
  });

  const metrics = document.getElementById("salesMetrics");
  metrics.innerHTML = "";
  salesData.metrics.forEach((metric) => {
    const item = document.createElement("li");
    item.className = "metric-item";
    item.innerHTML = `
      <i class="${metric.icon}"></i>
      <div>
        <strong>${metric.value}</strong>
        <span>${metric.label[state.language]}</span>
      </div>
      <span>${metric.delta[state.language]}</span>
    `;
    metrics.appendChild(item);
  });

  const posButton = view.querySelector("[data-open-pos]");
  posButton.addEventListener("click", openPosModal);
}

function renderStock(view) {
  const template = document.getElementById("stockTemplate");
  view.appendChild(template.content.cloneNode(true));

  const table = document.getElementById("stockTable");
  table.innerHTML = "";
  stockData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "table__row";
    if (item.stock <= item.reorder) {
      row.classList.add("table__row--highlight");
    }
    row.innerHTML = `
      <span>${item.sku}</span>
      <span>${item.name[state.language]}</span>
      <span>${item.stock}</span>
      <span>${item.reorder}</span>
      <span>${item.supplier[state.language]}</span>
    `;
    table.appendChild(row);
  });
}

function renderSuppliers(view) {
  const template = document.getElementById("suppliersTemplate");
  view.appendChild(template.content.cloneNode(true));

  const grid = document.getElementById("supplierGrid");
  grid.innerHTML = "";
  supplierData.suppliers.forEach((supplier) => {
    const card = document.createElement("div");
    card.className = "supplier-card";
    card.innerHTML = `
      <header>
        <img src="${supplier.logo}" alt="${supplier.name}" />
        <div>
          <strong>${supplier.name}</strong>
          <span>${supplier.focus[state.language]}</span>
        </div>
      </header>
      <footer>
        <span>${supplier.contact}</span>
        <span>${supplier.phone}</span>
      </footer>
    `;
    grid.appendChild(card);
  });

  const timeline = document.getElementById("deliveryTimeline");
  timeline.innerHTML = "";
  supplierData.deliveries.forEach((delivery) => {
    const item = document.createElement("li");
    item.className = "timeline__item";
    item.innerHTML = `
      <div>
        <strong>${delivery.title[state.language]}</strong>
        <span>${delivery.eta[state.language]}</span>
      </div>
      <i class="ri-calendar-event-line"></i>
    `;
    timeline.appendChild(item);
  });
}

function renderReports(view) {
  const template = document.getElementById("reportsTemplate");
  view.appendChild(template.content.cloneNode(true));

  const chart = document.getElementById("reportRevenue");
  chart.innerHTML = "";
  reportData.revenue.forEach((entry) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${entry.value}%`;
    bar.innerHTML = `<span>${entry.month}</span>`;
    chart.appendChild(bar);
  });

  const form = document.getElementById("reportFilters");
  form.innerHTML = "";
  reportData.filters.forEach((filter) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <span>${filter.label[state.language]}</span>
      <select></select>
    `;
    const select = label.querySelector("select");
    filter.options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.textContent = option.text[state.language];
      select.appendChild(opt);
    });
    form.appendChild(label);
  });

  const submit = document.createElement("button");
  submit.type = "button";
  submit.className = "primary-button";
  submit.textContent = state.language === "fr" ? "Appliquer" : "Apply";
  form.appendChild(submit);
}

function renderSettings(view) {
  const template = document.getElementById("settingsTemplate");
  view.appendChild(template.content.cloneNode(true));
}

function renderView() {
  elements.viewContainer.innerHTML = "";
  const viewFragment = document.createDocumentFragment();

  switch (state.currentView) {
    case "dashboard":
      renderDashboard(viewFragment);
      break;
    case "sales":
      renderSales(viewFragment);
      break;
    case "stock":
      renderStock(viewFragment);
      break;
    case "suppliers":
      renderSuppliers(viewFragment);
      break;
    case "reports":
      renderReports(viewFragment);
      break;
    case "settings":
      renderSettings(viewFragment);
      break;
    default:
      renderDashboard(viewFragment);
  }

  elements.viewContainer.appendChild(viewFragment);
  applyTranslations(elements.viewContainer);
  setBreadcrumb();
}

function initLanguageSwitch() {
  const buttons = elements.languageSwitch.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.lang === state.language) return;
      state.language = button.dataset.lang;
      buttons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
      renderApp();
    });
  });
}

function openPosModal() {
  buildPosModal();
  elements.posModal.classList.add("is-open");
  elements.posModal.setAttribute("aria-hidden", "false");
}

function closePosModal() {
  elements.posModal.classList.remove("is-open");
  elements.posModal.setAttribute("aria-hidden", "true");
}

function buildPosModal() {
  const container = document.getElementById("posModalBody");
  container.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "pos-layout";

  const catalog = document.createElement("section");
  catalog.innerHTML = `
    <div class="pos-search">
      <input type="search" placeholder="${state.language === "fr" ? "Rechercher..." : "Search..."}" />
      <i class="ri-search-line"></i>
    </div>
    <h3>${state.language === "fr" ? "Catalogue" : "Catalog"}</h3>
    <div class="pos-products"></div>
  `;

  const productsGrid = catalog.querySelector(".pos-products");
  posCatalog.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "pos-product";
    card.innerHTML = `
      <strong>${item.name[state.language]}</strong>
      <span>${item.category[state.language]}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    productsGrid.appendChild(card);
  });

  const cart = document.createElement("section");
  cart.innerHTML = `
    <h3>${state.language === "fr" ? "Panier" : "Cart"}</h3>
    <div class="pos-cart-list"></div>
    <div class="pos-summary">
      <span>${state.language === "fr" ? "Sous-total" : "Subtotal"}</span>
      <span>${state.language === "fr" ? "Taxes" : "Taxes"}</span>
      <strong>${state.language === "fr" ? "Total" : "Total"}: $154.20</strong>
      <button class="primary-button" type="button">${state.language === "fr" ? "Encaisser" : "Checkout"}</button>
    </div>
  `;

  const cartList = cart.querySelector(".pos-cart-list");
  posCatalog.slice(0, 3).forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "pos-cart-item";
    cartItem.innerHTML = `
      <strong>${item.name[state.language]}</strong>
      <input type="number" value="${index + 1}" min="1" />
      <span>$${(item.price * (index + 1)).toFixed(2)}</span>
      <button type="button" aria-label="Remove item"><i class="ri-delete-bin-6-line"></i></button>
    `;
    cartList.appendChild(cartItem);
  });

  layout.appendChild(catalog);
  layout.appendChild(cart);
  container.appendChild(layout);
}

function initModal() {
  elements.posModal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-modal-close")) {
      closePosModal();
    }
  });
}

function initMenuToggle() {
  elements.menuToggle.addEventListener("click", () => {
    elements.sidebar.classList.toggle("is-open");
  });
}

function renderApp() {
  buildNav();
  renderView();
  applyTranslations(document.body);
}

function init() {
  initLanguageSwitch();
  initModal();
  initMenuToggle();
  renderApp();
}

init();
