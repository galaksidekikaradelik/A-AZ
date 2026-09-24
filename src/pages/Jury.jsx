import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useLanguage } from "../context/LanguageContext";

function Jury() {
  const { t } = useLanguage();

  const groups = [
    {
      key: "international",
      ...t.jury.international,
    },
    {
      key: "local",
      ...t.jury.local,
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        <section className="page-header">
          <div className="section-container">
            <span className="section-label">
              {t.jury.label}
            </span>

            <h1>{t.jury.title}</h1>
          </div>
        </section>

        {groups.map((group) => (
          <section className="team-section" key={group.key}>
            <div className="section-container">
              <h2 className="team-group-title">
                {group.title}
              </h2>

              <div className="team-grid">
                {group.members.map((member, i) => (
                  <div className="team-card" key={i}>
                    <div
                      className="team-card-photo"
                      aria-hidden="true"
                    />

                    <h3>{member.name}</h3>

                    <span>{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}

export default Jury;