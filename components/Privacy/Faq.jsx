"use client";
import React, { useState } from "react";
import "./Faq.css";
import { useTranslations } from "next-intl";
import { ExpandCardTerms } from "../Terms/Faq";

let defaultExpanded = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
const Faq = () => {
  const [expandedBullets, setExpanedBullets] = useState([...defaultExpanded]);
  const t = useTranslations("Privacy");

  const setExpanded = (i) => {
    let modifiedExpanded = [...defaultExpanded];
    modifiedExpanded[i] = !expandedBullets[i];
    setExpanedBullets(modifiedExpanded);
  };

  return (
    <div className="b-faq">
      <div>
        <div id="faq" className="b-faq_wrapper">
          <div className="b-faq_list">
            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("General")}
                </span>
              }
              template={
                <>
                  <div
                    className={`b-faq_list_item_content ${
                      expandedBullets[0] ? "accordin" : "accordinback"
                    }`}
                  >
                    <div>
                      <p className="regular grey pt-4">
                        {t("generel1")} <br /> <br />
                        {t("generel2")}
                      </p>
                      <br /> <br />
                    </div>
                  </div>
                </>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Collection of Personal Data")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[1] ? "accordin" : "accordinback"
                  }`}
                >
                  <div>
                    <p className="regular grey">
                      {t("personal1")} <br /> {t("personal2")} <br /> <br />{" "}
                      {t("personal3")} <br /> {t("personal4")} <br /> <br />{" "}
                      {t("personal5")} <br /> <br /> {t("personal6")} <br />{" "}
                      <br /> {t("personal7")}
                    </p>
                  </div>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("How we process personal data")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[2] ? "accordin" : "accordinback"
                  }`}
                >
                  <div>
                    <p className="regular grey">{t("process1")}</p>
                    <br />
                    <div className="overflow-x-auto">
                      <div className="div-fixed overflow-x-auto">
                        <div className="[&>*>div]:border [&>*>div]:p-4">
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div className="hidden md:block">
                              <strong>Purpose of the processing</strong>
                            </div>
                            <div className="hidden md:block">
                              <strong>Legal grounds for processing</strong>
                            </div>
                            <div className="hidden md:block">
                              <strong>Categories of personal data</strong>
                            </div>
                            <div className="hidden md:block">
                              <strong>Storage time</strong>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              To carry out and administer the mission as well as
                              protect EdmarLaws clients’ interests.
                            </div>
                            <div>
                              In order to fulfill condivactual obligations.
                            </div>
                            <div>
                              Name, email address, address, telephone number,
                              social security number, copies of identity
                              documents, employer as well as other data
                              necessary for the execution of our assignment.
                            </div>
                            <div>
                              For 10 years from a specific condivact completion,
                              or such longer time as the Mission’s nature
                              necessitates.
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              To perform mandatory conflict of interest checks
                              and money laundering condivols.
                            </div>
                            <div>
                              EdmarLaws legitimate interest or, where
                              appropriate, to comply with applicable law.
                            </div>
                            <div>
                              Name, e-mail address, regisdivation number,
                              address, telephone number.
                            </div>
                            <div>
                              In 10 years from a specific condivact completion,
                              or such longer time as the Mission’s nature
                              necessitates.
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              To manage the relationship with suppliers and
                              other parties than clients and counterparties.
                            </div>
                            <div>
                              In order to fulfill condivactual commitments,
                              EdmarLaws.
                            </div>
                            <div>
                              Name, e-mail address, regisdivation number,
                              address, telephone number.
                            </div>
                            <div>
                              During the term of this agreement and for one year
                              thereafter, unless a longer time is required to
                              make legal claims.
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>To manage job applications.</div>
                            <div>
                              Other legitimate interests during initial storage
                              period.&nbsp;Then further diveatment be based on
                              consent.
                            </div>
                            <div>
                              Name, email address, address, telephone number and
                              any other information which the applicant chooses
                              to submit in their application.
                            </div>
                            <div>
                              For published vacancies:<p></p>
                              <p>
                                Until the position is filled, then with any
                                consent.
                              </p>
                              <p>For unsolicited applications:</p>
                              <p>
                                Consent for continued storage is appropriate.
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>For accounting and billing purposes.</div>
                            <div>
                              In order to carry out EdmarLaws condivactual
                              commitments and to comply with applicable law.
                            </div>
                            <div>
                              Name, email address, address, regisdivation
                              number, telephone number.
                            </div>
                            <div>
                              Until the debt is paid, and then for up to seven
                              years in accordance with Swedish accounting rules.
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              To invite clients to events or to provide other
                              relevant information.
                            </div>
                            <div>Other legitimate interests.</div>
                            <div>Email address.</div>
                            <div>
                              As long as the EdmarLaw sends out such
                              information, unless the recipient declines.
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              To manage and assist those who contact us.
                            </div>
                            <div>Other legitimate interests.</div>
                            <div>Name, email address, phone number.</div>
                            <div>
                              As long as it is required to assist in the
                              contacting us.
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              For statistical purposes related to how visitors
                              use the EdmarLaws website.
                            </div>
                            <div>Other legitimate interests.</div>
                            <div>
                              The categories listed under the heading Cookies.
                            </div>
                            <div>6 months.</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              In order to comply with applicable law, such as
                              the Bookkeeping Act.
                            </div>
                            <div>In order to comply with applicable law.</div>
                            <div>
                              Name, email address, address, regisdivation
                              number, telephone number.
                            </div>
                            <div>
                              In accordance with the law (according to Swedish
                              accounting rules for seven years).
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Transfers of personal data")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[3] ? "accordin" : "accordinback"
                  }`}
                >
                  <div>
                    <p className="regular grey">
                      {t("transfer1")} <br /> <br /> {t("transfer2")}
                    </p>{" "}
                    <br />
                    <div>
                      <div className="overflow-x-auto">
                        <div className="[&>*>div]:border [&>*>div]:p-4">
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>
                              <strong>Subcondivactor (name service)</strong>
                            </div>
                            <div>
                              <strong>
                                Coundivy/region where the service performed
                              </strong>
                            </div>
                            <div>
                              <strong>
                                Mechanism for transfer to a third coundivy
                              </strong>
                            </div>
                            <div>
                              <strong>Type of service</strong>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>Dropbox, Inc.</div>
                            <div>EU/EEA/United States</div>
                            <div>
                              Certification according to EU-U.S. Data Privacy
                              Framework
                            </div>
                            <div>Cloud computing, storage and backup</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>Google, Inc. (Google Analytics)</div>
                            <div>EU/EEA/ United States</div>
                            <div>
                              Certification according to EU-U.S. Data Privacy
                              Framework
                            </div>
                            <div>Statistics related to our Web site</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>K10 Redovisning i Kalmar AB</div>
                            <div>EU</div>
                            <div>–</div>
                            <div>Bookkeeping and accounting</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>Microsoft (Office 365)</div>
                            <div>EU/EEA/ United States</div>
                            <div>
                              Certification according to EU-U.S. Data Privacy
                              Framework
                            </div>
                            <div>Cloud computing, storage and backup</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>Netintegrate Sweden AB</div>
                            <div>EU</div>
                            <div>–</div>
                            <div>It Support</div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4">
                            <div>P &amp; K TimeApp AB (TimeApp)</div>
                            <div>EU</div>
                            <div>–</div>
                            <div>Time divacking and invoicing</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <p>
                      {t("transfer3")} <br /> <br /> {t("transfer4")}
                    </p>
                  </div>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Rights for registered")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[4] ? "accordin" : "accordinback"
                  }`}
                >
                  <div>
                    <p>
                      <span
                        style={{ color: "#00AEEF" }}
                        target="_blank"
                        href="#"
                      >
                        {t("right1")}
                      </span>
                      {t("right2")}
                    </p>
                    <br />
                    <p>
                      <span
                        style={{ color: "#00AEEF" }}
                        target="_blank"
                        href="#"
                      >
                        {t("right3")}
                      </span>
                      {t("right4")}
                    </p>{" "}
                    <br />
                    <p>
                      <span
                        style={{ color: "#00AEEF" }}
                        target="_blank"
                        href="#"
                      >
                        {t("right5")}
                      </span>
                      {t("right6")}
                    </p>{" "}
                    <br />
                    <p>
                      <span
                        style={{ color: "#00AEEF" }}
                        target="_blank"
                        href="#"
                      >
                        {t("right7")}
                      </span>
                      {t("right8")}
                    </p>{" "}
                    <br />
                    <p>
                      <span
                        style={{ color: "#00AEEF" }}
                        target="_blank"
                        href="#"
                      >
                        {t("right9")}
                      </span>
                      {t("right10")}
                    </p>{" "}
                    <br />
                  </div>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Security")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[5] ? "accordinsp" : "accordinbacksp"
                  }`}
                >
                  <div>
                    <p className="regular grey">{t("security1")}</p>
                  </div>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Cookies")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[6] ? "accordinsp" : "accordinbacksp"
                  }`}
                >
                  <div>
                    <p className="regular grey">
                      {t("cookie1")} <br /> <br />
                      {t("cookie2")}
                    </p>
                  </div>
                </div>
              }
            ></ExpandCardTerms>

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Changes to this data protection policy")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[7] ? "accordinsp" : "accordinbacksp"
                  }`}
                >
                  <div>
                    <p className="regular grey">
                      {t("protect1")} <br /> <br /> {t("protect2")}
                    </p>
                  </div>
                </div>
              }
            />

            <ExpandCardTerms
              title={
                <span className="regular" style={{ fontWeight: "600" }}>
                  {t("Contact")}
                </span>
              }
              template={
                <div
                  className={`b-faq_list_item_content ${
                    expandedBullets[8] ? "accordinsp" : "accordinbacksp"
                  }`}
                >
                  <div>
                    <p className="regular grey">{t("contact1")}</p>
                    <br />
                    <p>
                      {t("contact2")}{" "}
                      <a href="mailto:malin.edmar@edmarlaw.se">
                        {t("contact3")}
                      </a>{" "}
                    </p>{" "}
                    <br />
                    <p>
                      {t("contact4")}{" "}
                      <a href="mailto:datainspektionen@datainspektionen.se">
                        {t("contact5")}
                      </a>{" "}
                      {t("contact6")}
                    </p>
                  </div>
                </div>
              }
            ></ExpandCardTerms>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
