import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const R = rate / (12 * 100);
    const N = tenure * 12;
    const emiVal = (principal * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const total = emiVal * N;
    return {
      emi: Math.round(emiVal),
      totalInterest: Math.round(total - principal),
      totalPayment: Math.round(total),
    };
  }, [principal, rate, tenure]);

  const principalPercent = (principal / totalPayment) * 100;
  const interestPercent = (totalInterest / totalPayment) * 100;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="emi" className="section-padding bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Plan Your Budget</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              EMI Calculator
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Sliders */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Loan Amount</label>
                    <span className="text-sm font-bold text-gold">{fmt(principal)}</span>
                  </div>
                  <input
                    type="range"
                    min={500000}
                    max={10000000}
                    step={100000}
                    value={principal}
                    onChange={(e) => setPrincipal(+e.target.value)}
                    className="w-full h-2 rounded-full bg-muted appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>₹5L</span><span>₹1Cr</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Interest Rate</label>
                    <span className="text-sm font-bold text-gold">{rate}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={15}
                    step={0.1}
                    value={rate}
                    onChange={(e) => setRate(+e.target.value)}
                    className="w-full h-2 rounded-full bg-muted appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span><span>15%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Loan Tenure</label>
                    <span className="text-sm font-bold text-gold">{tenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={tenure}
                    onChange={(e) => setTenure(+e.target.value)}
                    className="w-full h-2 rounded-full bg-muted appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 yr</span><span>30 yrs</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col items-center justify-center">
                {/* Pie chart */}
                <div className="relative w-48 h-48 mb-6">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="hsl(var(--navy))"
                      strokeWidth="3"
                      strokeDasharray={`${principalPercent} ${100 - principalPercent}`}
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="hsl(var(--gold))"
                      strokeWidth="3"
                      strokeDasharray={`${interestPercent} ${100 - interestPercent}`}
                      strokeDashoffset={`-${principalPercent}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Calculator className="text-gold mb-1" size={20} />
                    <p className="text-xs text-muted-foreground">Monthly EMI</p>
                    <p className="text-lg font-bold text-foreground">{fmt(emi)}</p>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Principal</span>
                    <span className="text-sm font-bold text-primary">{fmt(principal)}</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Total Interest</span>
                    <span className="text-sm font-bold text-gold">{fmt(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between p-3 navy-gradient rounded-lg">
                    <span className="text-sm text-primary-foreground">Total Payment</span>
                    <span className="text-sm font-bold text-primary-foreground">{fmt(totalPayment)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EMICalculator;
