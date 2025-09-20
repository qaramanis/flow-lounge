import SimpleMarquee from "@/components/simple-marquee";

function MarqueeItem({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center">
      <span className="text-5xl lg:text-[6rem] tracking-tight">{text}</span>
      <span className="block w-6 lg:w-8 px-8 lg:px-14 box-content">
        <svg
          width="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EF5021"
            d="M 50,10 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80 Z"
          />
        </svg>
      </span>
    </div>
  );
}

export default function MarqueesSection() {
  return (
    <section className="w-screen flex flex-col relative px-24">
      <div className="w-full h-full flex flex-col gap-4 lg:gap-0">
        <SimpleMarquee
          className="w-full"
          baseVelocity={4}
          repeat={2}
          draggable={false}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="left"
        >
          <MarqueeItem text="Hookah" />
          <MarqueeItem text="Cocktails" />
          <MarqueeItem text="Beers" />
          <MarqueeItem text="Spirits" />
        </SimpleMarquee>
        <SimpleMarquee
          className="w-full"
          baseVelocity={4}
          repeat={2}
          draggable={false}
          scrollAwareDirection={true}
          useScrollVelocity={true}
          direction="right"
        >
          <MarqueeItem text="Tea" />
          <MarqueeItem text="Soft Drinks" />
          <MarqueeItem text="Juices" />
          <MarqueeItem text="Wines" />
        </SimpleMarquee>
      </div>
    </section>
  );
}
