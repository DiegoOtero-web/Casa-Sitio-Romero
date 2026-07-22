import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Utensils, Flame, Star, ArrowRight } from "lucide-react";

import steak from "@/assets/food/IMG_5177.jpg.asset.json";
import artichoke from "@/assets/food/IMG_5179.jpg.asset.json";
import fish from "@/assets/food/IMG_5180.jpg.asset.json";
import iberico from "@/assets/food/IMG_5182.jpg.asset.json";
import goatCheese from "@/assets/food/IMG_5186.jpg.asset.json";
import migas from "@/assets/food/IMG_5187.jpg.asset.json";
import beers from "@/assets/food/IMG_5188.jpg.asset.json";
import cannelloni from "@/assets/food/IMG_5189.jpg.asset.json";
import flamenquin from "@/assets/food/IMG_5191.jpg.asset.json";
import anchoas from "@/assets/food/IMG_5192.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:image", content: steak.url },
      { name: "twitter:image", content: steak.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Casa Sito Romero",
          image: steak.url,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Muñoz León, 11",
            addressLocality: "Sevilla",
            postalCode: "41009",
            addressCountry: "ES",
          },
          telephone: "+34608585324",
          servesCuisine: ["Española", "Tapas", "Carnes a la brasa"],
          priceRange: "€€",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "1900" },
          openingHours: [
            "Tu 12:30-16:30",
            "Tu 20:00-00:00",
            "We 12:30-00:00",
            "Th 12:30-16:30",
            "Th 20:00-00:00",
            "Fr 12:30-16:30",
            "Fr 20:00-00:00",
            "Sa 12:30-16:30",
            "Sa 20:00-00:00",
            "Su 12:00-16:30",
          ],
        }),
      },
    ],
  }),
});

const WHATSAPP = "https://wa.me/34608585324";
const PHONE_TEL = "tel:+34608585324";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=Calle+Mu%C3%B1oz+Le%C3%B3n+11+41009+Sevilla";
const INSTAGRAM = "https://instagram.com/casa_sito_romero";

const menu = {
  "Para picar": [
    "Patatas bravas",
    "Croquetas de puchero (media ración)",
    "Ensaladilla rusa",
    "Pimientos fritos",
    "Boquerones fritos",
    "Tomate aliñado",
    "Berenjenas con miel de caña",
    "Patatas confitadas",
  ],
  "De la casa": [
    "Albóndigas al oporto",
    "Flamenquín de espárragos",
    "Brocheta de calabacín, bacon y langostinos",
    "Fritura del campo con langostinos",
    "Atún mechado",
    "Crepes de pollo",
    "Arroz de la casa",
    "Gyozas",
    "Risotto",
  ],
  "Carnes y brasa": [
    "Chuletón gallego",
    "Solomillo de ternera a la piedra",
    "Solomillo al whisky",
    "Tiras de secreto ibérico",
    "Presa ibérica",
    "Tabla de ibéricos",
  ],
  "Postres": [
    "Tarta de chocolate",
    "Tarta de queso",
    "Milhojas",
  ],
  "Bebidas": [
    "Cerveza Estrella Galicia",
    "Cerveza Victoria de Málaga",
    "Vino de la casa",
    "Oporto",
    "Whisky",
  ],
} as const;

const schedule: Array<[string, string]> = [
  ["Lunes", "Cerrado"],
  ["Martes", "12:30–16:30 · 20:00–00:00"],
  ["Miércoles", "12:30–00:00"],
  ["Jueves", "12:30–16:30 · 20:00–00:00"],
  ["Viernes", "12:30–16:30 · 20:00–00:00"],
  ["Sábado", "12:30–16:30 · 20:00–00:00"],
  ["Domingo", "12:00–16:30"],
];

