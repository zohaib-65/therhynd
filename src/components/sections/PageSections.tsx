import type { CSSProperties } from "react";

import { Banner } from "@/components/media/Banner";
import { ImageCarousel } from "@/components/media/ImageCarousel";
import { ImageGallery } from "@/components/media/ImageGallery";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { BookingPanel } from "@/components/sections/BookingPanel";
import { ButtonLink } from "@/components/sections/ButtonLink";
import { ContentStack } from "@/components/sections/ContentStack";
import { EventGrid } from "@/components/sections/EventGrid";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ImageBand } from "@/components/sections/ImageBand";
import { InfoTable } from "@/components/sections/InfoTable";
import { LogoRow } from "@/components/sections/LogoRow";
import { OverlayCardSection } from "@/components/sections/OverlayCardSection";
import { Prose } from "@/components/sections/Prose";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SplitSection } from "@/components/sections/SplitSection";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { TextSection } from "@/components/sections/TextSection";
import { BrochureForm } from "@/components/forms/brochure/BrochureForm";
import { NewsCard } from "@/components/news/NewsCard";
import { TableEnquiryForm } from "@/components/forms/table-enquiry/TableEnquiryForm";
import { ViewingForm } from "@/components/forms/viewing/ViewingForm";
import { WeddingEnquiryForm } from "@/components/forms/wedding-enquiry/WeddingEnquiryForm";
import { getImage } from "@/lib/assets";
import { getPost } from "@/lib/news";
import type { Link } from "@/lib/content/schema";
import type { Section } from "@/lib/content/sections";

const renderActions = (actions?: Link[]) =>
  actions?.length ? actions.map((action) => <ButtonLink key={`${action.label}-${action.href}`} link={action} />) : undefined;

/** Desktop height from content (px), applied from 1024px up. */
const desktopHeight = (px?: number) => (px ? ({ "--desktop-h": `${px / 16}rem` } as CSSProperties) : undefined);

/**
 * Renders a content page's sections in order. Server Component: images are
 * resolved from the manifest here; only galleries, carousels and forms
 * hydrate in the browser.
 */
