import Image from "next/image";
import { client } from "../lib/clients";
const categories = ["New arrivals", "Home", "Clothing", "Travel", "Office"];

export default async function Home() {
  const res = await client.GET("/");
  console.log(res.data?.products);
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="text-lg font-semibold tracking-tight" href="#">
            Northline
          </a>
          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a className="hover:text-zinc-950" href="#shop">
              Shop
            </a>
            <a className="hover:text-zinc-950" href="#categories">
              Categories
            </a>
            <a className="hover:text-zinc-950" href="#support">
              Support
            </a>
          </div>
          <a
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium hover:border-zinc-950"
            href="#cart">
            Cart 2
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_0.85fr] md:items-center md:py-14">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">
            Summer edit
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Well-made goods for everyday routines.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 md:text-lg">
            Shop durable home, travel, and wardrobe essentials with clean
            materials, fair pricing, and no loud gimmicks.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              href="#shop">
              Shop products
            </a>
            <a
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold hover:border-zinc-950"
              href="#categories">
              Browse categories
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
          {/* <Image
            alt="Neutral clothing and home goods arranged on a table"
            className="aspect-[4/3] w-full object-cover"
            height={900}
            priority
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
            width={1200}
          /> */}
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-sm font-semibold">Curated starter set</p>
              <p className="text-sm text-zinc-600">4 pieces from $168</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
              Ships free
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white" id="categories">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-5">
          <span className="mr-2 text-sm font-medium text-zinc-500">
            Shop by:
          </span>
          {categories.map((category) => (
            <a
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium hover:border-zinc-950"
              href="#shop"
              key={category}>
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12" id="shop">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Popular right now
            </h2>
          </div>
          <a className="text-sm font-semibold text-emerald-800" href="#">
            View all products
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {res.data?.products.map((product) => (
            <article
              className="overflow-hidden rounded-lg border border-zinc-200 bg-white"
              key={product.title}>
              <div className="relative">
                <Image
                  src={product.images?.[0] ?? ""}
                  alt={product.description ?? "product.title"}
                  className="aspect-[4/5] w-full object-cover"
                  height={900}
                  width={720}
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm">
                  {product.description}
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-zinc-500">{product.category}</p>
                <h3 className="mt-1 min-h-12 text-base font-semibold leading-6">
                  {product.title}
                </h3>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-semibold">{product.price}</span>
                  <button className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800">
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-12" id="cart">
        <div className="grid gap-5 rounded-lg border border-zinc-200 bg-white p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              Simple checkout
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Free shipping over $75 and easy 30-day returns.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold hover:border-zinc-950"
              href="#support">
              Ask a question
            </a>
            <a
              className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              href="#">
              Checkout
            </a>
          </div>
        </div>
      </section>

      <footer
        className="border-t border-zinc-200 bg-zinc-950 text-white"
        id="support">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Northline</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Everyday essentials selected for quality, comfort, and practical
              use.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Support</p>
            <p className="mt-2 text-sm text-zinc-300">hello@northline.shop</p>
            <p className="mt-1 text-sm text-zinc-300">Mon-Fri, 9am-5pm</p>
          </div>
          <form className="flex flex-col gap-3">
            <label className="text-sm font-semibold" htmlFor="email">
              Get restock notes
            </label>
            <div className="flex gap-2">
              <input
                className="min-w-0 flex-1 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-emerald-400"
                id="email"
                placeholder="Email address"
                type="email"
              />
              <button className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-950">
                Join
              </button>
            </div>
          </form>
        </div>
      </footer>
    </main>
  );
}
