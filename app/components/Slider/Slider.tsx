import * as React from "react";
import { CarouselViewport, Steering, Button } from "./partials";

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The width of the carousel default to `100%`
   */
  width?: string;
  /**
   * The height of the carousel default to `320px`
   */
  height?: string;

  /**
   * The space between(aka gutter or gap) each slides and
   * it should be in any we unit (px, %, em, rem, ...)
   * default to `24px`
   */
  gap?: string;
}

export const Slider = ({
  children,
  width = "100%",
  height = "384px",
  gap = "24px",
  ...rest
}: SliderProps): React.ReactElement => {
  const [position, setPosition] = React.useState({ x: 0 });
  const [isBoundary, setIsBoundary] = React.useState(0);
  const carouselContentRef = React.useRef<HTMLDivElement>(null);
  const scrollAmount = React.useRef(0);
  const init = React.useRef(false);
  const observer = React.useRef<IntersectionObserver | null>(null);

  function observeBoundary(): void {
    const options = {
      root: carouselContentRef.current,
      threshold: 0.9,
    };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsBoundary(Number(entry.target.getAttribute("data-slide")));
        } else {
          setIsBoundary(-1);
        }
      });
    }, options);
    // observe the first child
    observer.current.observe(
      carouselContentRef.current?.children[0] as Element
    );
    // observe the last child
    observer.current.observe(
      carouselContentRef.current?.children[
        carouselContentRef.current?.children.length - 1
      ] as Element
    );
  }

  React.useEffect(() => {
    console.log(position);
    if (!init.current) {
      scrollAmount.current =
        (carouselContentRef.current?.clientWidth as number) * 0.8;
      const items = [].slice.call(
        carouselContentRef.current?.children
      ) as Element[];
      items.forEach((item, index) => {
        item.setAttribute("data-slide", index.toString());
      });
      observeBoundary();
      init.current = true;
      return;
    }

    observeBoundary();

    carouselContentRef.current?.scrollBy({
      behavior: "smooth",
      left: position.x,
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [position]);

  const shift = (e: React.MouseEvent<HTMLElement>): void => {
    e.persist();
    console.log(e.currentTarget.dataset.direction);
    setPosition({
      x:
        e.currentTarget.dataset.direction === "prev"
          ? -scrollAmount.current
          : scrollAmount.current,
    });
  };

  return (
    <CarouselViewport width={width} height={height} gap={gap} {...rest}>
      <div
        tabIndex={0}
        style={{ gap }}
        ref={carouselContentRef}
        className="flex overflow-scroll scroll-smooth snap-x snap-mandatory children:flex-none children:snap-start max-w-max"
      >
        {children}
      </div>
      <Steering>
        <Button
          onClick={shift}
          aria-label="previous"
          data-direction="prev"
          disabled={isBoundary === 0}
          direction="left"
        />
        <Button
          onClick={shift}
          aria-label="next"
          data-direction="next"
          // disabled={isBoundary > 0}
          direction="right"
        />
      </Steering>
    </CarouselViewport>
  );
};
