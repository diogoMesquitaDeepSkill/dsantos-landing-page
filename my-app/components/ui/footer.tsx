/* eslint-disable @next/next/no-img-element */
// const sections = [
//   {
//     title: "Product",
//     links: [{ name: "Overview", href: "#" }],
//   },
//   {
//     title: "Finishes",
//     links: [{ name: "About", href: "#" }],
//   },
//   {
//     title: "Resources",
//     links: [{ name: "Help", href: "#" }],
//   },
// ];

const Footer = () => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <img
                src="/logo-onlydsantos250.png"
                alt="logo"
                className="mb-4 h-7"
              />
              <p className="font-bold">Components made easy.</p>
            </div>
            {/* {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))} */}
          </div>
          <div className="mt-1 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>© 2024 DSantos. All rights reserved.</p>
            {/* <ul className="flex gap-4">
              <li className="underline hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="underline hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul> */}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
