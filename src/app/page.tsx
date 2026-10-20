import { ButtonLink } from "@/components/sections/ButtonLink";
import { CardSection } from "@/components/sections/CardSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageTiles } from "@/components/sections/ImageTiles";
import { IntroSection } from "@/components/sections/IntroSection";
import { OverlayCardSection } from "@/components/sections/OverlayCardSection";
import { ContentStack } from "@/components/sections/ContentStack";
import { SplitSection } from "@/components/sections/SplitSection";
import { NewsletterForm } from "@/components/forms/newsletter/NewsletterForm";
import { getImage } from "@/lib/assets";
import { getHomePage } from "@/lib/content/pages";
import { pageMetadata } from "@/lib/seo";

const home = getHomePage();

export const metadata = pageMetadata(home.metadata);

/** White gap between sections, as on the live page (40–51px). */
function Gap() {
  return <div aria-hidden="true" className="h-10 bg-paper lg:h-[2.6rem]" />;
}

export default function HomePage() {
  const { hero, welcome, weddingTiles, stay, eat, sustainability, newsletter } = home;
  return (
    <>
      <HeroSection title={hero.title} tagline={hero.tagline} image={getImage(hero.image)} mediaClassName="lg:-top-[7.3125rem]" />
      <IntroSection heading={welcome.heading} paragraphs={welcome.paragraphs} image={getImage(welcome.image)} />
      <ImageTiles label="Weddings" tiles={weddingTiles.map((tile) => ({ ...tile, image: getImage(tile.image) }))} />
      <Gap />
      <SplitSection image={getImage(stay.image)} imageSide="left" className="lg:min-h-[40.5625rem]" panelClassName="lg:pr-12 lg:pl-[18.75%]">
        <ContentStack
          heading={stay.heading}
          paragraphs={stay.paragraphs}
          align="left"
          className="mx-auto max-w-[26.75rem] lg:mx-0"
          proseClassName="max-md:text-[1.375rem]"
          actions={<ButtonLink link={stay.cta} />}
        />
      </SplitSection>
      <Gap />
      <OverlayCardSection
        heading={eat.heading}
        paragraphs={eat.paragraphs}
        image={getImage(eat.image)}
        proseClassName="max-md:text-[1.375rem]"
        actions={eat.ctas.map((cta) => (
          <ButtonLink key={cta.href} link={cta} />
        ))}
      />
      <Gap />
      <SplitSection image={getImage(sustainability.image)} imageSide="right" className="lg:min-h-[32.375rem]" panelClassName="lg:items-center lg:px-12">
        <ContentStack
          heading={sustainability.heading}
          paragraphs={sustainability.paragraphs}
          className="mx-auto max-w-[30rem]"
          proseClassName="max-md:text-[1.375rem]"
          actions={<ButtonLink link={sustainability.cta} />}
        />
      </SplitSection>
      <CardSection heading={newsletter.heading} headingId="mailing-list">
        <NewsletterForm />
      </CardSection>
    </>
  );
}
