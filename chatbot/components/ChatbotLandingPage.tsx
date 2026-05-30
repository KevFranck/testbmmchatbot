import { BrandMark } from "@/components/BrandMark";
import { SuggestedQuestions } from "@/components/SuggestedQuestions";

const suggestedQuestions = [
  "Comment devenir mentor ?",
  "Comment demander un mentor ?",
  "Ou voir les mentors publics ?",
  "Ou trouver les ressources d'admission en medecine ?",
  "Est-ce qu'un etudiant du secondaire peut devenir mentor ?",
  "Que faire si aucun mentor compatible n'est disponible ?",
  "How can I become a mentor?",
  "How can I request a mentor?",
  "Where can I find medical school admission resources?",
];

const highlights = [
  "Comprendre le fonctionnement du mentorat BMM.",
  "Orienter les futurs mentors et mentores dans leur inscription.",
  "Aider a trouver les bonnes ressources d'admission en medecine au Canada.",
];

const navigation = [
  { href: "#overview", label: "Apercu" },
  { href: "#questions", label: "Questions" },
  { href: "#privacy", label: "Confidentialite" },
];

export function ChatbotLandingPage() {
  return (
    <main className="flex-1">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <BrandMark compact />
          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#questions"
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-red-strong"
          >
            Explorer BMM Guide
          </a>
        </div>
      </header>

      <section
        id="overview"
        className="premium-gradient section-grid border-b border-border/70 pt-32"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-bronze/35 bg-brand-ivory/90 px-4 py-2 text-sm font-medium text-brand-brown shadow-sm dark:bg-brand-ink-soft/90 dark:text-brand-bronze">
              <span className="size-2 rounded-full bg-primary" />
              Phase de test BMM Guide
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
                Assistant virtuel BMM
              </p>
              <h1 className="font-display text-5xl leading-tight text-foreground sm:text-6xl">
                Testez BMM Guide
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                BMM Guide est l&apos;assistant virtuel de BMM - Black Med
                Mentorship. Il aide les utilisateurs a comprendre la
                plateforme, le fonctionnement du mentorat, l&apos;inscription
                comme mentor ou mentore, et les ressources d&apos;admission en
                medecine au Canada.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Note de test
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Ce chatbot est actuellement en phase de test. Certaines
                  reponses peuvent etre incompletes ou necessiter une
                  verification humaine.
                </p>
              </div>
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Verification officielle
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Les informations liees aux admissions, aux dates limites, aux
                  frais et aux exigences doivent toujours etre verifiees sur les
                  sites officiels des universites ou des services d&apos;admission.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#questions"
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-red-strong"
              >
                Commencer
              </a>
              <a
                href="#questions"
                className="rounded-full border border-border bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-secondary"
              >
                Voir les questions suggerees
              </a>
            </div>

            <div className="rounded-[1.25rem] border border-brand-bronze/25 bg-background/72 px-5 py-4 text-sm leading-7 text-muted-foreground shadow-sm backdrop-blur">
              Un bouton de chat flottant BMM Guide est disponible en bas a
              droite sur toutes les pages. Il s&apos;ouvre au clic comme un
              widget de support classique.
            </div>
          </div>

          <aside className="surface-card rounded-[1.75rem] p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-bronze">
                  Ce que le test couvre
                </p>
                <h2 className="font-display text-3xl text-foreground">
                  Un espace simple pour valider l&apos;experience utilisateur
                </h2>
              </div>

              <ul className="space-y-4">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-[1.25rem] bg-background/70 p-4"
                  >
                    <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-brand-red-soft text-xs font-bold text-brand-red dark:bg-brand-red/15 dark:text-brand-bronze">
                      +
                    </span>
                    <span className="text-sm leading-7 text-muted-foreground">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="rounded-[1.25rem] border border-brand-bronze/25 bg-brand-bronze/10 p-5">
                <p className="text-sm font-semibold text-foreground">
                  Confidentialite
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Veuillez eviter de partager des informations personnelles
                  sensibles pendant ce test.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="questions"
        className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-red">
              Demarrages rapides
            </p>
            <h2 className="font-display text-4xl text-foreground">
              Questions suggerees pour les testeurs
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              Cliquez sur une suggestion pour la copier, puis utilisez le
              bouton flottant en bas a droite pour lancer la conversation avec
              BMM Guide.
            </p>
          </div>

          <div className="surface-card rounded-[1.75rem] p-6 sm:p-8">
            <SuggestedQuestions questions={suggestedQuestions} />
          </div>
        </div>
      </section>

      <section id="privacy" className="border-t border-border/70 bg-card/40">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-3">
            <BrandMark />
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Prototype de test pour valider BMM Guide dans un cadre propre,
              responsive et proche de l&apos;identite visuelle BMM.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-border bg-background/80 p-5">
              <p className="text-sm font-semibold text-foreground">
                A retenir
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Les reponses du chatbot sont indicatives et ne remplacent pas une
                verification aupres des sources officielles.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-border bg-background/80 p-5">
              <p className="text-sm font-semibold text-foreground">
                Protection future
              </p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                La variable{" "}
                <code>NEXT_PUBLIC_CHATBOT_TEST_ENABLED</code> permet de
                desactiver rapidement le widget plus tard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
