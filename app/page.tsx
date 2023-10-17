export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-zinc-100 dark:bg-zinc-900 flex items-center justify-between px-4 lg:px-14 py-6">
        <h1>
          <a target="_blank" href="https://twitter.com/ademilter">
            Curated by @ademilter
          </a>
        </h1>

        <a
          className="underline text-blue-500"
          target="_blank"
          href="https://airtable.com/app7ZuB47ASMoCSHY/shrW5pQXlChBeJ4ik"
        >
          Submit for review
        </a>
      </header>
      <iframe
        className="border-0 w-full h-screen"
        allowFullScreen
        src="https://raindrop.io/ademilter/prompt-share-38467538/embed/sort=-created&theme=auto&hide=header%2C+excerpt%2C+note"
      />
    </main>
  );
}
