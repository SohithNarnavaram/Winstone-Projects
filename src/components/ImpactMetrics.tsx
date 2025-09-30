import CountUp from './CountUp';

const ImpactMetrics = () => {
  const metrics = [
    { value: 25, suffix: "+", label: "Years of Excellence", subtitle: "Building businesses" },
    { value: 500, suffix: "M+", label: "Revenue Generated", subtitle: "Across ventures" },
    { value: 1000, suffix: "+", label: "Lives Impacted", subtitle: "Through initiatives" },
    { value: 15, suffix: "+", label: "Successful Ventures", subtitle: "Market leadership" },
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Impact</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Global <span className="text-yellow-400">Impact</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto font-normal">
            Transforming industries and creating value across multiple sectors.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              {/* Metric Value */}
              <div className="mb-3">
                <span className="text-4xl lg:text-5xl font-bold text-yellow-400">
                  <CountUp
                    from={0}
                    to={metric.value}
                    duration={2.5}
                    delay={index * 0.2}
                    className="count-up-text"
                  />
                  {metric.suffix}
                </span>
              </div>
              
              {/* Metric Label */}
              <div className="mb-1">
                <h3 className="text-lg font-medium text-white">
                  {metric.label}
                </h3>
              </div>
              
              {/* Subtitle */}
              <p className="text-sm text-slate-400">
                {metric.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;