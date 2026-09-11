import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Car, LayoutDashboard, Navigation, Wrench, ArrowRight } from "lucide-react";

export default function TrustSection() {
  const cards = [
    {
      name: "HireCar Marketplace",
      slug: "hirecar-marketplace",
      detailRoute: "/product/hirecar-marketplace",
      oneLiner: "Australia's dedicated marketplace for vehicle rentals, connecting customers directly with trusted fleet operators.",
      icon: Car,
      accentColor: "#f97316",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      link: "https://www.hirecarmarketplace.com.au/",
      tag: "Rental Marketplace",
    },
    {
      name: "Car Hire Manager (CHM)",
      slug: "chm",
      detailRoute: "/product/chm",
      oneLiner: "Cloud-based car hire operating platform for dispatch, bookings, toll management, and fleet utilization.",
      icon: LayoutDashboard,
      accentColor: "#0284c7",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      link: "https://www.carhiremanager.com.au/",
      tag: "Fleet Management",
    },
    {
      name: "Australia Fleet Tracking",
      slug: "australia-fleet-tracking",
      detailRoute: "/product/australia-fleet-tracking",
      oneLiner: "Live 4G GPS tracking, driver safety telematics, automated alerts, and asset monitoring across Australia.",
      icon: Navigation,
      accentColor: "#10b981",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      link: "https://australiafleettracking.com/",
      tag: "GPS Telematics",
    },
    {
      name: "WRMS Pro",
      slug: "wrms-pro",
      detailRoute: "/product/wrms-pro",
      oneLiner: "Complete workshop repair management software for work orders, inspections, parts inventory, and scheduling.",
      icon: Wrench,
      accentColor: "#e11d48",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      link: "https://www.wrmspro.com.au/",
      tag: "Workshop OS",
    },
  ];

  return (
    <section
      id="section-trust-ecosystem"
      className="py-20 lg:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-200/60 px-3 py-1 rounded-full border border-slate-300 inline-block mb-3">
            Connected Software Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Technology Built Around Real Business Needs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From vehicle rentals and fleet tracking to car hire management and workshop operations,
            our solutions are designed to help businesses simplify complex workflows, improve visibility
            and operate more efficiently.
          </p>
        </div>

        {/* 4 Compact Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                to={card.detailRoute}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: card.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {card.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {card.oneLiner}
                  </p>
                </div>

                <div className="inline-flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors pt-4 border-t border-slate-100">
                  <span>Explore Platform</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
