import { OrnamentLine } from "../deco/ornament-line";

export function Reviews() {
  return (
    <section className="space-y-6 p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col items-center gap-8 border p-6 text-center">
        <div>
          <p>
            "I was truly blown away by Ông Bà Eatery, every single dish captured the authentic
            flavours of Vietnam with remarkable precision."
          </p>
          <p className="font-bold italic">Helen Tran</p>
        </div>

        <div>
          <p>
            "This is one of my favourite places to eat when I'm back in Vancouver. Try the deep
            fried enoki mushroom - it's crazy!"
          </p>
          <p className="font-bold italic">Zack Enderson</p>
        </div>

        <div>
          <p>"We happened to pass by a small restaurant simply decorated with patterned tiles."</p>
          <p className="font-bold italic">Chloe Dang</p>
        </div>
      </div>
    </section>
  );
}
