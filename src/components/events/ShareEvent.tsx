/** "Share This Event" icon links, with the live page's icons. */
export function ShareEvent({ url }: { url: string }) {
  const encoded = encodeURIComponent(url);
  const links = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, icon: facebookIcon },
    { label: "X", href: `https://x.com/intent/post?url=${encoded}`, icon: xIcon },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`, icon: linkedInIcon },
  ];
  return (
    <ul className="flex justify-center gap-[2.25rem] md:gap-[1.875rem]">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener"
            aria-label={`Share event on ${link.label} (opens in a new tab)`}
            className="block h-[1.1875rem] w-[1.4375rem] hover:opacity-60 md:h-4 md:w-[1.1875rem]"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

const iconProps = { fill: "currentColor", className: "size-full", "aria-hidden": true } as const;

const facebookIcon = (
  <svg viewBox="0 0 9 16" {...iconProps}>
    <path
      fillRule="evenodd"
      d="M5.39324257,16 L5.39324257,8.70173788 L7.84309113,8.70173788 L8.20960391,5.85761755 L5.39324257,5.85761755 L5.39324257,4.04152086 C5.39324257,3.21816097 5.62190137,2.65686476 6.80283471,2.65686476 L8.30887758,2.65639427 L8.30887758,0.112447437 C8.04822537,0.077631076 7.15429176,0 6.11450584,0 C3.94271768,0 2.45596495,1.32584468 2.45596495,3.75969653 L2.45596495,5.85761755 L0,5.85761755 L0,8.70173788 L2.45596495,8.70173788 L2.45596495,16 L5.39324257,16 Z"
    />
  </svg>
);

const xIcon = (
  <svg viewBox="0 0 151 142" {...iconProps}>
    <path d="M1.24023 0.800049L59.1504 78.2401L0.870117 141.2H13.9902L65.0098 86.08L106.24 141.2H150.88L89.71 59.4101L143.96 0.810049H130.84L83.8496 51.5801L45.8799 0.810049H1.24023V0.800049ZM20.5303 10.46H41.04L131.59 131.53H111.08L20.5303 10.46Z" />
  </svg>
);

const linkedInIcon = (
  <svg viewBox="0 0 19 16" {...iconProps}>
    <path
      fillRule="evenodd"
      d="M2.30367607,0.025974026 C3.49850532,0.025974026 4.46947897,0.885212121 4.46947897,1.94130736 C4.46947897,2.99987879 3.49850532,3.85911688 2.30367607,3.85911688 C1.10464953,3.85911688 0.13647407,2.99987879 0.13647407,1.94130736 C0.13647407,0.885212121 1.10464953,0.025974026 2.30367607,0.025974026 L2.30367607,0.025974026 Z M0.433082736,15.9491169 L4.17287031,15.9491169 L4.17287031,5.31387879 L0.433082736,5.31387879 L0.433082736,15.9491169 Z M6.51467968,5.31325974 L10.0963692,5.31325974 L10.0963692,6.76554545 L10.1467367,6.76554545 C10.6448154,5.92983117 11.8634294,5.04830736 13.680857,5.04830736 C17.4612184,5.04830736 18.159368,7.25087879 18.159368,10.1158312 L18.159368,15.9484978 L14.427975,15.9484978 L14.427975,10.776974 C14.427975,9.54259307 14.4013922,7.95659307 12.4874268,7.95659307 C10.5426813,7.95659307 10.2460727,9.29992641 10.2460727,10.6865931 L10.2460727,15.9484978 L6.51467968,15.9484978 L6.51467968,5.31325974 Z"
    />
  </svg>
);
