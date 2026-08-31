import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { SectionTitle } from "../components/SectionTitle";
import { VerseCard } from "../components/VerseCard";
import { statementOfFaith } from "../data/content";
import { BibleIcon } from "../components/icons";

export function FaithPage() {
  return (
    <>
      <PageHero
        breadcrumb="信仰宣言"
        title="信仰宣言"
        subtitle="本堂所信的道，乃歷代教會所傳純正福音信仰的核心。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <VerseCard
                text="弟兄們，我如今把先前所傳給你們的福音，告訴你們知道；這福音你們也領受了，又靠著站立得住。"
                reference="哥林多前書 15:1"
              />
            </div>
          </Reveal>

          <section className="mt-20">
            <Reveal>
              <SectionTitle
                eyebrow="What We Believe"
                title="我們所信的道"
                subtitle="福音信仰、非宗派的獨立堂會，以聖經為信仰及生活之最高權威"
                centered
              />
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {statementOfFaith.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 80}>
                  <article className="group h-full rounded-2xl border border-parchment-dark bg-white p-8 transition-all hover:-translate-y-1 hover:border-brass/50 hover:shadow-[0_24px_60px_-32px_rgba(30,74,63,0.4)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine">
                        <BibleIcon className="h-5 w-5 text-brass-light" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-xl text-brass">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-pine">{item.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.content}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}