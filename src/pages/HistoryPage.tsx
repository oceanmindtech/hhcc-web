import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { SectionTitle } from "../components/SectionTitle";
import { VerseCard } from "../components/VerseCard";
import { historyTimeline, historyFigures } from "../data/content";
import { ArrowRightIcon, HeartIcon } from "../components/icons";

export function HistoryPage() {
  return (
    <>
      <PageHero
        breadcrumb="堂會源起"
        title="堂會源起"
        subtitle="從差館里一個家庭聚會開始，五十五年來，上帝如何一步步建立這間教會。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm leading-relaxed text-ink/70">
                資料提供：王滕月珍、許李恩慈、紅磡堂史料組　整理：周少玲
              </p>
              <p className="mt-3 text-xs text-ink/45">
                摘自《紅磡基督徒會堂三十周年特刊》（2001 年）及《紅磡基督徒會堂四十周年特刊》（2011 年）
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto mt-10 max-w-3xl">
              <VerseCard
                text="我們既有這許多的見證人，如同雲彩圍繞著我們，就當放下各樣的重擔，脫去容易纏累我們的罪，存心忍耐，奔那擺在我們前頭的路程。"
                reference="希伯來書 12:1"
              />
            </div>
          </Reveal>

          {/* Timeline */}
          <section className="mt-20">
            <Reveal>
              <SectionTitle
                eyebrow="Our Journey"
                title="會堂歷史軌跡"
                subtitle="每一步，都是禱告與信心的記號"
                centered
              />
            </Reveal>

            <div className="relative mx-auto mt-14 max-w-3xl">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-brass/30 sm:left-1/2" />

              <div className="space-y-12">
                {historyTimeline.map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <div
                      className={`relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                        i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12 sm:text-left"
                      }`}
                    >
                      <span
                        className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border border-brass/50 bg-parchment ${
                          i % 2 === 0 ? "left-1 sm:left-auto sm:-right-4" : "left-1 sm:-left-4"
                        }`}
                      >
                        <span className="h-2.5 w-2.5 rotate-45 bg-brass" />
                      </span>
                      <div
                        className={`rounded-2xl border border-parchment-dark bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brass/50 hover:shadow-[0_20px_50px_-32px_rgba(30,74,63,0.4)] ${
                          i % 2 === 0 ? "sm:text-right" : ""
                        }`}
                      >
                        <p className="font-display text-2xl font-semibold text-brass">
                          {item.year}
                        </p>
                        <h3 className="mt-1 font-serif text-lg font-bold text-pine">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.content}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Key figures */}
          <section className="mt-24">
            <Reveal>
              <SectionTitle
                eyebrow="Pioneers"
                title="記念火種與傳道人"
                subtitle="透過他們的見證，我們看見上帝親自的揀選與帶領"
                centered
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {historyFigures.map((person, i) => (
                <Reveal key={person.name} delay={i * 70}>
                  <div className="group h-full rounded-2xl border border-parchment-dark bg-white p-7 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]">
                    <HeartIcon className="mb-5 h-7 w-7 text-brass transition-transform group-hover:scale-110" />
                    <h3 className="font-serif text-lg font-bold text-pine">{person.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{person.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Continue reading */}
          <Reveal>
            <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl border border-brass/25 bg-white/70 p-10 text-center">
              <h3 className="font-serif text-xl font-bold text-pine">想繼續認識這間教會？</h3>
              <p className="max-w-xl text-sm leading-relaxed text-ink/60">
                我們相信教會是基督的身體，信徒互為肢體。歡迎認識我們的信仰立場與聚會安排。
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-pine-light"
                >
                  關於會堂
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/worship"
                  className="inline-flex items-center gap-2 rounded-full border border-pine/25 px-6 py-3 text-sm font-semibold text-pine transition-colors hover:border-brass hover:text-brass"
                >
                  崇拜時間
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}