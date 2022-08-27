import footerData from '../data/footerData'

function Footer() {
  const now = new Date()
  const currentYear = now.getFullYear()

  return (
    <footer className="bg-stack-100 px-8 pt-16">
      <div className="flex flex-col md:flex-row container mx-auto max-w-5xl">
        {footerData.map((f) => (
          <div key={f.name} className="flex-full md:basis-4/12 pb-4">
            <h3 className="pb-6 text-lg text-stack-800 underline decoration-4 underline-offset-4 decoration-stack-400">
              {f.name}
            </h3>
            <div className="text-base font-serif">
              {f.contents && f.contents.length > 0 && (
                <>
                  {f.contents?.map((c) => (
                    <>
                      <span key={c}>{c}</span>
                      <br />
                    </>
                  ))}
                </>
              )}
              {f.links && f.links.length > 0 && (
                <ul>
                  {f.links.map((l) => (
                    <li key={l.name}>
                      <a
                        className="text-stack-500 hover:text-stack-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={l.link}
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="container max-w-5xl mx-auto py-4 font-serif text-sm text-center">
        <span>&copy; {currentYear} Hai Thư</span>
      </div>
    </footer>
  )
}

export default Footer
