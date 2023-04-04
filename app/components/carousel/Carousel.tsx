import React from "react";
import { ChevronLeft, ChevronRight } from "~/components/icons";
import {
  Button,
  CarouselWrapper,
  Navigation,
  ScrollIndicator,
  Slider,
  Viewport,
} from "./partials";

export interface CarouselProps extends React.AllHTMLAttributes<HTMLDivElement> {
  /**
   * The classname -- this is mostly used to hook GA event tracking
   */
  className?: string;
  /**
   * The height of the carousel
   * - `'small'` = 96px
   * - `'medium'` = 384px
   * - `'large'` = 480px
   */
  height?: "small" | "medium" | "large";
  /**
   * The items to display in the carousel
   */
  children: React.ReactNode;
}

export function Carousel({
  className = "js_Caorousel",
  height = "medium",
  children,
}: CarouselProps) {
  const [index, setIndex] = React.useState(0);

  const viewportWidth = React.useRef(0);
  const slider = React.useRef<HTMLDivElement>(null);
  const firstRender = React.useRef(true);
  const scenes = React.useRef([0]);
  const sliderGutter = 32;

  const size = {
    small: "264px",
    medium: "320px",
    large: "480px",
  };

  /**
   * Scrollbar Setup
   ****************************/
  const scrollBar = React.useRef<HTMLDivElement>(null);
  const scrollBarWidth = React.useRef(0);

  const handleNavigation = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.dataset.direction === "next") {
      setIndex(index + 1);
      return;
    }
    setIndex(index - 1);
  };

  const scrollByIndex = React.useCallback(() => {
    let carouselposX = 0;
    let scrollBarPosX = 0;

    if (index === scenes.current.length - 1) {
      carouselposX = slider.current!.clientWidth - viewportWidth.current;
      scrollBarPosX = viewportWidth.current - scrollBarWidth.current;
    } else {
      carouselposX = scenes.current[index];
      scrollBarPosX = scrollBarWidth.current * index;
    }
    console.log(carouselposX, scenes.current[index], scrollBarWidth.current);
    slider.current!.style.left = `${carouselposX * -1}px`;
    scrollBar.current!.style.left = `${scrollBarPosX}px`;
  }, [index]);

  React.useEffect(() => {
    function initializeCarousel() {
      viewportWidth.current = slider.current!.parentElement!.clientWidth;
      scenes.current = [0];
      firstRender.current = false;
      // if carouselCluster is out of range due to a resize, reset the activeIndex
      if (scenes.current[index] === undefined) {
        setIndex(0);
      }

      let scrollSize = 0;
      let sliderWidth = 0;
      for (let i = 0; i < slider.current!.children.length; i++) {
        sliderWidth += slider.current!.children[i].clientWidth + sliderGutter;
        if (
          viewportWidth.current - scrollSize <
          slider.current!.children[i].clientWidth + sliderGutter
        ) {
          scenes.current.push(
            (slider.current!.children[i] as HTMLDivElement).offsetLeft
          );
          scrollSize = 0;
        }
        scrollSize += slider.current!.children[i].clientWidth + sliderGutter;
      }
      scrollBarWidth.current = viewportWidth.current / scenes.current.length;

      scrollBar.current!.style.width = `${scrollBarWidth.current}px`;
      slider.current!.style.width = `${sliderWidth}px`;
    }
    window.addEventListener("resize", initializeCarousel);
    if (firstRender.current === true) {
      initializeCarousel();
      return;
    }
    console.log("scenes", scenes.current);

    scrollByIndex();
    return () => {
      window.removeEventListener("resize", initializeCarousel);
    };
  }, [index, scrollByIndex]);

  return (
    <CarouselWrapper>
      <Viewport style={{ height: size[height] }} className={className}>
        <Slider className="js_Slider gap-4" ref={slider}>
          {children}
        </Slider>
      </Viewport>
      <Navigation>
        <ScrollIndicator ref={scrollBar} />
        <Button
          aria-label="Previous"
          title="Previous"
          className="btn btn-circle w-12 left-[calc(100%_-_112px)] disabled:bg-dark-800/60"
          data-direction="prev"
          onClick={handleNavigation}
          disabled={index === 0 ? true : false}
        >
          <ChevronLeft aria-hidden="true" />
        </Button>
        <Button
          aria-label="Next"
          title="Next"
          className="btn btn-circle w-12 right-0 disabled:bg-dark-800/60"
          data-direction="next"
          onClick={handleNavigation}
          disabled={
            index !== 0 && index >= scenes.current.length - 1 ? true : false
          }
        >
          <ChevronRight aria-hidden="true" />
        </Button>
      </Navigation>
    </CarouselWrapper>
  );
}
