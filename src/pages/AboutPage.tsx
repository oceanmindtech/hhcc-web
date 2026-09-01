import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { SectionTitle } from "../components/SectionTitle";
import { VerseCard } from "../components/VerseCard";
import { aboutContent, teamMembers } from "../data/content";
import { ArrowRightIcon, UsersIcon } from "../components/icons";
import hhccLogo from "../assets/hhcc-logo.png";

export function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="關於會堂"
        title="關於會堂"
        subtitle="認識紅磡基督徒會堂的歷史、信仰、會徽與同工團隊"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <section className="mb-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <SectionTitle eyebrow="Our Story" title="堂會簡介" />
                <p className="mt-6 leading-relaxed text-ink/75">{aboutContent.intro}</p>
                <p className="mt-4 leading-relaxed text-ink/75">{aboutContent.vision}</p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { year: "1971", label: "紅磡成立" },
                    { year: "1990", label: "建立大埔堂" },
                    { year: "2010", label: "遷至現址" },
                  ].map((m) => (
                    <div
                      key={m.year}
                      className="rounded-xl border border-brass/30 bg-white px-4 py-5 text-center"
                    >
                      <p className="font-display text-2xl font-semibold text-brass">{m.year}</p>
                      <p className="mt-1 text-xs text-ink/60">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <VerseCard
                  text="坦然無懼的來到施恩的寶座前，為要得憐恤，蒙恩惠，作隨時的幫助。"
                  reference="希伯來書 4:16"
                  className="h-full"
                />
              </Reveal>
            </div>
          </section>

          {/* Emblem */}
          <section className="mb-20">
            <div className="overflow-hidden rounded-3xl border border-brass/25 bg-white">
              <div className="grid md:grid-cols-[auto_1fr]">
                <div className="relative flex min-h-[280px] items-center justify-center border-b border-parchment-dark bg-heritage px-10 py-12 md:border-b-0 md:border-r">
                  <div className="absolute inset-0 hero-wash" />
                  <div className="relative text-center">
                    <img
                      src={hhccLogo}
                      alt="紅磡基督徒會堂會徽"
                      className="mx-auto h-36 w-36 object-contain drop-shadow-lg"
                    />
                    <p className="mt-3 text-xs tracking-[0.2em] text-ink/50">EST. 1971</p>
                  </div>
                </div>
                <div className="p-8 sm:p-12">
                  <SectionTitle
                    eyebrow="Our Emblem"
                    title="會徽意義"
                    subtitle="2010 年會徽設計比賽之獲選設計"
                  />
                  <p className="mt-6 leading-relaxed text-ink/75">{aboutContent.emblem}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mb-20">
            <Reveal>
              <SectionTitle
                eyebrow="Our Team"
                title="教牧及同工團隊"
                subtitle="傳道、長老、執事與幹事，一同牧養及服事神的家"
                centered
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((person, i) => (
                <Reveal key={person.name} delay={i * 60}>
                  <div className="group relative overflow-hidden rounded-2xl border border-parchment-dark bg-white p-8 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-jade/10 transition-colors group-hover:bg-jade/20">
                        <UsersIcon className="h-7 w-7 text-jade" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-pine">{person.name}</h3>
                        <p className="mt-0.5 text-sm text-jade">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Related links */}
          <Reveal>
            <section className="mt-20 grid gap-5 sm:grid-cols-3">
              {[
                { to: "/history", label: "堂會源起", desc: "從差館里的家庭聚會到今天，認識會堂的歷史。" },
                { to: "/faith", label: "信仰宣言", desc: "本堂的信仰立場與所信的道。" },
                { to: "/guidelines", label: "聚會指引", desc: "風季雨季期間的聚會安排。" },
              ].map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group rounded-2xl border border-parchment-dark bg-white p-6 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_20px_50px_-32px_rgba(30,74,63,0.4)]"
                >
                  <h3 className="font-serif text-lg font-bold text-pine group-hover:text-brass">
                    {card.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{card.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass">
                    了解更多
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </section>
          </Reveal>
        </div>
      </div>
    </>
  );
}