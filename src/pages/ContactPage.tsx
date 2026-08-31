import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/ScrollReveal";
import { churchInfo, appStoreUrl } from "../data/content";
import { BibleIcon, ExternalLinkIcon, MapPinIcon, PhoneIcon } from "../components/icons";

export function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="聯絡我們"
        title="聯絡我們"
        subtitle="與我們聯絡，或來與我們一同敬拜。我們期待認識你。"
      />

      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-[auto_1fr]">
            {/* Contact cards */}
            <div className="space-y-5 md:w-96">
              <Reveal>
                <div className="rounded-2xl border border-parchment-dark bg-white p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jade/10">
                      <MapPinIcon className="h-6 w-6 text-jade" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-pine">聚會地點</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">{churchInfo.address}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className="rounded-2xl border border-parchment-dark bg-white p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brass/10">
                      <PhoneIcon className="h-6 w-6 text-brass" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-pine">電話</h3>
                      <p className="mt-1 text-sm text-ink/65">
                        {churchInfo.phones.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p}`}
                            className="mr-3 text-ink/80 underline decoration-brass/40 underline-offset-4 hover:text-pine"
                          >
                            {p.replace(/(\d{4})(\d{4})/, "$1 $2")}
                          </a>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-2xl border border-parchment-dark bg-white p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-jade/10">
                      <BibleIcon className="h-6 w-6 text-jade" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-pine">主日崇拜</h3>
                      <p className="mt-1 text-sm text-ink/65">
                        早堂崇拜 · 上午 9:45 – 10:45（每月第一週不設）
                        <br />
                        午堂崇拜 · 中午 12:00 – 13:00
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-brass/30 bg-heritage p-7 transition-all hover:border-brass hover:shadow-[0_24px_60px_-32px_rgba(185,138,47,0.5)]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-pine">下載本堂 App</h3>
                      <p className="mt-1 text-sm text-ink/60">閱覽家事報告及崇拜通告</p>
                    </div>
                    <ExternalLinkIcon className="h-5 w-5 text-brass transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </a>
              </Reveal>
            </div>

            {/* Map */}
            <Reveal delay={100} className="h-full">
              <div className="h-full min-h-[420px] overflow-hidden rounded-3xl border border-parchment-dark bg-white">
                <iframe
                  title="紅磡基督徒會堂位置地圖"
                  src="https://maps.google.com/maps?q=%E7%B4%85%E7%A4%A1%E9%A6%AC%E9%A0%AD%E5%9C%8D%E9%81%9337%E8%99%9F%E7%B4%85%E7%A4%A1%E5%95%86%E6%A5%AD%E4%B8%AD%E5%BF%83&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}