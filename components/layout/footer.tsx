export function Footer() {
  return (
    <footer className="flex flex-col gap-4 p-4">
      <section className="flex flex-col border p-4">
        <h1 className="self-center font-bold uppercase">Find Us</h1>

        <div>
          <p className="uppercase">Open 7 days a week</p>
          <p>Sun - Thu: 11:00 AM to 9:00 PM</p>
          <p>Last call: 8:45 PM</p>
          <p>Fri & Sat: 11:00 AM to 10:00 PM</p>
          <p>Last call: 9:45 PM</p>
        </div>

        <div>
          <p>Downtown</p>
          <p>976 Denman St, Vancouver, BC V6G 2M1</p>
          <p>Phone: (+1) 604-620-5595</p>

          <p>Coquitlam</p>
          <p>976 Denman St, Vancouver, BC V6G 2M1</p>
          <p>Phone: (+1) 604-620-5595</p>
        </div>

        <div>
          <p>Email: ongbavietnamese@gmail.com</p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <p>Crafted from the freshest ingredients and rooted in family values to feed the soul</p>
        <p>
          Copyright &copy; {new Date().getFullYear()}, Ông Bà Vietnamese Eatery. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
}
