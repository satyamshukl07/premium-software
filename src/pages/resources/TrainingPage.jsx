import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Users,
  MapPin,
  Check,
  ShieldCheck,
  Wrench,
  Car,
  Navigation,
  SlidersHorizontal,
} from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function TrainingPage() {
  const [selectedProduct, setSelectedProduct] = useState('All');
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const courses = [
    // 1. Workshop Teams (WRMS Pro)
    {
      id: 'c-workshop-1',
      product: 'WRMS Pro',
      category: 'Workshop Teams',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'WRMS Pro Standard User & Work Order Certification',
      duration: '2 Days • In-person or Virtual',
      audience: 'Technicians, Shift Leads, Maintenance Planners',
      desc: 'Master day-to-day work order creation, prestart checklist completions, spare parts booking, and asset defect reporting on mobile shop tablets.',
      topics: ['Work order workflows', 'Mobile tablet usage', 'Safety sign-offs and permits', 'Defect priority escalation'],
      badge: 'Certified WRMS Pro Operator',
    },
    // 2. Administrators (WRMS Pro)
    {
      id: 'c-admin-1',
      product: 'WRMS Pro',
      category: 'Administrators',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'WRMS Pro Enterprise Administrator & Workshop Architecture',
      duration: '3 Days • Virtual Masterclass',
      audience: 'Maintenance Managers, Reliability Engineers, System Admins',
      desc: 'Deep dive into setting up multi-level repair bay hierarchies, meter-based PM triggers, custom user security groups, and audit-ready report designs.',
      topics: ['Bay & asset hierarchy trees', 'Condition-based PM triggers', 'Security & approval workflows', 'Report writer customization'],
      badge: 'Certified WRMS Pro Administrator',
    },
    // 3. Compliance Teams (CHM)
    {
      id: 'c-compliance-1',
      product: 'CHM',
      category: 'Compliance Teams',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Car Hire Manager (CHM) Heavy Vehicle NHVR Audit Certification',
      duration: '2 Days • Virtual Hands-On',
      audience: 'Compliance Managers, Workshop Supervisors, Quality Auditors',
      desc: 'Comprehensive instruction on statutory prestart inspection workflows, NHVR digital defect books, torque logs, and automated audit report generation.',
      topics: ['Statutory prestart templates', 'NHVR accreditation records', 'Defect remediation sign-offs', 'Audit-ready PDF generation'],
      badge: 'Certified NHVR Compliance Officer',
    },
    // 4. Rental Operators (HireCar Marketplace)
    {
      id: 'c-rental-1',
      product: 'HireCar Marketplace',
      category: 'Rental Operators',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      title: 'HireCar Marketplace Operator & Direct Booking Masterclass',
      duration: '1 Day • Virtual Intensive',
      audience: 'Rental Fleet Owners, Station Managers, Customer Service Agents',
      desc: 'Instruction on vehicle inventory onboarding, calendar synchronization, automated digital bonds, and contactless customer airport handovers.',
      topics: ['Direct marketplace listing setup', 'Automated security bond holds', 'Contactless handover workflows', 'Linkt & EastLink toll reconciliation'],
      badge: 'Certified Rental Fleet Operator',
    },
    // 5. Fleet Managers (Australia Fleet Tracking)
    {
      id: 'c-fleet-1',
      product: 'Australia Fleet Tracking',
      category: 'Fleet Managers',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Australia Fleet Tracking Telematics & Driver Safety Certification',
      duration: '1 Day • Virtual Intensive',
      audience: 'Transport Directors, Fleet Controllers, Safety Officers',
      desc: 'Learn how to configure live GPS alert rules, outback satellite geofences, CAN bus fuel audits, and automated maintenance trigger integrations.',
      topics: ['CAN bus telematics diagnostics', 'Driver safety scorecards', 'Geofenced compliance gates', 'Automated servicing dispatch'],
      badge: 'Certified Telematics Controller',
    },
  ];

  const filteredCourses =
    selectedProduct === 'All'
      ? courses
      : courses.filter((c) => c.product === selectedProduct);

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/80">
            PROFESSIONAL CERTIFICATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 mt-4 mb-4">
            Official Software Training & Certification
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Accredited pathways specifically designed for workshop teams, compliance officers, rental operators, fleet managers, and system administrators across Techtonika platforms.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200/80 sticky top-16 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mr-2 shrink-0">
              Filter By Product:
            </span>
            {['All', 'WRMS Pro', 'CHM', 'HireCar Marketplace', 'Australia Fleet Tracking'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedProduct(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedProduct === tab
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-sky-50 hover:text-blue-700 border border-slate-200/80'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course) => {
              const isEnrolled = enrolledCourse === course.id;
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${course.badgeColor}`}>
                          {course.product}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {course.category}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> {course.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1.5 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" /> {course.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 font-medium">
                      <strong>Target Audience:</strong> {course.audience}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.desc}
                    </p>

                    <div className="pt-3 space-y-1.5 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Competencies:
                      </span>
                      {course.topics.map((t) => (
                        <div key={t} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> Brisbane, Sydney, Perth & Online
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setEnrolledCourse(course.id);
                        setTimeout(() => setEnrolledCourse(null), 3000);
                      }}
                      className={`px-4 py-2 text-xs font-bold rounded-xl cursor-pointer transition-all shadow-2xs ${
                        isEnrolled
                          ? 'bg-emerald-600 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {isEnrolled ? (
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5" /> Request Sent
                        </span>
                      ) : (
                        'Enroll / Enquire'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title="Prefer tailored onsite training at your depot or mine site?"
        subtitle="Our senior certified instructors travel directly to your facility to train teams on your live asset database."
      />
    </div>
  );
}
