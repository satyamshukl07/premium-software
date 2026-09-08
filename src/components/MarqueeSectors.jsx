import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Factory,
  Building,
  Briefcase,
  Landmark,
  HeartHandshake,
  Stethoscope,
  Pickaxe,
  Truck,
  Anchor,
  Utensils,
  Zap,
  Wine,
} from 'lucide-react';
import { sectorMarqueeItems } from '../data/contentData.js';

export default function MarqueeSectors() {
  const getSectorIcon = (iconName) => {
    const props = { className: 'w-5 h-5 text-white' };
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Factory':
        return <Factory {...props} />;
      case 'Building':
        return <Building {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Landmark':
        return <Landmark {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'Pickaxe':
        return <Pickaxe {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      case 'Anchor':
        return <Anchor {...props} />;
      case 'Utensils':
        return <Utensils {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Wine':
        return <Wine {...props} />;
      default:
        return <Building {...props} />;
    }
  };

  const fullList = [...sectorMarqueeItems, ...sectorMarqueeItems];

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Solutions for facilities across sectors
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
          Tailored workflows, compliance frameworks, and asset templates built for your industry.
        </p>
      </div>

      {/* Marquee Wrapper: Moves LEFT TO RIGHT */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-right flex items-center gap-4 py-2">
          {fullList.map((item, idx) => (
            <Link
              key={`${item.name}-${idx}`}
              to={item.path}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-red-400 hover:scale-102 transition-all flex-shrink-0 group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 transition-colors shadow-xs">
                {getSectorIcon(item.icon)}
              </div>
              <span className="text-sm font-bold text-slate-800 group-hover:text-red-600 whitespace-nowrap transition-colors">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
