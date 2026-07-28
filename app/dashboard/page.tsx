"use client";

import React, { useState } from "react";
import { 
  DollarSign, 
  ShoppingBag, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  RefreshCw, 
  Search, 
  Trash2, 
  AlertCircle, 
  CheckCircle, 
  Info, 
  Printer, 
  X, 
  Barcode, 
  Filter
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Low Stock" | "Out of Stock";
  barcode: string;
}

interface Alert {
  id: string;
  type: "success" | "warning" | "error" | "info";
  message: string;
}

export default function DashboardDemo() {
  // Products list state
  const initialProducts: Product[] = [
    { id: "PROD-801", name: "High-Speed POS Thermal Printer (3-inch)", category: "Hardware", price: 4500, stock: 14, status: "Active", barcode: "890107200142" },
    { id: "PROD-802", name: "Bizvelo Cloud ERP annual license", category: "Software", price: 14999, stock: 85, status: "Active", barcode: "890107200381" },
    { id: "PROD-803", name: "USB Omni Laser Barcode Scanner", category: "Hardware", price: 3200, stock: 4, status: "Low Stock", barcode: "890107200592" },
    { id: "PROD-804", name: "Android Counselor CRM Mobile App License", category: "Software", price: 1200, stock: 120, status: "Active", barcode: "890107200902" },
    { id: "PROD-805", name: "Premium Cash Drawer heavy duty", category: "Hardware", price: 5800, stock: 0, status: "Out of Stock", barcode: "890107200424" },
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: "1", type: "info", message: "GSTR-1 report ready for export. Review inventory sheets for June 2026." },
  ]);

  // Form states for adding a product
  const [newProductName, setNewProductName] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("Hardware");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductStock, setNewProductStock] = useState("");

  // Statistics calculation
  const totalRevenue = 412950; 
  const lowStockCount = products.filter(p => p.status === "Low Stock").length;
  const outOfStockCount = products.filter(p => p.status === "Out of Stock").length;
  const activeProductsCount = products.filter(p => p.status === "Active").length;

  // Add notification alert
  const addAlert = (type: "success" | "warning" | "error" | "info", message: string) => {
    const newAlert: Alert = {
      id: Date.now().toString(),
      type,
      message,
    };
    setAlerts((prev) => [newAlert, ...prev]);
  };

  // Dismiss notification alert
  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  // Handle add product
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice || !newProductStock) {
      addAlert("error", "Failed to add product. Please fill in all fields correctly.");
      return;
    }

    const price = parseFloat(newProductPrice);
    const stock = parseInt(newProductStock);
    let status: "Active" | "Low Stock" | "Out of Stock" = "Active";
    if (stock === 0) status = "Out of Stock";
    else if (stock < 5) status = "Low Stock";

    const barcodeVal = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    const idVal = "PROD-" + (800 + products.length + 1);

    const newProd: Product = {
      id: idVal,
      name: newProductName,
      category: newProductCategory,
      price,
      stock,
      status,
      barcode: barcodeVal
    };

    setProducts([newProd, ...products]);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductStock("");

    addAlert("success", `Product "${newProd.name}" added successfully. Barcode: ${newProd.barcode}`);
  };

  // Trigger loading screen demo
  const triggerLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      addAlert("success", "Dashboard data re-synchronized with Trichy local cloud node.");
    }, 1500);
  };

  // Delete product
  const handleDeleteProduct = (id: string, name: string) => {
    setProducts(products.filter(p => p.id !== id));
    addAlert("warning", `Void action: Removed product "${name}" from local active inventory.`);
  };

  // Filter products by search
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.barcode.includes(searchQuery)
  );

  return (
    <div className="pt-28 pb-20 font-sans min-h-screen bg-slate-55 bg-slate-50 relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center max-w-sm text-center space-y-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-slate-900">Synchronizing Systems</h4>
              <p className="text-xs text-slate-500 mt-1">Downloading transaction ledger and stock levels from Trichy central node...</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header & Overview */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-poppins font-bold text-slate-900">Billing & Inventory Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">Bizvelo Technology SaaS Demo Terminal (Trichy Node)</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button onClick={triggerLoadingDemo} variant="outline" size="sm" className="bg-white gap-2 border-slate-200 text-slate-650 hover:bg-slate-50">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Ledger</span>
            </Button>
            <Button onClick={() => addAlert("info", "Alert logs triggered. Checked active printers.")} variant="secondary" size="sm" className="bg-white gap-2 border-slate-200 text-slate-700">
              <Printer className="w-3.5 h-3.5" />
              <span>Printer Check</span>
            </Button>
          </div>
        </div>

        {/* Notifications & Banners Section */}
        {alerts.length > 0 && (
          <div className="space-y-3 animate-fade-in-up">
            {alerts.map((alert) => (
              <div 
                key={alert.id}
                className={`p-4 rounded-xl border flex items-start justify-between gap-3 shadow-sm transition-all duration-300 ${
                  alert.type === "success" ? "bg-emerald-55 bg-emerald-50 border-emerald-200 text-emerald-800" :
                  alert.type === "warning" ? "bg-amber-50 border-amber-200 text-amber-800" :
                  alert.type === "error" ? "bg-rose-55 bg-rose-50 border-rose-200 text-rose-800" :
                  "bg-blue-50 border-blue-200 text-blue-800"
                }`}
              >
                <div className="flex items-start gap-3">
                  {alert.type === "success" && <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
                  {alert.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
                  {alert.type === "error" && <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
                  {alert.type === "info" && <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}
                  <p className="text-xs sm:text-sm font-sans font-medium leading-relaxed">{alert.message}</p>
                </div>
                <button 
                  onClick={() => dismissAlert(alert.id)}
                  className="text-slate-400 hover:text-slate-900 shrink-0 p-0.5 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Dashboard Cards (Metrics Block) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Revenue (Blue/Indigo Gradient Accent) */}
          <GlassCard className="border border-slate-100 hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-poppins">Total Revenue (June)</p>
                <h3 className="text-3xl font-poppins font-bold text-slate-900">₹{totalRevenue.toLocaleString("en-IN")}</h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-650 text-emerald-600 font-semibold font-sans mt-2">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+18.4% vs last month</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Low Stock (Amber Gradient Accent) */}
          <GlassCard className="border border-slate-100 hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-poppins">Low Stock Items</p>
                <h3 className="text-3xl font-poppins font-bold text-slate-900">{lowStockCount}</h3>
                <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold font-sans mt-2">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Requires prompt action</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>
          </GlassCard>

          {/* Card 3: Out of Stock (Rose Gradient Accent) */}
          <GlassCard className="border border-slate-100 hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-rose-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-poppins">Out of Stock</p>
                <h3 className="text-3xl font-poppins font-bold text-rose-600">{outOfStockCount}</h3>
                <div className="flex items-center gap-1.5 text-xs text-rose-650 text-rose-600 font-semibold font-sans mt-2">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Restock forms scheduled</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
          </GlassCard>

          {/* Card 4: Active Items (Emerald Gradient Accent) */}
          <GlassCard className="border border-slate-100 hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-poppins">Active Products</p>
                <h3 className="text-3xl font-poppins font-bold text-slate-900">{activeProductsCount}</h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-650 text-emerald-600 font-semibold font-sans mt-2">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Stable inventory status</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-650 text-emerald-600">
                <ShoppingBag className="w-5 h-5" />
              </div>
            </div>
          </GlassCard>

        </div>

        {/* Charts & Interactive Actions Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SVG Sales performance Graph (Purple/Cyan gradient accents) */}
          <GlassCard className="lg:col-span-8 border border-slate-100 bg-white shadow-sm flex flex-col justify-between">
            <div className="space-y-1 mb-6">
              <h3 className="text-lg font-poppins font-bold text-slate-900">Billing Performance Trend</h3>
              <p className="text-xs text-slate-500">Weekly sales distribution chart (Trichy region)</p>
            </div>
            
            {/* SVG Interactive Line Chart */}
            <div className="h-64 w-full relative flex items-end">
              <svg className="w-full h-full" viewBox="0 0 700 240" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradient-sales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                
                {/* Horizontal Guide Lines */}
                <line x1="0" y1="60" x2="700" y2="60" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="120" x2="700" y2="120" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="180" x2="700" y2="180" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Area under curve */}
                <path 
                  d="M 20 220 L 20 180 Q 120 120 220 160 Q 320 200 420 100 T 620 40 L 680 50 L 680 220 Z" 
                  fill="url(#gradient-sales)" 
                />

                {/* Line graph path */}
                <path 
                  d="M 20 180 Q 120 120 220 160 Q 320 200 420 100 T 620 40 L 680 50" 
                  fill="none" 
                  stroke="#3B82F6" 
                  strokeWidth="3.5" 
                  strokeLinecap="round"
                />

                {/* Dots indicating data points */}
                <circle cx="20" cy="180" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="150" cy="140" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="220" cy="160" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="360" cy="165" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="420" cy="100" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="560" cy="55" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="680" cy="50" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
              
              {/* Tooltip Overlay Example */}
              <div className="absolute top-12 left-[60%] bg-slate-900 text-white text-[10px] py-1 px-2.5 rounded-md shadow font-sans">
                <span className="font-semibold text-cyan-400">Peak June:</span> ₹1.45L sales
              </div>
            </div>

            {/* X-Axis labels */}
            <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-100 pt-4 mt-4 font-poppins">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5 (Active)</span>
            </div>
          </GlassCard>

          {/* Action buttons playground: Success, warning, error, info states (Interactive Panel) */}
          <GlassCard className="lg:col-span-4 border border-slate-100 bg-white shadow-sm flex flex-col justify-between">
            <div className="space-y-1 mb-6">
              <h3 className="text-lg font-poppins font-bold text-slate-900">Trigger Actions</h3>
              <p className="text-xs text-slate-500">Test different button variants & status alerts</p>
            </div>

            <div className="flex flex-col gap-3.5">
              {/* Success state trigger */}
              <Button 
                onClick={() => addAlert("success", "Operation Success: Barcode generated, hardware status RESTOCKED.")} 
                variant="primary"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/10 w-full"
              >
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Success Alert</span>
                </div>
              </Button>

              {/* Warning state trigger */}
              <Button 
                onClick={() => addAlert("warning", "Operation Warning: Low stock items list sent to sales managers.")} 
                variant="accent"
                className="bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/10 w-full"
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Warning Alert</span>
                </div>
              </Button>

              {/* Error state trigger */}
              <Button 
                onClick={() => addAlert("error", "Void Logged: Connection to hardware thermal printer timed out.")} 
                variant="outline"
                className="border-rose-300 hover:border-rose-450 hover:border-rose-400 hover:bg-rose-50 text-rose-600 w-full"
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Error Alert</span>
                </div>
              </Button>

              {/* Info state trigger */}
              <Button 
                onClick={() => addAlert("info", "Information details: Central accounting database sync complete.")} 
                variant="secondary"
                className="bg-blue-50 border-blue-100 hover:bg-blue-100 text-blue-700 w-full"
              >
                <div className="flex items-center justify-center gap-2">
                  <Info className="w-4 h-4" />
                  <span>Information Alert</span>
                </div>
              </Button>
            </div>
            
            <div className="text-center mt-6 pt-4 border-t border-slate-100">
              <span className="text-[10px] text-slate-400 font-poppins">Clicking buttons adds interactive banners above.</span>
            </div>
          </GlassCard>

        </div>

        {/* Data Grid, Empty States, and Add Product Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Data Grid / Table */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Search filter controls */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="relative w-full sm:max-w-md">
                <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by product name, barcode, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-blue-500 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Ledger count:</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold font-sans">
                  {filteredProducts.length}
                </span>
              </div>
            </div>

            {/* Table wrapper */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              
              {filteredProducts.length === 0 ? (
                /* EMPTY STATE (Vibrant, attractive illustrations & accents) */
                <div className="p-16 text-center space-y-6 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-350 shadow-inner">
                    <Search className="w-10 h-10 text-slate-300" />
                  </div>
                  
                  <div className="max-w-sm space-y-2">
                    <h4 className="font-poppins font-bold text-slate-900 text-lg">No Inventory Matches</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">
                      We couldn&apos;t find any item matching <span className="font-semibold text-blue-600 italic">&quot;{searchQuery}&quot;</span>. Review your barcode search or clear active filters.
                    </p>
                  </div>

                  <Button 
                    onClick={() => setSearchQuery("")} 
                    variant="secondary" 
                    size="sm"
                    className="bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                  >
                    Reset Filter Query
                  </Button>
                </div>
              ) : (
                /* DATA GRID / TABLE */
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse font-sans text-sm">
                    <thead>
                      <tr className="bg-slate-50/70 border-b border-slate-100 text-slate-500 font-poppins font-semibold uppercase text-xs tracking-wider">
                        <th className="px-6 py-4">Item details</th>
                        <th className="px-6 py-4">Barcode</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Stock level</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Ledger actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredProducts.map((prod) => (
                        <tr 
                          key={prod.id} 
                          className="hover:bg-slate-50/50 transition-colors duration-200 group"
                        >
                          {/* Item details */}
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{prod.name}</div>
                              <div className="text-[11px] text-slate-400 font-poppins mt-0.5">{prod.id} • {prod.category}</div>
                            </div>
                          </td>
                          
                          {/* Barcode */}
                          <td className="px-6 py-4 text-xs font-mono text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <Barcode className="w-3.5 h-3.5 text-slate-400" />
                              <span>{prod.barcode}</span>
                            </div>
                          </td>
                          
                          {/* Price */}
                          <td className="px-6 py-4 font-semibold text-slate-900 font-sans">
                            ₹{prod.price.toLocaleString("en-IN")}
                          </td>
                          
                          {/* Stock level */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {/* progress bar */}
                              <div className="w-12 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                <div 
                                  className={`h-full rounded-full ${
                                    prod.stock === 0 ? "bg-rose-500" :
                                    prod.stock < 5 ? "bg-amber-500" :
                                    "bg-emerald-500"
                                  }`}
                                  style={{ width: `${Math.min((prod.stock / 150) * 100, 100)}%` }}
                                />
                              </div>
                              <span className="font-bold text-slate-700 text-xs">{prod.stock}</span>
                            </div>
                          </td>
                          
                          {/* Status badges (Success, Warning, Error, Info) */}
                          <td className="px-6 py-4">
                            <span 
                              className={`status-badge ${
                                prod.status === "Active" ? "badge-success" :
                                prod.status === "Low Stock" ? "badge-warning" :
                                "badge-error"
                              }`}
                            >
                              {prod.status}
                            </span>
                          </td>
                          
                          {/* Actions */}
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => addAlert("info", `Initiating print query for ${prod.id}.`)}
                                className="w-7 h-7 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                                title="Print invoice item"
                              >
                                <Printer className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => handleDeleteProduct(prod.id, prod.name)}
                                className="w-7 h-7 rounded-md hover:bg-rose-50 flex items-center justify-center text-slate-400 hover:text-rose-600 transition-colors"
                                title="Void / Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Add Item Form Card */}
          <div className="lg:col-span-4">
            <GlassCard className="border border-slate-200 bg-white shadow-sm p-6 space-y-6">
              <div className="space-y-1 pb-4 border-b border-slate-100">
                <h3 className="text-lg font-poppins font-bold text-slate-900">Add Inventory Product</h3>
                <p className="text-xs text-slate-500">Insert custom items into the billing ledger</p>
              </div>

              <form onSubmit={handleAddProduct} className="space-y-4 font-sans text-sm">
                {/* Product Name */}
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Product Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Laser Barcode Reader"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2 text-sm text-slate-800 outline-none transition-colors"
                  />
                </div>

                {/* Category & Price */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Category</label>
                    <select
                      value={newProductCategory}
                      onChange={(e) => setNewProductCategory(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none transition-colors"
                    >
                      <option value="Hardware">Hardware</option>
                      <option value="Software">Software</option>
                      <option value="Services">Services</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Price (₹)</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g. 3500"
                      value={newProductPrice}
                      onChange={(e) => setNewProductPrice(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-3 py-2 text-sm text-slate-800 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Initial Stock */}
                <div className="space-y-1">
                  <label className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Initial Stock Level</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 25"
                    value={newProductStock}
                    onChange={(e) => setNewProductStock(e.target.value)}
                    className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2 text-sm text-slate-800 outline-none transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full text-center py-2.5 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium"
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <Plus className="w-4 h-4" />
                    <span>Add Item to Grid</span>
                  </div>
                </Button>

              </form>
            </GlassCard>
          </div>

        </div>

      </div>
    </div>
  );
}
