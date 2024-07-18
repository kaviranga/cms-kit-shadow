import type { ISbRichtext } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

import { prepareImageProps, type IImage } from "./adapters/prepareImageProps";
import { BasicImage } from "@shared/ui";

export default function renderRichText(data: ISbRichtext) {
  return render(data, {
    markResolvers: {},
    nodeResolvers: {},
    blokResolvers: {
      image: (props) => {
        return (
          <div
            className="relative mx-auto"
            style={{
              aspectRatio: props.aspectRatio as string,
            }}
          >
            <BasicImage
              {...prepareImageProps({
                ...(props as IImage),
              })}
            />
          </div>
        );
      },
    },
  });
}
