"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col px-6">
      <div className="flex flex-col sm:flex-row py-16">
        <div className="flex flex-col w-full sm:w-1/2 gap-6">
          <h1 className="sm:text-6xl text-[32px] font-light text-[#00adee] pb-6">
            Advokatfirman EdmarLaw
          </h1>
          <p className="sm:text-base text-[18px] font-semibold">
            Advokatfirman EdmarLaw har mer än 25 års erfarenhet av att granska,
            upprätta och förhandla de flesta typer av avtal som förekommer på
            IT-området. {" "}
          </p>
          <p>
            Bland annat har EdmarLaw omfattande erfarenhet av
            personuppgiftshantering, att upprätta utvecklingsavtal, kundavtal,
            allmänna villkor, genomföra dataskyddsanalyser och ta helhetsgrepp
            på personuppgiftshanteringen, avtala om utveckling och
            implementering av IT-system, liksom alla aspekter av onlinetjänster,
            molntjänster (PaaS, SaaS) och e-handel, licensiering av mjukvara,
            licensiering av AI-tjänster, know-how och patent.
          </p>
        </div>
        <div className="sm:w-1/2 flex justify-end py-10 sm:py-0">
          <Image
            className="object-contain h-[500px]"
            src={"/a4045cf875daea70061093bcdaf907c9.jpeg"}
            alt="Bild på Malin Edmar"
            width={400}
            height={600}
          ></Image>
        </div>
      </div>
      <div className="bg-[#F5F5F5] relative flex flex-col items-center">
        <div className="absolute h-full bg-[#F5F5F5] !max-w-none !w-screen"></div>
        <div className="z-10 relative pt-20">
          <h1 className="text-3xl pb-12">Malin Edmar Advokat och grundare</h1>
          <div className="flex flex-col sm:flex-row gap-x-14">
            <div className="flex flex-col sm:pb-0 pb-14">
              <p>
                Malin Edmar har arbetat med avtalsfrågor samt IT-rättsliga och
                immaterialrättsliga frågor sedan 1996. Hon driver ofta stora och
                komplicerade förhandlingar inom olika områden, inte sällan
                förlikningsförhandlingar i samband med uppgörelser. Malin
                upprättar och förhandlar ofta olika typer av avtal inom
                IT-branschen eller avtal som rör immaterialrättsliga
                frågor.Malin har bl.a. arbetat som jurist på Microsofts
                huvudkontor i USA under fyra år och då biträtt vid
                produktutveckling, produktlansering och lansering av
                onlinetjänster. Hon har även arbetat på GitHub, Inc. i flera år
                som Senior Commercial Counsel, med fokus på att upprätta och
                förhandla kommersiellt gångbara, lättfattliga villkor för till
                exempel PaaS, supporttjänster och samarbeten, och som Senior
                Product Counsel, med fokus på att utveckling inom AI,
                säkerhetstjänster, PaaS och utvecklingssamarbeten.
              </p>
              <br />
              <p>
                Malin har också skrivit fyra böcker, bland annat boken
                Internetpublicering och sociala medier som hittills har getts ut
                i sju upplagor (Norstedts Juridik, 2021), och var med i
                IT-kommissionens IT-rättsliga observatorium under flera år, där
                hon fick möjlighet att påverka ny lagstiftning inom
                personuppgiftshantering, telekommunikation, sociala medier och
                e-handel. När Malin upprättar avtal, förhandlar eller skriver
                böcker så har hon alltid tekniken i fokus, och ser till att
                förstå den först innan hon tillämpar juridiken. Dessutom brinner
                Malin för att göra juridiken begriplig – man ska inte behöva
                anlita jurister för att förstå vad man har kommit överens om.
                Det är förmodligen därför hennes böcker är så populära, och
                används som kurslitteratur vid flera universitet i Sverige.
              </p>
            </div>
            <div className="bg-white rounded sm:pl-4 sm:p-16 sm:pr-32 p-4 h-fit flex flex-col gap-y-2">
              <h3 className="text-2xl">Malin Edmar</h3>
              <Link className="underline" href="mailto:malin@edmarlaw.se">
                malin@edmarlaw.se
              </Link>
              <Link href="tel:+46707111111">+46 707 111 11 11</Link>
            </div>
          </div>
          <div>
            <div className="sm:pt-36 pt-14">
              <h4 className="text-3xl">Erfarenhet</h4>
              <div className="flex flex-col gap-y-4 pt-8">
                <TableRow company={"GitHub, Inc"} year={"2021-2023"} />
                <TableRow company={"Advokatfirman EdmarLaw"} year={"2016 - "} />
                <TableRow company={"Advokatfirman Fylgia"} year={"2009-2015"} />
                <TableRow
                  company={"Advokatfirman Westermark Anjou"}
                  year={"2007-2008"}
                />
                <TableRow
                  company={"Microsoft Corporation, Redmond, WA"}
                  year={"2003-2006"}
                />
                <TableRow company={"Advokatfirman Delphi"} year={"1999-2002"} />
                <TableRow
                  company={"Kungliga Ingenjörsvetenskapsakademien (IVA)"}
                  year={"1997 - 1999"}
                />
                <TableRow
                  company={
                    "IT-kommittén Kulturnät Sverige, Kulturdepartementet"
                  }
                  year={"1996"}
                />
                <TableRow
                  company={"Åklagarmyndigheten i Varberg"}
                  year={"1996"}
                />
              </div>
            </div>
            <div className="sm:pt-36 pt-14">
              <h4 className="text-3xl">Publikationer</h4>
              <div className="flex flex-col gap-y-4 pt-8">
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={"Författare till boken"}
                    year={"Norstedts Juridik, 7 uppl., 2021"}
                  />
                  <div className="sm:flex gap-x-2 underline hidden font-semibold">
                    <Link href={"Internetpublicering och sociala medier"}>
                      Internetpublicering och sociala medier
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={"Edmar, Malin;"}
                    year={"Norstedts Juridik, 2015"}
                  />
                  <div className="sm:flex gap-x-2 underline hidden font-semibold">
                    <Link href={"Internetpublicering och sociala medier"}>
                      Internetpublicering och sociala medier
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={"Medförfattare till boken"}
                    year={"Norstedts Juridik, 2014"}
                  />
                  <div className="sm:flex gap-x-2 underline hidden font-semibold">
                    <Link href={"Internetpublicering och sociala medier"}>
                      Internetpublicering och sociala medier
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <TableRow
                    link={true}
                    company={"Redaktör och medförfattare till boken"}
                    year={"Jure, 2012"}
                  />
                  <div className="sm:flex gap-x-2 underline hidden font-semibold">
                    <Link href={"Internetpublicering och sociala medier"}>
                      Internetpublicering och sociala medier
                    </Link>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
                        fill="#1D1D1D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Hero isEdmr={true} logoImg={"logo"} /> */}
      {/* <About /> */}
      {/* <MalinEdmar /> */}
      {/* <Associations /> */}
      {/* <AreaOFExpertise size={"sm"} /> */}
    </main>
  );
};

