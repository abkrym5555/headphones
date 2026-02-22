import { UpdateFollower } from "react-mouse-follower";

function BannerText() {
  return (
    <section className="font-varela py-12 text-center">
      <div className="container">
        <div className="from- from-primary to-primary/70 rounded-3xl bg-linear-to-t p-8 text-white duration-500 hover:scale-105 hover:shadow-2xl">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "black",
              zIndex: 999,
              followSpeed: 0.5,
              scale: 10,
              mixBlendMode: "screen",
            }}
          >
            <p className="max-w-175 text-4xl leading-normal font-bold">
              Headphones With Good Quality And Affordable Price
            </p>
          </UpdateFollower>
        </div>
      </div>
    </section>
  );
}

export default BannerText;
