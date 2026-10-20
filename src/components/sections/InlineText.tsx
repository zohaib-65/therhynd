import { Lexer, type Token, type Tokens } from "marked";
import { Fragment, type ReactNode } from "react";

import { SmartLink } from "@/components/sections/SmartLink";

type InlineTextProps = {
  /** Inline Markdown: **bold**, *italic*, [label](href), line breaks. */
  text: string;
  linkClassName?: string;
};

/**
 * Renders a line of inline Markdown from content files as React elements, so
 * links go through SmartLink (next/link for internal pages). No raw HTML is
 * rendered.
 */
export function InlineText({ text, linkClassName = DEFAULT_LINK_CLASS }: InlineTextProps) {
  return <>{renderTokens(Lexer.lexInline(text), linkClassName)}</>;
}

const DEFAULT_LINK_CLASS = "underline underline-offset-2 hover:text-forest";

function renderTokens(tokens: Token[], linkClassName: string): ReactNode[] {
  return tokens.map((token, index) => <Fragment key={index}>{renderToken(token, linkClassName)}</Fragment>);
}

function renderToken(token: Token, linkClassName: string): ReactNode {
  switch (token.type) {
    case "strong":
      return <strong className="font-medium">{renderTokens((token as Tokens.Strong).tokens, linkClassName)}</strong>;
    case "em":
      return <em>{renderTokens((token as Tokens.Em).tokens, linkClassName)}</em>;
    case "link": {
      const link = token as Tokens.Link;
      return (
        <SmartLink href={link.href} className={linkClassName}>
          {renderTokens(link.tokens, linkClassName)}
        </SmartLink>
      );
    }
    case "br":
      return <br />;
    case "escape":
      return (token as Tokens.Escape).text;
    case "codespan":
      return (token as Tokens.Codespan).text;
    case "text": {
      const text = token as Tokens.Text;
      return text.tokens ? renderTokens(text.tokens, linkClassName) : decodeEntities(text.text);
    }
    case "image":
      // Images are block content (ArticleBody figures); never print their Markdown.
      return null;
    default:
      return "raw" in token ? decodeEntities(String(token.raw)) : null;
  }
}

/** marked leaves HTML entities from the source as text; decode the common ones. */
function decodeEntities(value: string): string {
  return value.replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}