function TableRow({ company, year, link }) {
  return (
    <div className="flex gap-x-8 flex-col sm:flex-row sm:gap-y-2">
      <div className="sm:w-1/2 w-full font-semibold">{company}</div>
      {link && (
        <div className="flex gap-x-2 underline sm:hidden font-semibold">
          <Link href={"Internetpublicering och sociala medier"}>
            Internetpublicering och sociala medier
          </Link>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6875 1.59375C10.6875 1.13672 11.0391 0.75 11.5312 0.75H17.1211C17.6133 0.75 17.9648 1.13672 17.9648 1.59375V7.21875C17.9648 7.71094 17.6133 8.0625 17.1211 8.0625C16.6641 8.0625 16.2773 7.71094 16.2773 7.21875V3.63281L8.4375 11.4727C8.12109 11.8242 7.59375 11.8242 7.27734 11.4727C6.92578 11.1562 6.92578 10.6289 7.27734 10.2773L15.1172 2.4375H11.5312C11.0391 2.4375 10.6875 2.08594 10.6875 1.59375ZM2.53125 1.875H7.03125C7.48828 1.875 7.875 2.26172 7.875 2.71875C7.875 3.21094 7.48828 3.5625 7.03125 3.5625H2.53125C2.03906 3.5625 1.6875 3.94922 1.6875 4.40625V16.2188C1.6875 16.7109 2.03906 17.0625 2.53125 17.0625H14.3438C14.8008 17.0625 15.1875 16.7109 15.1875 16.2188V11.7188C15.1875 11.2617 15.5391 10.875 16.0312 10.875C16.4883 10.875 16.875 11.2617 16.875 11.7188V16.2188C16.875 17.625 15.7148 18.75 14.3438 18.75H2.53125C1.125 18.75 0 17.625 0 16.2188V4.40625C0 3.03516 1.125 1.875 2.53125 1.875Z"
              fill="#1D1D1D"
            />
          </svg>
        </div>
      )}
      <div className="sm:w-1/2 w-full font-light italic">{year}</div>
    </div>
  );
}

export default page;
