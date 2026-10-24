import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export const useSEO = ({ title, description }: SEOProps): void => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    let isDescriptionCreated = false;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
      isDescriptionCreated = true;
    }

    const previousDescription = metaDescription.getAttribute("content") || "";
    metaDescription.setAttribute("content", description);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let isOgTitleCreated = false;

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
      isOgTitleCreated = true;
    }
    ogTitle.setAttribute("content", title);

    // OpenGraph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    let isOgDescCreated = false;

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
      isOgDescCreated = true;
    }
    ogDescription.setAttribute("content", description);

    return () => {
      document.title = previousTitle;

      if (metaDescription) {
        if (isDescriptionCreated) {
          metaDescription.remove();
        } else {
          metaDescription.setAttribute("content", previousDescription);
        }
      }

      if (ogTitle && isOgTitleCreated) {
        ogTitle.remove();
      }

      if (ogDescription && isOgDescCreated) {
        ogDescription.remove();
      }
    };
  }, [title, description]);
};

export default useSEO;
