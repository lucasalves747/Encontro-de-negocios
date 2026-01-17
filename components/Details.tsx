import React from 'react';
import { COPY } from '../constants';
import Button from './Button';
import { Calendar, MapPin, Lock, Briefcase, TrendingUp, Users } from 'lucide-react';

const Details: React.FC = () => {
  // 🔗 Lendo parâmetros da URL
  const searchParams = new URLSearchParams(window.location.search);

  const date = searchParams.get('date') || '24 de Janeiro';
  const location = searchParams.get('location') || COPY.DETAILS.LOCATION;
  const time = searchParams.get('time') || COPY.DETAILS.TIME;

  return (
    <section className="py-8 md:py-8 bg-gray-50 text-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Subheadline + Intro */}
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-relaxed">
              <span className="text-brand-gold">{date}.</span>
              <br />
              {COPY.DETAILS.INTRO}
            </h2>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:border-brand-gold/30 transition-all group text-center flex flex-col items-center justify-center">
              <Users className="w-8 h-8 text-brand-gold mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                {COPY.DETAILS.POINTS[0]}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:border-brand-gold/30 transition-all group text-center flex flex-col items-center justify-center">
              <TrendingUp className="w-8 h-8 text-brand-gold mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                {COPY.DETAILS.POINTS[1]}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:border-brand-gold/30 transition-all group text-center flex flex-col items-center justify-center">
              <Briefcase className="w-8 h-8 text-brand-gold mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide">
                {COPY.DETAILS.POINTS[2]}
              </h3>
            </div>
          </div>

          {/* Logistics Box */}
          <div className="bg-white rounded-xl p-6 border-l-4 border-brand-gold shadow-xl mb-8 transform hover:scale-[1.005] transition-transform">
            <div className="space-y-4">

              {/* Local */}
              <div className="flex items-center space-x-4 pb-3 border-b border-gray-100">
                <div className="bg-brand-gold/10 p-2 rounded-full">
                  <MapPin className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">
                    Local
                  </p>
                  <p className="text-gray-900 leading-tight">
                    {location}
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-center space-x-4 pb-3 border-b border-gray-100">
                <div className="bg-brand-gold/10 p-2 rounded-full">
                  <Calendar className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">
                    Horário
                  </p>
                  <p className="text-gray-900 leading-tight">
                    {time}
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-center space-x-3 pt-1">
                <div className="bg-brand-gold/10 p-2 rounded-full">
                  <Lock className="text-brand-gold w-4 h-4" />
                </div>
                <p className="text-sm text-gray-600 font-medium italic">
                  {COPY.DETAILS.DISCLAIMER}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              fullWidth={false}
              className="w-full md:w-auto py-3 shadow-lg hover:shadow-xl text-sm"
            >
              {COPY.DETAILS.CTA}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