export function PageSections({ sections }: { sections: Section[] }) {
  return sections.map((section, index) => {
    const key = `${section.type}-${index}`;
    switch (section.type) {
      case "intro":
        return (
          <TextSection
            key={key}
            heading={{ text: section.heading }}
            headingAs="h1"
            paragraphs={section.paragraphs}
            actions={renderActions(section.actions)}
            actionsPosition={section.actionsPosition}
            width={section.width}
            className="pt-10 lg:pt-12"
          />
        );
      case "text":
        return (
          <TextSection
            key={key}
            heading={section.heading}
            headingSize={section.headingSize}
            paragraphs={section.paragraphs}
            actions={renderActions(section.actions)}
            width={section.width}
          />
        );
      case "imageBand":
        return <ImageBand key={key} image={getImage(section.image)} heading={section.heading} paragraphs={section.paragraphs} />;
      case "banner":
        return (
          <div key={key} style={desktopHeight(section.height)}>
            <Banner
              image={getImage(section.image)}
              video={section.video ? { src: section.video.src, poster: getImage(section.video.poster) } : undefined}
              width={section.width}
              preload={index === 0}
              className="h-[clamp(13rem,45vw,22rem)] lg:h-(--desktop-h)"
            />
          </div>
        );
      case "split":
        return (
          <SplitSection
            key={key}
            image={getImage(section.image)}
            imageSide={section.imageSide}
            tone={section.tone}
            bordered={section.bordered}
            className="lg:min-h-(--desktop-h)"
            panelClassName="lg:px-[8.1%]"
            style={desktopHeight(section.height)}
          >
            <ContentStack
              heading={section.heading}
              headingSize={section.headingSize ?? "sm"}
              paragraphs={section.paragraphs}
              actions={renderActions(section.actions)}
              actionsPosition={section.actionsPosition}
              className="mx-auto w-full max-w-[31rem]"
              proseClassName="mx-auto max-w-[24.5rem]"
            />
          </SplitSection>
        );
      case "overlayCard":
        return (
          <div key={key} style={{ ...desktopHeight(section.height), ...(section.cardWidth ? { "--card-w": `${section.cardWidth / 16}rem` } : {}) } as CSSProperties}>
            <OverlayCardSection
              image={getImage(section.image)}
              heading={section.heading}
              paragraphs={section.paragraphs}
              actions={renderActions(section.actions)}
              cardTone={section.cardTone}
              cardClassName={section.cardWidth ? "max-w-(--card-w) lg:px-[2.875rem]" : undefined}
              className="flex flex-col justify-center lg:min-h-(--desktop-h)"
            />
          </div>
        );
      case "features":
        return (
          <FeatureGrid
            key={key}
            label={section.label}
            layout={section.layout}
            columns={section.columns}
            panel={section.panel}
            imageAspect={section.imageAspect}
            cardTone={section.cardTone}
            align={section.align}
            items={section.items.map((item) => ({
              image: getImage(item.image),
              title: item.title,
              subtitle: item.subtitle,
              paragraphs: item.paragraphs,
              href: item.href,
              action: item.action ? <ButtonLink link={item.action} /> : undefined,
            }))}
          />
        );
      case "gallery":
        return (
          <ImageGallery
            key={key}
            label={section.label}
            canvas={section.canvas}
            items={section.items.map((item) => ({ image: getImage(item.image), box: item.box }))}
          />
        );
      case "carousel":
        return <ImageCarousel key={key} label={section.label} images={section.images.map((id) => getImage(id))} />;
      case "infoTable":
        return (
          <InfoTable key={key} heading={section.heading} rows={section.rows} variant={section.variant} action={section.action ? <ButtonLink link={section.action} /> : undefined} />
        );
      case "logos":
        return <LogoRow key={key} label={section.label} logos={section.logos.map((id) => getImage(id))} />;
      case "video":
        return <VideoPlayer key={key} title={section.title} video={{ src: section.video.src, poster: getImage(section.video.poster) }} />;
      case "events":
        return <EventGrid key={key} label={section.label} events={section.events.map((event) => ({ ...event, image: getImage(event.image) }))} />;
      case "testimonials":
        return (
          <TestimonialCarousel
            key={key}
            label={section.label}
            heading={section.heading}
            photoSide={section.photoSide}
            testimonials={section.items.map((item) => ({ ...item, image: getImage(item.image) }))}
          />
        );
      case "form":
        return (
          <section key={key} id={section.id} className="px-5 py-10 lg:py-12">
            <div className="mx-auto max-w-[45rem]">
              {section.heading && (
                <SectionHeading heading={section.heading} as={section.headingAs ?? "h2"} size={section.headingSize ?? "lg"} className="text-center" />
              )}
              {section.paragraphs && <Prose paragraphs={section.paragraphs} className="mx-auto mt-6 max-w-[42rem] text-center" />}
              <div className="mt-8">
                {section.form === "brochure" && <BrochureForm source={section.source ?? "Download our brochure"} />}
                {section.form === "viewing" && <ViewingForm />}
                {section.form === "weddingEnquiry" && <WeddingEnquiryForm />}
                {section.form === "tableEnquiry" && <TableEnquiryForm />}
              </div>
              {section.note && <Prose paragraphs={section.note} className="mt-8 text-center text-base" />}
              {section.actions && <div className="mt-8 flex flex-col items-center gap-6">{renderActions(section.actions)}</div>}
            </div>
          </section>
        );
      case "relatedPosts": {
        const posts = section.slugs.map((slug) => {
          const post = getPost(slug);
          if (!post) throw new Error(`relatedPosts: no article "${slug}" in src/content/blog.ts`);
          return post;
        });
        return (
          <section key={key} aria-label="Related news" className="px-5 py-10">
            <ul className="mx-auto grid max-w-[58.75rem] gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <NewsCard post={post} />
                </li>
              ))}
            </ul>
          </section>
        );
      }
      case "booking":
        return (
          <BookingPanel
            key={key}
            id={section.id}
            heading={section.heading}
            paragraphs={section.paragraphs}
            href={section.href}
            label={section.label}
            provider={section.provider}
          />
        );
    }
  });
}
