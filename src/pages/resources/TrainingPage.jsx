import React from 'react';
import { Award, BookOpen, Calendar, CheckCircle2, Clock, Users, MapPin } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function TrainingPage() {
  const courses = [
    {
      id: 'c-1',
      title: 'MEX Standard User & Work Order Certification',
      duration: '2 Days • In-person or Virtual',
      audience: 'Technicians, Shift Leads, Maintenance Planners',
      desc: 'Master day-to-day work order creation, prestart checklist completions, spare parts booking, and asset defect reporting.',
      topics: ['Work order workflows', 'Mobile tablet usage', 'Safety sign-offs and permits', 'Defect priority escalation'],
      badge: 'Certified MEX Operator',
    },
    {
      id: 'c-2',
      title: 'MEX Advanced Administrator & Hierarchy Architecture',
      duration: '3 Days • Virtual Masterclass',
      audience: 'Maintenance Managers, Reliability Engineers, System Admins',
      desc: 'Deep dive into setting up multi-level asset hierarchies, meter-based PM triggers, custom user security groups, and audit-ready report designs.',
      topics: ['Parent-child asset trees', 'Condition-based PM triggers', 'Security & approval workflows', 'Report writer customization'],
      badge: 'Certified MEX Administrator',
    },
    {
      id: 'c-3',
      title: 'Car Hire Manager (CHM) Workshop & Fleet Specialist',
      duration: '2 Days • Virtual Hands-On',
      audience: 'Workshop Supervisors, Service Advisors, Fleet Controllers',
      desc: 'Comprehensive instruction on job card processing, technician bay scheduling, parts requisitioning, and statutory NHVR compliance logging.',
      topics: ['Gantt bay allocations', 'Integrated parts stores', 'Toll and fine reconciliation', 'Turnaround desk checklists'],
      badge: 'Certified CHM Specialist',
    },
    {
      id: 'c-4',
      title: 'Australia Fleet Tracking Telematics & Safety Systems',
      duration: '1 Day • Virtual Intensive',
      audience: 'Transport Directors, Safety Officers, Fleet Managers',
      desc: 'Learn how to configure live GPS alert rules, geofence perimeters, harsh driving behavior scoring, and automated maintenance trigger integrations.',
      topics: ['CAN bus telematics diagnostics', 'Driver safety scorecards', 'Geofenced compliance gates', 'Automated servicing dispatch'],
      badge: 'Certified Telematics Controller',
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Professional Certification
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Official Software Training & Certification
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Equip your technicians, planners, and administrators with accredited certifications across MEX CMMS, CHM, HireCar Marketplace, and Australia Fleet Tracking.
          </p>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600">Accredited Pathways</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Available Training Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {course.duration}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <Award className="w-4 h-4" /> {course.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{course.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">Audience: {course.audience}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{course.desc}</p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">Core Competencies:</span>
                    {course.topics.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Brisbane, Sydney, Perth & Online</span>
                  <button
                    type="button"
                    onClick={() => alert(`Enrolling inquiry for: ${course.title}`)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer shadow-sm transition-all"
                  >
                    Enroll / Enquire
                  </button>
                </div>
              </div>
            ))}
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
