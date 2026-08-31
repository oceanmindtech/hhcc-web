import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { SectionTitle } from "../components/SectionTitle";
import { fellowships, ministryHighlights } from "../data/content";
import { ClockIcon, HeartIcon, UsersIcon } from "../components/icons";

const categories = ["兒童及青少年", "青年", "成人"];

export function MinistriesPage() {
  return (
    <>
      <PageHero
        breadcrumb="團契事工"
        title="團契與事工"
        subtitle="我們相信教會是基督的身體，信徒互為肢體。按齡分組的團契，讓我們在愛中彼此建立。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Fellowships"
              title="團契小組"
              subtitle="相聚、分享、代禱、同行，在各人生階段彼此支持"
              centered
            />
          </Reveal>

          {categories.map((category) => {
            const list = fellowships.filter((f) => f.category === category);
            if (list.length === 0) return null;
            return (
              <section key={category} className="mt-14">
                <Reveal>
                  <h3 className="mb-5 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rotate-45 bg-brass" />
                    <span className="font-serif text-xl font-bold text-pine">{category}</span>
                    <span className="h-px flex-1 bg-parchment-dark" />
                  </h3>
                </Reveal>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((f, i) => (
                    <Reveal key={f.name} delay={i * 60}>
                      <div className="group h-full rounded-2xl border border-parchment-dark bg-white p-7 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]">
                        <div className="flex items-center justify-between">
                          <HeartIcon className="h-6 w-6 text-brass transition-transform group-hover:scale-110" />
                          <span className="rounded-full bg-jade/10 px-3 py-1 text-[11px] font-semibold text-jade">
                            {category}
                          </span>
                        </div>
                        <h4 className="mt-4 font-serif text-lg font-bold text-pine">{f.name}</h4>
                        <div className="mt-4 space-y-2 text-sm text-ink/65">
                          <p className="flex items-center gap-2">
                            <CalendarDot /> {f.schedule}
                          </p>
                          <p className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4 text-brass" /> {f.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <UsersIcon className="h-4 w-4 text-brass" /> {f.audience}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}

          <Reveal delay={80}>
            <section className="mt-20 rounded-3xl border border-jade/25 bg-jade/5 p-10 text-center">
              <h3 className="font-serif text-xl font-bold text-pine">想加入團契？</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
                無論你在人生哪一個階段，都有屬於你的屬靈群體。歡迎在崇拜後與長執或傳道人傾談，
                或致電本堂查詢，我們樂意為你安排。
              </p>
              <p className="mt-5 text-sm text-jade">電話：2773 1928　·　2773 1937</p>
            </section>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ministryHighlights.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl border border-parchment-dark bg-heritage p-7"
                >
                  <HeartIcon className="mb-4 h-6 w-6 text-brass" />
                  <h4 className="font-serif font-bold text-pine">{m.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{m.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

function CalendarDot() {
  return <span className="h-2.5 w-2.5 rotate-45 bg-jade/60" />;
}