import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { badWeatherGuidelines } from "../data/content";
import { AlertIcon, CloudIcon, UmbrellaIcon } from "../components/icons";

export function GuidelinesPage() {
  return (
    <>
      <PageHero
        breadcrumb="聚會指引"
        title="聚會指引（風季、雨季）"
        subtitle="由於風季及雨季已臨，請弟兄姊妹留意本堂的聚會安排指引。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-brass/30 bg-white p-8 sm:p-10">
              <p className="text-sm font-semibold text-pine">備註</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{badWeatherGuidelines.intro}</p>
            </div>
          </Reveal>

          {/* Typhoon */}
          <section className="mt-16">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jade/10">
                  <CloudIcon className="h-6 w-6 text-jade" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-pine sm:text-2xl">颱風</h2>
                  <p className="text-sm text-ink/50">八號或以上風球生效期間之安排</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="overflow-hidden rounded-2xl border border-parchment-dark bg-white">
                <div className="grid grid-cols-3 bg-heritage px-6 py-4 text-sm font-bold text-pine">
                  <span>風球情況</span>
                  <span>聚會開始前懸掛</span>
                  <span>聚會進行中懸掛</span>
                </div>
                {badWeatherGuidelines.typhoon.map((row) => (
                  <div
                    key={row.condition}
                    className="grid grid-cols-3 border-t border-parchment-dark px-6 py-4 text-sm transition-colors hover:bg-parchment/50"
                  >
                    <span className="font-semibold text-pine">{row.condition}</span>
                    <span>{row.before}</span>
                    <span>{row.during}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 space-y-3">
                {badWeatherGuidelines.typhoonExamples.map((ex, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-jade/20 bg-jade/5 px-6 py-4 text-sm leading-relaxed text-ink/70"
                  >
                    <span className="mr-2 font-bold text-jade">例（{i + 1}）</span>
                    {ex.text}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Rain */}
          <section className="mt-16">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brass/10">
                  <UmbrellaIcon className="h-6 w-6 text-brass" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-bold text-pine sm:text-2xl">暴雨</h2>
                  <p className="text-sm text-ink/50">黃色、紅色及黑色暴雨警告之安排</p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {badWeatherGuidelines.rain.map((row, i) => (
                <Reveal key={row.title} delay={i * 80}>
                  <div
                    className={`h-full rounded-2xl border p-7 ${
                      row.title.includes("黑色")
                        ? "border-brass/40 bg-brass/5"
                        : "border-parchment-dark bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <AlertIcon className="h-5 w-5 text-brass" />
                      <h3 className="font-serif text-lg font-bold text-pine">{row.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{row.content}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Reminder */}
          <Reveal delay={60}>
            <div className="mt-16 rounded-3xl border border-jade/25 bg-jade/5 p-8 text-center sm:p-10">
              <p className="font-serif text-lg font-bold text-pine">願主的平安常與你們同在</p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
                不論風雨，當以智慧衡量環境與道路安全作出決定。
                如有疑問，可致電本堂查詢：2773 1928。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}