const testimonials = [
  {
    name: "Marta G.",
    text:
      "El chuletón estaba de escándalo y las croquetas de puchero, para repetir. Trato cercano y precio muy justo para lo que ofrecen.",
  },
  {
    name: "Javier R.",
    text:
      "Uno de esos sitios de barrio a los que vuelves. Tapeo rico, carne a la brasa en su punto y ambiente sin pretensiones.",
  },
  {
    name: "Lucía P.",
    text:
      "Fuimos un grupo de ocho y salimos encantados. Las bravas, la ensaladilla y las albóndigas al oporto son imprescindibles.",
  },
  {
    name: "Andrés M.",
    text:
      "Cocina casera de verdad en la Macarena. Buena relación calidad-precio y un servicio muy amable.",
  },
];

function Landing() {
  return (
    <div className="paper-bg min-h-screen text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <HoursLocation />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Flame className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-base font-bold leading-tight text-brown-deep sm:text-lg">
              Casa Sito Romero
            </span>
            <span className="hidden text-[11px] uppercase tracking-widest text-muted-foreground sm:block">
              Tapas · Brasa · Sevilla
            </span>
          </span>
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 sm:px-5 sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden xs:inline sm:inline">Reservar por WhatsApp</span>
          <span className="xs:hidden sm:hidden">Reservar</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={steak.url}
          alt="Solomillo de ternera a la piedra con patatas y pimientos"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/70 via-brown-deep/55 to-brown-deep/85" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 md:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-brown-deep/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cream/90">
          <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
          Sevilla · Macarena · desde el barrio
        </span>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          Tapas de siempre y carnes a la brasa
        </h1>
        <p className="mt-5 max-w-xl text-base text-cream/85 sm:text-lg">
          Cocina andaluza casera, brasa al punto y buen vino. Pasa a comer o a
          tapear con los tuyos, como se ha hecho toda la vida.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#carta"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-brown-deep shadow-md transition hover:bg-white"
          >
            <Utensils className="h-4 w-4" /> Ver la carta
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/70 bg-transparent px-5 py-3 text-sm font-semibold text-cream transition hover:bg-cream/10"
          >
            Reservar mesa <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-cream/80 sm:text-sm">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-ochre text-ochre" /> 4,3 en Google
          </span>
          <span className="opacity-60">·</span>
          <span>+1.900 reseñas en TripAdvisor</span>
          <span className="opacity-60">·</span>
          <span>10–20 € por persona</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            La casa
          </p>
          <h2 className="font-serif text-3xl leading-tight text-brown-deep sm:text-4xl">
            Un rincón de barrio en la Macarena
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-brown">
            <p>
              Somos un restaurante familiar en la Macarena, en Sevilla. Servimos
              tapas caseras, carnes a la brasa y platos de siempre.
            </p>
            <p>
              Ambiente informal, con terraza, para venir a comer, cenar o
              tapear con amigos y familia.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img
            src={iberico.url}
            alt="Tabla de ibéricos y queso curado"
            className="col-span-2 aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
          <img
            src={beers.url}
            alt="Cañas de Estrella Galicia en el local"
            className="aspect-square w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
          <img
            src={migas.url}
            alt="Cazuela de barro con migas y taquitos"
            className="aspect-square w-full rounded-lg object-cover shadow-sm"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="carta" className="bg-brown-deep py-16 text-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ochre">
            Nuestra carta
          </p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            La carta
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-cream/70">
            Una selección de lo que sale de nuestra cocina. Pregunta también
            por las sugerencias del día.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {Object.entries(menu).map(([section, items]) => (
            <div key={section} className="rounded-xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-cream/20" />
                <h3 className="font-serif text-xl italic text-ochre">{section}</h3>
                <span className="h-px flex-1 bg-cream/20" />
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-[15px] leading-snug text-cream/90"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ochre/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-cream/60">
          Rango de precios: 10–20 € por persona · Opciones vegetarianas disponibles
        </p>
      </div>
    </section>
  );
}

function HoursLocation() {
  return (
    <section id="donde-estamos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Horario y ubicación
          </p>
          <h2 className="font-serif text-3xl leading-tight text-brown-deep sm:text-4xl">
            Ven a vernos
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center gap-2 text-brown-deep">
              <Clock className="h-5 w-5 text-terracotta" />
              <h3 className="font-serif text-xl">Horario</h3>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                {schedule.map(([day, hours]) => (
                  <tr key={day}>
                    <th
                      scope="row"
                      className={`py-2.5 text-left font-medium ${
                        hours === "Cerrado" ? "text-muted-foreground" : "text-brown-deep"
                      }`}
                    >
                      {day}
                    </th>
                    <td
                      className={`py-2.5 text-right tabular-nums ${
                        hours === "Cerrado" ? "italic text-muted-foreground" : "text-brown"
                      }`}
                    >
                      {hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 space-y-3 rounded-lg bg-secondary/60 p-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <div>
                  <p className="font-medium text-brown-deep">
                    Calle Muñoz León, 11
                  </p>
                  <p className="text-muted-foreground">41009 Sevilla · Macarena</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A 100 m del aparcamiento de Calle Macarena.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-terracotta" />
                <a href={PHONE_TEL} className="font-medium text-brown-deep hover:underline">
                  +34 608 58 53 24
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                <MapPin className="h-4 w-4" /> Cómo llegar
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/5"
              >
                <WhatsAppIcon className="h-4 w-4" /> Reservar
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Ubicación Casa Sito Romero en Google Maps"
              src="https://www.google.com/maps?q=Calle%20Mu%C3%B1oz%20Le%C3%B3n%2011%2C%2041009%20Sevilla&output=embed"
              className="h-72 w-full md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const gallery = [flamenquin, cannelloni, goatCheese, anchoas, artichoke, fish];
  return (
    <section id="opiniones" className="bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Lo que dicen
          </p>
          <h2 className="font-serif text-3xl leading-tight text-brown-deep sm:text-4xl">
            Voces del comedor
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-ochre">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 text-sm font-medium text-brown">4,3 · +1.900 reseñas</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5 text-ochre">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 font-serif text-[15px] italic leading-relaxed text-brown-deep">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-terracotta">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {gallery.map((img) => (
            <img
              key={img.url}
              src={img.url}
              alt="Plato de Casa Sito Romero"
              className="aspect-square w-full rounded-md object-cover shadow-sm"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brown-deep py-12 text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-cream">Casa Sito Romero</p>
          <p className="mt-2 text-sm text-cream/60">
            Cocina tradicional andaluza en la Macarena, Sevilla.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-cream">
            <Phone className="h-4 w-4" /> +34 608 58 53 24
          </a>
          <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cream">
            <MapPin className="h-4 w-4" /> Calle Muñoz León, 11 · 41009 Sevilla
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-cream"
          >
            <Instagram className="h-4 w-4" /> @casa_sito_romero
          </a>
        </div>
        <div className="flex md:justify-end">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-fit items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-brown-deep shadow-md transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" /> Reservar por WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/10 px-5 pt-6 text-xs text-cream/50 sm:px-6">
        © {new Date().getFullYear()} Casa Sito Romero · Todos los derechos reservados ·
        Los precios y horarios pueden variar sin previo aviso.
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-brown-deep shadow-lg ring-4 ring-whatsapp/25 transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.83c0 2.08.54 4.11 1.58 5.9L0 24l6.44-1.69a11.83 11.83 0 0 0 5.6 1.43h.01c6.55 0 11.85-5.3 11.85-11.83a11.75 11.75 0 0 0-3.38-8.43ZM12.05 21.3h-.01a9.47 9.47 0 0 1-4.83-1.32l-.35-.21-3.82 1 1.02-3.72-.23-.38a9.44 9.44 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.47-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.21-4.25 9.65-9.26 9.65Zm5.42-7.09c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.11 3.22 5.11 4.51.72.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
